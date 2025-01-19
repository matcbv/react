import { useEffect, useState } from 'react';
import React from 'react';
import './styles.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Nossa classe terá um estado chamado hasError, com valor inicial de false
    this.state = { hasError: false };
  }

  // getDerivedStateFromError é responsável por atualizar o estado do componente ErrorBoundary quando um erro é detectado, para que na próxima renderização ele possa exibir algo diferente, como uma interface de fallback ou uma mensagem personalizada.
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Com componentDidCatch, lidamos com erros após serem capturados, geralmente para registrar logs ou executar ações de recuperação.
  componentDidCatch(error, info) {
    console.log('Erro capturado:', error);
    console.log('Informações do stack:', info.componentStack)
  }

  render() {
    // Caso nosso estado tenha seu valor alterado, iremos renderizar uma mensagem personalizada. Caso contrário, irá retornar os componentes filhos normalmente.
    if (this.state.hasError) {
      return <h1>Ops... Algo deu errado!</h1>;
    }
    // Obs.: No React, qualquer elemento ou componente que você envolver dentro de outro componente será acessível através de props.children.
    return this.props.children;
  }
}

const ItWillThrowAnError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if(counter > 3) throw new Error('Counter é maior que 3');
  }, [counter])

  return (
    <div>
      <button onClick={() => setCounter(c => c + 1)} type="button">Click to increase {counter}</button>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <ItWillThrowAnError />
      </ErrorBoundary>
    </div>
  );
};
