import React, { Children, cloneElement, useState } from 'react';
import './styles.css';

const styles = {
  style: {
    backgroundColor: 'blue',
    color: 'white',
  },
};

const TurnOnOff = ({children}) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn(s => !s);

  return Children.map(children, child => {
    /*
      Verificando o tipo da child e, caso não seja um componente, retornando a própria child sem nenhuma alteração
      
      Obs.: Todo elemento react tem seu tipo como uma string com o nome de sua tag.
    */
    console.log(child);
    if(typeof child.type === 'string'){
      return child;
    };

    /*
      A função cloneElement é responsável por clonar um elemento React existente e, opcionalmente, adicionar ou sobrescrever propriedades (props) no clone. Sua sintaxe segue o seguinte padrão:

      React.cloneElement(element, [props], [...children])
      
      - element: O elemento React que será clonado.
      - props: Um objeto contendo as propriedades que serão adicionadas ou sobrescritas no clone.
      - children (opcional): Os filhos que o elemento clonado deve conter. Se não fornecidos, os filhos do elemento original serão mantidos.
    */
    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    });
    return newChild;
  });
};

const TurnedOn = ({isOn, children}) => isOn ? children : null;
const TurnedOff = ({isOn, children}) => isOn ? null : children;
// Ao passar nossos estilos via props para nosso componente, devemos utilizar o spread operator, seja via parâmetro, para retirá-lo do objeto padrão das props, quanto para passar os estilos para nosso elemento, retirando-os do objeto styles.
const TurnButton = ({isOn, onTurn, ...props}) => <button type="button" {...props} onClick={onTurn}>Turn {isOn ? 'OFF' : 'ON'}</button>;

export default function App() {
  return (
    <TurnOnOff>
      <TurnedOn>
        <p>Ligado</p>
      </TurnedOn>
      <TurnedOff>
        <p>Desligado</p>
      </TurnedOff>
      <p>Um texto aleatório</p>
      <TurnButton {...styles} />
    </TurnOnOff>
  );
};
