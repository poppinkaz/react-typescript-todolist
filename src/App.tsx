import React from 'react';
import {TodoListItem} from "./todoListItem"

const todos: Array<Todo> = [
  {text: "Walk the dog", complete: true},
  {text: "Write app", complete: false}
];

const App: React.FC = () => {
  return <TodoListItem todo={todos[0]}/>;
};

export default App;
