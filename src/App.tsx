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

  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Harry Potter',
      age: 12,
      url: "https://edutrip.edu.vn/wp-content/uploads/2020/11/Harry-Potter-was-a-kid.jpg",
      note: "Griffindor"
    }
  ])

  return (
    <div className="App">
      <h1>Hogwarts' Students</h1>
      <List people={people} />
    </div>
  );
}

export default App;
