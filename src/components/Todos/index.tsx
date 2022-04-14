import React, {useCallback, useEffect, useRef, useState} from 'react';
import './styles.css';
import DataTable  from 'react-data-table-component';
import Filter from "./components/Filter";
import {customStyles} from "./styles";
import ErrorMsg from "./components/ErrorMsg";

interface ITodo {
  userId: number,
  id: number,
  title: String,
  completed: boolean
}

const columns = [
  {
    name: '#',
    selector: 'id',
    width: '60px',
    cell: (row: ITodo) => <div className='table-cell'>{row.id}</div>,
  },
  {
    name: 'Title',
    selector: 'title',
    cell: (row: ITodo) => <div className='table-cell'>{row.title}</div>,
  },
  {
    name: 'Completed',
    selector: 'completed',
    width: '120px',
    cell: (row: ITodo) => <div className='table-cell'>{row.completed ? 'Yes' : 'No'}</div>,
  },
];

function Todos() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  let todos = useRef<ITodo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);
  const [errorMsg, setErrorMsg] = useState<String>('');

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setFilteredTodos(data);
      todos.current = data;
    } catch (e) {
      setErrorMsg('Error happened during loading data. Please try again');
    } finally {
      setIsLoading(false);
    }
  }

  const updateFilteredTodos = useCallback((searchString: string, isCompleted: string) => {
    let filteredResult: Array<ITodo> = [];

    if (searchString.length === 0 && isCompleted.length === 0) {
      filteredResult = todos.current;
    } else {
      if (searchString.length !== 0) {
        searchString = searchString.toLowerCase();
        if (isCompleted.length !== 0) {
          const isCompletedBool = isCompleted === 'true';
          filteredResult = todos.current.filter((todo) =>
            (todo.title.startsWith(searchString) && todo.completed === isCompletedBool));
        } else filteredResult = todos.current.filter((todo) => todo.title.toLowerCase().startsWith(searchString));
      } else if (isCompleted.length !== 0) {
        const isCompletedBool = isCompleted === 'true';
        filteredResult = todos.current.filter((todo) => todo.completed === isCompletedBool);
      }
    }
    setFilteredTodos(filteredResult);
    if (filteredResult.length === 0 && errorMsg === '' && !isLoading) setErrorMsg('No result for the given search parameters!');
    else if (filteredResult.length > 0 && errorMsg.length > 0) setErrorMsg('');
  }, [isLoading, errorMsg]);

  return (
    <div className='todos'>
      <Filter updateFilterState={updateFilteredTodos} />
      {(!errorMsg || isLoading) ?
        <DataTable
          columns={columns}
          data={filteredTodos}
          customStyles={customStyles}
          progressPending={isLoading}
        />
        :
        <ErrorMsg msg={errorMsg} />
      }

    </div>
  );
}

export default Todos;