import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../Redux/todoSlice.js';

export default function TodosList() {
  const { items, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <p>Loading todos...</p>;
  if (error)   return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {items.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? '✓' : '✗'}
          </li>
        ))}
      </ul>
    </div>
  );
}
