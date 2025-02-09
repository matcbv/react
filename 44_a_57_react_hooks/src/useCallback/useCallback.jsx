import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import '../styles.css';

/*
  Com a função memo, podemos passar um componente a ser "memorizado", junto de uma função de comparação. Sua estrutura segue o seguinte padrão:

  React.memo(Component, (prevProps, nextProps) => (
    // Exemplo de lógica:
    return prevProps === nextProps
  ))

  Com base na função de comparação informada, nosso componente só será re-renderizado caso ela retorne false.

  Caso não passemos uma função de comparação, será realizada uma shallow comparison. Para valores primitivos (strings, números, booleanos, null, undefined), o React realiza uma verificação estrita, já para objetos, arrays e funções, ele verifica apenas a referência e não o conteúdo interno.

  Obs.: No caso de valores não primitivos, devemos salvar a sua referência com o hook useCallback ou useRef.
*/
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
    Com o hook useCallback, conseguimos memorizar funções para que elas não sejam recriadas em cada renderização do componente. Sendo útil em situações onde passar funções como props para componentes filhos pode causar re-renderizações desnecessárias. Sua estrutura segue o seguinte padrão:

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
