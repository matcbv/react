import PropTypes from 'prop-types';
import React, { useCallback, useState, useMemo } from 'react';
import '../styles.css';

/*
  Com a função memo, podemos passar um componente a ser "memoizado", junto de uma função de comparação. Sua estrutura segue o seguinte padrão:

  React.memo(Component, (prevProps, nextProps) => (
    // Exemplo de lógica:
    return prevProps === nextProps
  ))

  Com base na função de comparação informada, nosso componente só será re-renderizado caso ela retorne false.

  Caso não passemos uma função de comparação, será realizada uma shallow comparison. Para valores primitivos (strings, números, booleanos, null, undefined), o React realiza uma verificação estrita, já para objetos, arrays e funções, ele verifica apenas a referência e não o conteúdo interno.

  Obs.: No caso de valores não primitivos, devemos salvar a sua referência com o hook useCallback ou useRef.
*/
const Button = ({incrementBtn}) => {
    return <button type='button' onClick={() => incrementBtn(1)}> Incrementar </button>;
};

Button.propTypes = {
    increment: PropTypes.func,
};

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
        {/*
          Com o hook useMemo, podemos armazenar o resultado de uma função, executando novamente caso suas dependências sejam alterada. É útil em situações onde a recomputação pode ser custosa. Sua estrutura segue o seguinte padrão:

            useMemo(() => {
             return 'Uma função custosa';
            }, [dependecies]);

          Obs.: Diferentemente do useCallback, que "memoiza" toda a função, useMemo foca no resultado dela.
        */}
        {useMemo(() => {
          return <Button incrementBtn={incrementCounter} />;
        }, [incrementCounter])}
      </header>
    </div>
  );
};

export default App;
