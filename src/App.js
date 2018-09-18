import React from 'react';
import './App.css';
import ItemCreator from './ItemCreator';
import ItemsDisplay from './ItemsDisplay'
import DisplayControl from './DisplayControl'

const App = () =>(
  <div className="App">
    <ItemCreator />
    <ItemsDisplay />
    <DisplayControl />
  </div>
)

export default App;
