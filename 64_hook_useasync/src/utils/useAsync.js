import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, shouldFetch) => {
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const getData = useCallback( async () => {
      setResult(null);
      setStatus('pending');
      setError(null);
      
      // Retornando uma nova promise gerada pela chamada de asyncFunction com then():
      // Obs.: A promise retornada não será utilizada.
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

  // Abaixo, o useEffect será chamado no caso da nossa função getData ou o parâmetro shouldFetch mudarem.
  useEffect(() => {
    // Executando getData caso shouldRender for true:
    shouldFetch ?? getData();
  }, [getData, shouldFetch]);

  return [getData, result, status, error];
}

export default useAsync;
