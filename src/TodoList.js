import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators as TodoActions } from './store/ducks/todos'

export const TodoList = () => {

  const [ input, setInput ] = useState("");
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const { addTodo, toggleTodo, removeTodo } = TodoActions;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch( addTodo(input) );
    setInput("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <button type="submit">New</button>
      </form>

      <ul>
        {todos.map( todo => (
          <li key={todo.id}>
            {todo.complete ? <s>{todo.text}</s> : todo.text}

            <div>
              <button onClick={() => dispatch(toggleTodo(todo.id))}>Toogle</button>
              <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};