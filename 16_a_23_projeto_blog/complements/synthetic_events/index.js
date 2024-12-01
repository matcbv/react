/* 
    Os Synthetic Events são objetos criados pelo React que encapsulam os eventos do DOM nativo, fornecendo uma interface consistente e independente de navegador. Dessa forma, o React gerencia as diferenças entre navegadores ao lidar com eventos, garantindo comportamento uniforme entre eles.
*/

import React from "react";

function App() {
    // event é uma instância de SyntheticEvent, não um evento do DOM nativo.
    const handleClick = (event) => {
        console.log(event); // Synthetic Event
        console.log(event.type); // "click"
        console.log(event.target); // O elemento HTML que disparou o evento
    };
    /*
        Através dessa instância, conseguimos obter certas propriedades relacionadas a ele, assim como os eventListeners do DOM. Alguns exemplos de propriedades são:

        - type: tipo do evento (ex.: click, change).
        - target: elemento DOM que disparou o evento.
        - currentTarget: elemento ao qual o evento está associado.
        - stopPropagation(): impede a propagação do evento.
        - preventDefault(): impede o comportamento padrão do evento.
    */
  return <button onClick={handleClick}>Clique em mim</button>;
}

export default App;
