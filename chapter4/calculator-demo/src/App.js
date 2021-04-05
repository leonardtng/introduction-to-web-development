import { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('')

  const handleInput = newInput => {
    if (newInput === 'clear') {
      setInput('');
      setOutput('');
    } else if (newInput === 'calculate') {
      handleCalculate();
    } else if (['+', '-', '*', '/'].includes(newInput)) {
      setInput(input + ' ' + newInput + ' ');
    } else {
      setInput(input + newInput);
    }
  };

  const handleCalculate = () => {
    setInput('');
    
    /* eslint-disable */
    setOutput(eval(input).toString());
    /* eslint-enable */

    // Note: eval can be a dangerous function as it can evaluate even malicious js code, but for this example, this is fine!
  };

  return (
    <div className="app">
      <div className="app-container">
        <h1>Calculator</h1>
        <h2>Input: {input}</h2>
        <h2>Output: {output}</h2>
        <div className="button-group">
          <button onClick={() => handleInput('+')}>+</button>
          <button onClick={() => handleInput('1')}>1</button>
          <button onClick={() => handleInput('2')}>2</button>
          <button onClick={() => handleInput('3')}>3</button>
        </div>
        <div className="button-group">
          <button onClick={() => handleInput('-')}>-</button>
          <button onClick={() => handleInput('4')}>4</button>
          <button onClick={() => handleInput('5')}>5</button>
          <button onClick={() => handleInput('6')}>6</button>
        </div>
        <div className="button-group">
          <button onClick={() => handleInput('*')}>*</button>
          <button onClick={() => handleInput('7')}>7</button>
          <button onClick={() => handleInput('8')}>8</button>
          <button onClick={() => handleInput('9')}>9</button>
        </div>
        <div className="button-group">
          <button onClick={() => handleInput('/')}>/</button>
          <button onClick={() => handleInput('clear')}>CLR</button>
          <button onClick={() => handleInput('0')}>0</button>
          <button onClick={() => handleInput('calculate')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
