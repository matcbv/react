import './styles.css';
import { Component } from 'react';

class Home extends Component{
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    /*
      Após manipularmos o resutado de nosso estado, notamos que ao acessá-lo logo em seguida, o valor estará "desatualizado". Isso ocorre porque, na verdade, o que estamos manipulando não é o DOM diretamente, e sim o Virtual DOM, um cópia do DOM do nosso navegador.

      O React irá possui o Virtual DOM e uma cópia dele. Ao manipularmos nosso estado, o React irá comparar o Virtual DOM com sua cópia, e alterar no DOM original apenas os elementos que foram alterados. Portanto, nosso console.log irá mostrar o valor que ainda está sendo atualizado pela método assíncrona setState().
    */
    console.log(this.state.counter);

    // Para que isso seja corrigido, devemos utilizar um recurso oferecido pelo setState, uma função de callback que é chamada ao fim da execução da operação assíncrona.
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });

    // Por fim, podemos também passar uma função para ser feita na operação assíncrona. Essa função recebe dois parâmetros: prevState e prevProps.
    this.setState(
      (prevState, prevProps) => {
        // prevState é o estado prévio do nosso componente, já prevProps são as props recebidas pelo nosso componente.
        return {counter: prevState.counter + prevProps.toIncrease}; 
      },
      () => {
        console.log(this.state.counter);
      }
    );
  };
 
  render() {
    return(
      <div className='container'>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Incrementar</button>
      </div>
    );
  };
};

export default Home;
