import React, { useState } from 'react';
import List from './components/List'
import './App.css';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  } []
}

function App() {

  const [people, setPeople] = useState<IState['people']>([])

  return (
    <div className="App">
      <h1>Hogwarts' Students</h1>
      <List people={people} />
    </div>
  );
}

export default App;
