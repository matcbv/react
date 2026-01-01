import { useEffect } from 'react';
import useAsync from '../../utils/useAsync';
import './styles.css';

// Função a ser enviada para useAsync:
const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await data.json();
};

function App() {
  // Passando uma função e um booleano indicando se devemos realizar a nossa operação assíncrona:
  const [reFetchData, result, status, error] = useAsync(fetchData, true);

  // Abaixo, utilizaremos um useEffect que será chamado toda vez que a função reFetchData for alterada. Essa, só sefrerá alterações caso a função passada para useAsync (fetchData) seja alterada.
  useEffect(() => {
    reFetchData();
  }, [reFetchData]);

  if(status === 'idle'){
    return <p>Nada em execução</p>;
  };

  if(status === 'pending'){
    return <p>Carregando posts...</p>;
  };

  if(status === 'error'){
    // Abaixo, iremos verificar se error possui valor válido, para então exibir sua mensagem
    return <p>{error?.message || 'unknown error'}</p>;
  };

  if(status === 'settled'){
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  };
};

export default App;
