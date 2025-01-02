import { useEffect, useState } from 'react';
import '../styles.css';

function eventFn(){
  console.log('Clicado!')
}

function App(){
  const [counter, setCounter] = useState(0);

  // Ao trabalharmos com o useEffect sem passarmos um array de dependências, ele se comporta como o lifecycle method componentDidUpdate:
  useEffect(() => {
    console.log('componentDidUpdate');
  });

   // Ao passarmos um array de dependencias vazio, ele se comportará como o lifecycle method componentDidMount:
  useEffect(() => {
    console.log('componentDidMount')
  }, []);

  // Já passando dependências junto ao array, nosso componente será atualizado toda vez que essas dependências forem inicializada ou alteradas:
  useEffect(() => {
    // Obs.: Só podemos acessar em nosso useEffect, estados passados como dependências a ele.
    console.log('counter foi alterado para:', counter)
    // setCounter(counter + 1) -> Isso causaria um loop. Portanto, devemos nos atentar em utilizar somente modificadores de estado que não tenham relação com nossas dependências.
  }, [counter]);

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);
    // Ao retornarmos uma função em nosso useEffect, essa função retornada irá se comportar como o lifecycle method componentWillUmount:
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Contador: {counter}
        </h1>
        <button type='button' onClick={() => setCounter(counter + 1)}>
          Incrementar
        </button>
      </header>
    </div>
  )
}

export default App;
