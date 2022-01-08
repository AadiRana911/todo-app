import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList todos = {[
        {title: 'Do the Dishes', isCompleted: true, description: 'None'},
        {title: 'Mow the Lawn', isCompleted: true, description: 'None'}
      ]} />
    </div>
  );
}

export default App;
