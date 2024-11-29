import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Por padrão, componentes no React devem ser iniciados com letra maiúscula no React.
function App() {
  /*
    Todo componente deve retornar somente um elemento root (div com className App). Caso tentarmos retornar mais de um elemento, devemos utilizar o chamado React Fragment, ou um erro será levantado. A estrutura do React Fragment é:

    <React.Fragment> ... </React.Fragment>
    Ou sua forma abreviada:
    <> ... </>

    Obs.: Em sua forma abreviado, não é possível o uso de atributos na tag.
  */
  return (
    // Em jsx, className possui a função da propriedade class do HTML.
    <>
      <div className="App">
        <header className="App-header">
          {/* Todo o cógigo posto entre chaves no JSX é interpretado como código javascript. */}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div>
        <p>Esse é um texto de exemplo.</p>
      </div>
    </>
  );
}

// Também conseguimos criar componentes de classe:
class ClassApp extends Component{
  constructor(props){
    super(props);
    // O método bind cria uma nova função (uma cópia da função original) substituindo o valor do this pelo informado.
    this.clickHandle = this.pClickHandle.bind(this);
    // A propriedad state é um objeto que contém valores que representam o estado atual do componente. Esses valores podem ser usados no JSX para renderizar o conteúdo dinamicamente, com base no estado atual do componente.
    this.state = {
      name: 'Matheus Cerqueira',
      counter: 0
    };
  } 

  // O React, por padrão, não realiza o binding do this. Dessa forma, para termos acesso a ele no método, temos de realizar tal processo manualmente, assim como foi feito em nosso constructor.
  pClickHandle(){
    console.log(`Clicked - ${ this.state.name }`);
    // Iremos também mudar o valor da propriedade name de nosso state. Para isso, devemos utilizar o método setState. Ao realizarmos tal mudança, nosso método render será chamado automaticamente, atualizando nossa aplicação com o novo valor de name.
    this.setState({ name: 'Matheus' });
  };

  // Podemos evitar a necessidade de utilizar o binding do this de nossos métodos ao utilizarmos arrow function.
  aClickHandle = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render(){
    const { name, counter } = this.state;

    // Implementando o valor de name dinâmicamente:
    return (
      <div>
        <h1>Primeiros passos com React</h1>
        <p onClick={ this.pClickHandle }>{ name } { counter }</p>
        <a onClick={ this.aClickHandle } href='/'>Adicionar +1 ao contador</a>
      </div>
    )
    /*
      Tambem podemos adicionar os chamados Synthetic Events em nossas tags do JSX.
    */
  };
};

// Sempre iremos exportar nosso componente para ser importado para uso sempre que necessário.
export default ClassApp;
