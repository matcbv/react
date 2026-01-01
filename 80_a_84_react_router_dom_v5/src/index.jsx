import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SecundaryPage from './pages/SecundaryPage';
import Page404 from './pages/Page404';
import Menu from './components/Menu';
import { CounterContextProvider } from './contexts/CounterContext';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      {/*
        O BrowserRouter é um componente que faz parte da biblioteca React Router é responsável por envolver toda a aplicação (ou uma parte dela) para fornecer a funcionalidade de roteamento baseada na URL. Funciona como uma espécie de Provider de roteamento.
        
        Quando você utiliza o BrowserRouter, ele faz parte de uma abordagem chamada Single Page Application (SPA). Quando a URL é alterada, a página não é recarregada, pois a navegação é gerenciada dinamicamente pelo React (cliente-side).

        O React escuta o evento popstate do navegador que é disparado sempre que o usuário navega pelo histórico usando os botões de "voltar" ou "avançar". Além disso, também intercepta as alterações da URL feita via pushState() ou replaceState(). Com essas maneiras, consegue previnir o reload, re-renderizando o componente correto.

        Obs: Os eventos pushState() e replaceState() são chamados via useNavigate ou o componente Link.
      */}
      <BrowserRouter>
        <Menu />
        {/* O Switch é responsável por escolher a primeira rota que atende com a selecionada no navegador pelo BrowserRouter. */}
        <Switch>
          {/*
            Abaixo, temos as rotas disponíveis em nosso roteamento.

            Com a propriedade exact, especificamos que nossa rota deve ter exatamente o caminho especificado. Ex.:

            Sem exact, / poderia resultar em /secPage, já que começa com /, já contando como match.
          */}
          <Route path='/secPage/:slug?' component={SecundaryPage} />
          <Route path='/' component={Home} exact/>
          <Route path='*' component={Page404} />
        </Switch>
      </BrowserRouter>
    </CounterContextProvider>
  </React.StrictMode>
);
