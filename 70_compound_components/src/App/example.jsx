import { Children, cloneElement } from 'react';
import './styles.css';

// Objeto contendo os estilos a serem utilizados em nossos elementos:
const styles = {
  style: {
    backgroundColor: 'blue',
  },
};

const Parent = ({children}) => {
  /*
    Com o objeto Children, conseguimos lidar corretamente com as props.children, já que nem sempre elas estarão contidas em um array (podem ser um elemento único e ter valor null ou undefined).

    Com Children, temos métodos que podemos utilizar para trablhar dinâmicamente com as children, como:
    
    - map(): Realiza o mapemanto das children, sejam elas um array, um único elemento, ou apenas null.
    - forEach(): Possui a mesma função que map, porém só realiza a iteração sem retornar um novo array.
    - count(): Retorna o número de elementos contidos em props.children.
    - only(): Retorna a quantidade de filhos dentro de props.children.
    - toArray(): Converte children em um array plano (sem subarrays), sendo útil para manipulações.

  */
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
