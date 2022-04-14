import React, {useEffect, useState} from 'react';
import './styles.css';

function Filter(props: {updateFilterState: Function}) {
  const [searchString, setSearchSrting] = useState('');
  const [isCompleted, setIsCompleted] = useState('');
  const {updateFilterState} = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      updateFilterState(searchString, isCompleted)
    }, 300);

    return () => clearTimeout(timer);
  }, [searchString, isCompleted, updateFilterState]);

  return(
    <div className='filter-form'>
      <div className='form-field-wrapper'>
        <label htmlFor='search'>Search: </label>
        <input
          id='search'
          name='search'
          placeholder={'keyword...'}
          className='form-field'
          value={searchString}
          onChange={(e) => setSearchSrting(e.target.value)}
        />
      </div>
      <div className='form-field-wrapper'>
        <label htmlFor='completed'>Completed: </label>
        <select
          name="completed"
          id="completed"
          className='form-field'
          size={1}
          defaultValue={isCompleted}
          onChange={(e) => setIsCompleted(e.target.value)}
        >
          <option value="">-</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </div>
    </div>
  )
}

export default Filter;