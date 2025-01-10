import { useCallback, useEffect, useState } from 'react';
import './styles.css';

const useAsync = (asyncFunction, shouldFetch) => {
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const getData = useCallback( async () => {
      setResult(null);
      setStatus('pending');
      setError(null);
      
      return asyncFunction()
      .then(res => {
        setStatus('settled');
        setResult(res);
      })
      .catch(e => {
        setStatus('error');
        setError(e);
      });
    }, [asyncFunction]
  );

  useEffect(() => {
    shouldFetch ?? getData();
  }, [getData, shouldFetch]);

  return [getData, result, status, error];
}

const fetchData = async () => await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();

function App() {
  const [reFetchData, result, status, error] = useAsync(fetchData, true);

  // Abaixo, utilizaremos um useEffect que será chamado toda vez que a função reFetchData for alterada. Essa, só sefrerá alterações, caso a função passada para useAsync (fetchData) seja alterada.
  useEffect(() => {
    reFetchData();
  }, [reFetchData]);

  if(status === 'idle'){
    return <p>Nada em execução</p>
  };

  if(status === 'pending'){
    return <p>Carregando posts...</p>
  };

  if(status === 'error'){
    // Abaixo, iremos verificar se error possui valor válido, para então exibir sua mensagem
    return <p>{error?.message || 'Ocorreu um erro desconhecido'}</p>
  };

  if(status === 'settled'){
    return <pre>{JSON.stringify(result, null, 2)}</pre>
  };
};

export default App;
