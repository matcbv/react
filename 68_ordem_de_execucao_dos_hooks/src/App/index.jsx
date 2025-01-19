import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const ReactHooks = () => {

  // Mount - 2º Passo / Update - 1º Passo: Renderização do componente:
  console.log('%cCHILD RENDER STARTING...', 'color: green');

  // Mount - 1º Passo: Inicialização do estado com lazy initializer:
  const [state1, setState1] = useState(() => {
    const state = new Date().toLocaleDateString();
    console.log('%cState Lazy initializer - (useState + InitialValue) = ' + state, 'color: green');
    return state;
  });

  // Mount - 2º Passo / Update - 1º Passo: O useRef é avaliado como parte do processo de renderização inicial do componente:
  const renders = useRef(0);

  // Mount - 4º Passo / Update - 7º Passo: Execução dos Effects:
  useEffect(() => {
    console.log('%cuseEffect (UPDATE state1) ' + state1, 'color: #dbc70f');
  }, [state1]);

  // Mount - 4º Passo / Update - 7º Passo: Execução dos Effects:
  useEffect(() => {
    console.log('%cuseEffect -> No Dependencies', 'color: #dbc70f');
    renders.current += 1;

    // Update - 6º Passo / Unmount - 2º Passo: Limpeza dos Effects:
    return () => {
      console.log('%cuseEffect (Cleanup) -> No Dependencies', 'color: #dbc70f');
    };
  });

  // Mount - 4º Passo / Update - 7º Passo: Execução dos Effects:
  useEffect(() => {
    console.log('%cuseEffect -> Empty dependencies', 'color: #dbc70f');

    // Update - 6º Passo / Unmount - 2º Passo: Limpeza dos Effects:
    return () => {
      console.log('%cuseEffect (Cleanup) -> Empty dependencies', 'color: #dbc70f');
    };
  }, []);

  // Mount - 3º Passo / Upgrade - 4º Passo: Execução dos LayoutEffecs:
  useLayoutEffect(() => {
    console.log('%cuseLayoutEffect', 'color: #e61a4d');

    // Update - 3º Passo / Unmount - 1º Passo: Limpeza dos LayoutEffecs:
    return () => {
      console.log('%cuseLayoutEffect (Cleanup)', 'color: #e61a4d');
    };
  });

  // Fim da renderização do componente:
  console.log('%cCHILD RENDER ' + renders.current + ' ENDING...', 'color: green');

  return (
    <div onClick={() => setState1(new Date().toLocaleString('pt-br'))} style={{ fontSize: '60px' }}>
      State: {state1}
    </div>
  );
};

export const Home = () => {
  // Mount - 2º Passo / Update - 1º Passo: O useRef é avaliado como parte do processo de renderização inicial do componente:
  const renders = useRef(0);

  // Mount - 4º Passo / Update - 7º Passo: Execução dos Effects:
  useEffect(() => {
    renders.current += 1;
  });

  // Mount - 2º Passo / Update - 1º Passo: Renderização do componente:
  console.log(`%cPARENT RENDER ${renders.current} STARTING...`, 'color: green');
  
  // Mount - 1º Passo: Inicialização do estado:
  const [show, setShow] = useState(false);
  console.log('%cState Initializer - (useState + InitialValue) = ' + show, 'color: green');

  // Fim da rendereização do componente
  console.log(`%cPARENT RENDER ${renders.current} ENDING...`, 'color: green');

  return (
    <div>
      <p onClick={() => setShow((s) => !s)}>
        Show hooks
      </p>
      {show && <ReactHooks />}
    </div>
  );
};