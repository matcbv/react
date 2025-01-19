import { Children, cloneElement } from 'react';
import './styles.css';

// Objeto contendo os estilos a serem utilizados em nossos elementos:
const styles = {
  style: {
    backgroundColor: 'blue',
  },
};

const Parent = ({children}) => {
  return Children.map(children, child => {
    /*
      Não é possível acessarmos diretamente os objetos React (como componentes ou elementos React) durante o tempo de execução, porque eles são abstrações criadas pelo React para gerenciar a interface de usuário. Essa restrição existe porque o React manipula a árvore de componentes de forma otimizada e mantém o controle interno da renderização.

      child.props.style -> Não seria possível acessar os estilos diretamente.

      Para que isso passe a ser possível, iremos utilizar a função cloneElement.
    */
    const newChild = cloneElement(child, {...styles})
    return newChild;
  });
};

export default function App() {
  return (
    <div>
      <Parent>
        <h1>Oi</h1>
        <p>Um texto qualquer</p>
      </Parent>
    </div>
  );
};
