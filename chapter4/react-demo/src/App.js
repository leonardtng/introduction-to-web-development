import { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const handleUp = () => {
    setCount(count + 1);
  };

  const handleDown = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div className="app-container">
        <h1>My Counter</h1>
        <div>
          <h2>The count: {count}</h2>
          <div className="button-group">
            <button onClick={handleUp}>Increase</button>
            <button onClick={handleDown}>Decrease</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
