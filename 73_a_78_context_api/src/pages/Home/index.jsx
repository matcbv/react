import useCounterContext from '../../contexts/CounterContext/use_counter_context';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import './styles.css';

const Home = () => {
  // Actions será o objeto retornado por buildActions().
  const [, actions] = useCounterContext();

  const styles = {
    style: {
      width: '250px',
      display: 'flex',
      flexFlow: 'column wrap',
    },
  };

  const handleError = () => {
    actions.asyncError()
    .then(r => console.log(r))
    .catch(e => console.log(e.name + ':', e.message))
  }

  return (
    <div className='Home'>
      <Heading />
      <div {...styles}>
        {/* Ao passarmos as funções contidas em actions para nossos botões, iremos acionar nosso reducer, que por sua vez, irá atualizar o estado do nosso componente. */}
        <Button onClickFunc={actions.increase}>increase</Button>
        <Button onClickFunc={actions.decrease}>decrease</Button>
        <Button onClickFunc={actions.reset}>reset</Button>
        <Input />
        <Button onClickFunc={actions.asyncIncrease}>asyncIncrease</Button>
        <Button onClickFunc={handleError}>asyncError</Button>
      </div>
    </div>
  );
};

export default Home;
