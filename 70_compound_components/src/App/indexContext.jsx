import React, { createContext, useContext, useState } from 'react';
import './styles.css';

const styles = {
  style: {
    backgroundColor: 'blue',
    color: 'white',
  },
};

const TurnOnOffContext = createContext();

const TurnOnOff = ({children}) => {
    const [isOn, setIsOn] = useState(false);
    const onTurn = () => setIsOn(s => !s);

    // No caso de nossas children estarem contidas dentro de um outro elemento pai, podemos substituir os uso do mapeamento com cloneElement pelo uso de um provider. Dessa forma, criaremos um contexto que poderá ser acessado por qualquer componente filho. 
    return (
        <TurnOnOffContext.Provider value={{isOn, onTurn}}>
            {children}
        </TurnOnOffContext.Provider>
    );
};

const TurnedOn = ({children}) => {
    const {isOn} = useContext(TurnOnOffContext);
    return isOn ? children : null;
};
const TurnedOff = ({children}) => {
  const {isOn} = useContext(TurnOnOffContext);
  return isOn ? null : children;
};
const TurnButton = ({...props}) => {
  const {isOn, onTurn} = useContext(TurnOnOffContext);
  return <button type="button" {...props} onClick={onTurn}>Turn {isOn ? 'OFF' : 'ON'}</button>;
};

export default function App() {
  return (
    <TurnOnOff>
      {/* Abaixo, nossos componentes estão contidas em uma div, impedindo o mapeamento direto deles. */}
      <div>
        <TurnedOn>
          <p>Ligado</p>
        </TurnedOn>
        <TurnedOff>
          <p>Desligado</p>
        </TurnedOff>
        <p>Um texto aleatório</p>
        <TurnButton {...styles} />
      </div>
    </TurnOnOff>
  );
};
