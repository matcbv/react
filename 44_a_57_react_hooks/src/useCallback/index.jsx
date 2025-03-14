import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import '../styles.css';

const Button = React.memo(
  ({incrementBtn}) => {
    console.log('Button rendered');
    return <button type='button' onClick={() => incrementBtn(1)}> Incrementar </button>;
  }
)

Button.propTypes = {
    increment: PropTypes.func,
}

function App(){
  console.log('App rendered');

  const [counter, setCounter] = useState(0);
  
  /*
    Com o hook useCallback, conseguimos "memoiza" funções para que elas não sejam recriadas em cada renderização do componente. Sendo útil em situações onde passar funções como props para componentes filhos pode causar re-renderizações desnecessárias. Sua estrutura segue o seguinte padrão:

    useCallback(callbackFunction, [dependencies]);
  */
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
        <Button incrementBtn={incrementCounter} />
      </header>
    </div>
  )
}

export default App;
