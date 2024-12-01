import { Component } from 'react';

// --------- Sobre ---------

/*
    Lifecycle Methods (métodos do ciclo de vida) são usados em componentes de classe no React para controlar o que acontece em diferentes estágios do ciclo de vida de um componente. Eles são divididos em três fases principais:

    - Montagem (Mounting): Quando o componente é inserido no DOM.
    - Atualização (Updating): Quando o componente é atualizado (por mudanças em props ou estado).
    - Desmontagem (Unmounting): Quando o componente é removido do DOM.
*/

// --------- Mounting methods ---------

/*
    componentDidMount(): Executado após o componente ser montado no DOM

    Forma de uso:

    - Fazer requisições de API.
    - Configurar subscrições (event listeners, WebSockets, etc.).
    - Operações que dependem do DOM (como medir elementos).

    Ex.:
*/

class Mounting extends Component{
    state = {
        randomText: 'Esse texto ainda não foi modificado'
    };

    componentDidMount(){
        this.setState({
            randomText: 'A página foi totalmente carregada'
        })
    };

    render(){  
      return <div className="App">{ this.state.randomText }</div>
    };
  }

// --------- Updating methods ---------

/*
    shouldComponentUpdate(nextProps, nextState): Determina se o componente deve ser atualizado ou não.

    Formas de uso:

    - Retorna true (atualiza) ou false (não atualiza).
    - Usado para melhorar a performance evitando atualizações desnecessárias.


    componentDidUpdate(prevProps, prevState, snapshot): Executado após o componente ser atualizado no DOM.

    Formas de uso:

    - Fazer ações com base na atualização (como disparar novos fetches).
    - Sincronizar estado ou realizar side effects.
*/

class Updating extends Component{
    state = {
        value: null
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.valor !== this.state.value;
      }      

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('O componente foi atualizado.');
    };

    render(){  
      return <div className="App">{ this.state.value }</div>
    };
  }

// --------- Unmounting methods ---------

/*
    componentWillUnmount(): Executado antes do componente ser removido do DOM.

    Formas de uso:

    - Limpar subscrições.
    - Cancelar timers ou intervalos.
    - Evitar vazamentos de memória.
*/

class Unmounting extends Component{
    state = {
        realoadCounter: 0
    };

    componentWillUnmount(){
        this.setState({
            realoadCounter: this.realoadCounter + 1
        })
    }

    render(){  
      return <div className="App">{ this.state.realoadCounter }</div>
    };
  }
