import { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import './App.css';

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      text
      isCompleted
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      isCompleted
    }
  }
`;

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: ID!) {
    toggleTodo(id: $id) {
      id
      isCompleted
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

function App() {
  const [input, setInput] = useState("");
  const { data, loading, error } = useQuery(GET_TODOS);
  const [addTodo] = useMutation(ADD_TODO);
  const [toggleTodo] = useMutation(TOGGLE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleAddTodo = () => {
    if (!input.trim()) return;
    addTodo({ variables: { text: input }, refetchQueries: [{ query: GET_TODOS }] });
    setInput('');
  };

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && handleAddTodo()}
      />
      <button onClick={handleAddTodo}>Add Task</button>
      {data.todos.map(({ id, text, isCompleted }) => (
        <div key={id}>
          <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{text}</span>
          <button onClick={() => toggleTodo({ variables: { id }, refetchQueries: [{ query: GET_TODOS }] })}>Toggle</button>
          <button onClick={() => deleteTodo({ variables: { id }, refetchQueries: [{ query: GET_TODOS }] })}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;