import './styles.css';
import React, { Suspense, useState } from 'react';

/*
  Ao realizarmos importações dinâmicas, seja com import().then(), quanto React.lazy(), como é o caso, nosso bundler cria um arquivo separado (chunk) contendo o código relacionado àquele módulo importado ao invés de incluí-lo ao bundle principal (entry chunck).

  Dessa forma, quando necessário, o navegador irá solicitar essas chuncks através das nossas importações dinâmicas, retornando uma promise que será resolvida no momento em que nosso chunck for completamente carregado e estiver pronto para ser exibido.
  
  Obs.: O função lazy() importa o componente LazyComponent apenas quando ele é renderizado pela primeira vez.
*/
const loadComponent = () => import('./lazy_component');
const LazyComponent = React.lazy(loadComponent);

export default function App() {
  const [show, setShow] = useState(false);

  return (
    // Enquanto o componente está sendo carregado, o React exibe o fallback definido no Suspense (no caso, o parágrafo com o nó de texto "Loading...").
    <div className='App'>
      {/* Através da função loadComponent, iremos adiantar o processo de requisição da chunck ao passar o mouse sobre o botão. Assim, ao ser clicado, já terá sido parcialmente ou completamente carregado. */}
      <button type="button" onMouseOver={loadComponent} onClick={() => setShow(s => !s)}>Show {show ? 'LC on screen' : 'LC is off screen'}</button>
      <Suspense fallback={<p>Loading...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
};
