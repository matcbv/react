import PropTypes from 'prop-types';
import React, { useCallback, useState, useMemo } from 'react';
import '../styles.css';

/*
  Com a função memo, podemos passar um componente a ser "memorizado", junto de uma função de comparação. Sua estrutura segue o seguinte padrão:

  React.memo(Component, (prevProps, nextProps) => (
    // Exemplo de lógica:
    return prevProps === nextProps
  ))

  Com base na função de comparação informada, nosso componente só será re-renderizado caso ela retorne true.
*/
const Button = ({incrementBtn}) => {
    return <button type='button' onClick={() => incrementBtn(1)}> Incrementar </button>;
  }

Button.propTypes = {
    increment: PropTypes.func,
}

function App(){

  const [counter, setCounter] = useState(0);
  
  const incrementCounter = useCallback(
    (num) => setCounter((prevState) => prevState + num),
    []
  );

  return (
    <div className="App">
      <header className="App-header"> 
        <h1>
          Contador: {counter}
        </h1>
        {/* Também podemos utilizar a função memo através do hook useMemo: */}
        {useMemo(() => {
          return <Button incrementBtn={incrementCounter} />;
        }, [incrementCounter])}
      </header>
    </div>
  )
}

export default App;
