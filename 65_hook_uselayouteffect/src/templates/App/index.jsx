import { useLayoutEffect, useRef, useState } from 'react';
import './styles.css';

function App() {
  const [counted, setCounted] = useState([1, 2, 3, 4]);
  const countedRef = useRef();

  // O useLayoutEffect possui a mesma estrutura de useEffect, entretando, é executado sincronamente logo após a renderização do DOM, mas antes da pintura na tela. Isso significa que o componente é renderizado, mas a mudança no DOM só é visível após o efeito ser completado.
  useLayoutEffect(() => {
    const now = Date.now();
    while(Date.now() < now + 2000);
    countedRef.current.scrollIntoView({
      behavior: 'smooth',
      top: 'nearest',
      left: 'nearest',
    })
  }, [counted]);

  return (
    <>
      <button type='button' onClick={() => setCounted( c => [...c, c.at(-1) + 1] )}>Count {counted.at(-1)}</button>
      <div style={{height: '150px', width: '150px', overflowX: 'scroll', marginTop: '10px'}}>
        {counted.map( c => <span key={`c-${c}`} ref={countedRef}>{c}</span> )}
      </div>
    </>
  );
};

export default App;
