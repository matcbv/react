import Prop from 'prop-types';
import { useCallback, useState } from 'react';
import './useCallback.css';

const Button = (incrementBtn) => {
    return <button type='button' onClick={() => incrementBtn()}> Incrementar </button>
}

Button.propTypes = {
    increment: Prop.func,
}

function App(){
  const [counter, setCounter] = useState(0);

  const incrementCounter = (num) => {
    setCounter(counter + num)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Contador: {counter}
        </h1>
        <Button incrementBtn={incrementCounter} />
      </header>
    </div>
  )
}

export default App;
