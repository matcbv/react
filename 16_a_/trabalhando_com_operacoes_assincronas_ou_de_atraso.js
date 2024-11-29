import { Component } from 'react';

// No React, quando um componente é desmontado, ele não existe mais no DOM. Porém, operações assíncronas que ainda estão em andamento (como o callback de um setTimeout) não têm conhecimento de que o componente foi desmontado. Quando essas operações tentam alterar o estado com setState, o React detecta que o componente não está mais montado e exibe um erro informando: Can't perform a React state update on an unmounted component. Isso é ocasionado para evitar comportamentos inesperados ou vazamentos de memória.

class IntervalComponent extends Component{
    state = {
      counter: 0
    };

    componentDidMount(){
        this.handleTimeout();
    }

    // Para que o erro seja evitado, devemos utilizar o métodos componentWillUnmount para finalizar todas as operações assíncronas pendentes.
    componentWillUnmount(){
      console.log('Componente será deletado');
      clearInterval(this.counterTimeout);
    }

    handleTimeout = () => {
      const { posts, counter } = this.state;
      posts[0].title = 'Título alterado';
      this.setState({ posts });

      this.counterTimeout = setTimeout(() => {
        this.setState({ counter: counter + 1 });  
      }, 3000);
    };
}
