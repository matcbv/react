import './Home.css';
import { Component } from 'react';

class Home extends Component{
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter);

    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });

    this.setState(
      (prevState, prevProps) => {
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
