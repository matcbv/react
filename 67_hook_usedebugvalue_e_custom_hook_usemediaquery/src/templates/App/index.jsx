import { useDebugValue, useEffect, useState } from 'react';

const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  /*
    O hook useDebugValue permite que uma mensagem descritiva seja adicionada aos hooks personalizados no React DevTools. Sua estrutura segue o seguinte padrão:

    useDebugValue(value, (value) => { value ? 'Ok': 'Error' });

    Obs.: O segundo parâmetro será uma função que receberá o valor passado no primeiro parâmetro. Com ela, podemos formatar esse valor ou até mesmo realizar uma lógica adicional.
  */
  useDebugValue(`query size: ${queryValue}`);

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      // Acessando a propriedade matches de matchMedia, que possui o booleano indicando se a condição foi atendida:
      setMatch(matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleChange);
    // setMatch(!!matchMedia.matches); ???

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

export const Home = () => {
  // Obtendo as media queries:
  const extraLarge = useMediaQuery('(min-width: 1200)')
  const large = useMediaQuery('(min-width: 992px) and (max-width: 1199px)');
  const medium = useMediaQuery('(min-width: 768px) and (max-width: 991px)');
  const small = useMediaQuery('(min-width: 600px) and (max-width: 767px)');
  const extraSmall = useMediaQuery('(max-width: 599px)');

  const backgroundColor = extraLarge ? 'purple' : large ? 'green' : medium ? 'yellow' : small ? 'orange' : extraSmall ? 'red': null;

  return <div style={{backgroundColor}}>Oi</div>;
};