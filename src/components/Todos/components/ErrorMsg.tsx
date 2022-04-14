import React from "react";

export default function ErrorMsg(props: {msg: String}) {
  const {msg} = props;
  return (
    <div style={{
      backgroundColor: '#FF0000',
      color: '#FFFFFF',
      padding: '15px 10px',
      borderRadius: '6px'
    }}>{msg}</div>
  )
}