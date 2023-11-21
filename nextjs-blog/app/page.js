'use client'

import React, { useState } from 'react';
import Head from 'next/head';

function Page() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const Submit = (e) => {
    e.preventDefault(); 
    setTodos([...todos, input]);
    setInput('');
  };

  const Change = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={Submit}>
        <input type='text' value={input} onChange={Change} />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
