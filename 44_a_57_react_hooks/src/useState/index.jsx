import { useState } from 'react';
import '../styles.css';

function App(){
  const [counter, setCounter] = useState(0);
  const [times, setTimes] = useState(1);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const incrementNTimes = () => {
    for(let i = times; i--; i <= 0){
      /*
        Todo hook useState possui uma fila de atualizações a serem executadas, seguindo a mesma ordem que foram chamadas. No exemplo abaixo, ao chamarmos nosso setCounter determinado número de vezes, podemos enfrentar uma situação inesperada. Exemplo:
        
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1); 
        
        No caso acima, será utilizado o valor obsoleto de counter em todas as chamadas, pois o novo valor do estado só estará disponível após a rederização do componente.

        Obs.: Todas as chamadas de setCounter serão realizads no mesmo ciclo de execução para evitar múltiplas renderizações desnecessárias. Dessa forma, nosso componente terá seu estado atualizado com somente uma renderização.
      */
      setCounter(prevState => (prevState + 1)); // Utilizando o estado anterior (prevState), é garantido que sempre utilizemos o valor atualizado de nosso estado na próxima chamada de setCounter.
    };
  };

  return (
    <div className="App">
      <h1>
        Contador: { counter }
      </h1>
      <button type='button' onClick={handleClick}>
        Icrement
      </button>
      <div>
        <input type="text" name="times" id="times" onChange={e => setTimes(e.target.value)} />
        <button onClick={ incrementNTimes }>Increment { times } times</button>
      </div>
    </div>
  );
};

export default App;
