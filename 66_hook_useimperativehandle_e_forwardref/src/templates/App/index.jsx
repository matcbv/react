import { useEffect, useRef, useState } from 'react';
import './styles.css';
import CountedDisplay from '../../components/CountedDisplay';

function App() {
  const [counted, setCounted] = useState([1, 2, 3, 4]);
  const countedRef = useRef();

  useEffect(() => {
    // Acessando o parágrafo contido na propriedade indexRef, passada pela função CountedDisplay:
    countedRef.current.indexRef.scrollIntoView({
      behavior: 'smooth',
      top: 'nearest',
      left: 'nearest',
    });
  }, [counted]);

  const handleClick = () => {
    setCounted( c => [...c, c.at(-1) + 1] );
    // Acessando a função handleClick da função CountedDisplay, passada para nossa referência countedRef:
    countedRef.current.handleClick();
  };

  return (
    <>
      <button type='button' onClick={handleClick}>Count {counted.at(-1)}</button>
      <CountedDisplay counted={counted} ref={countedRef}/>
    </>
  );
};

export default App;
