import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="app-container">
        <h1>My Counter</h1>
        <div>
          <h2>The count: {count}</h2>
          <div className="button-group">
            <Button direction={true} setCount={setCount} />
            <Button direction={false} setCount={setCount} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
