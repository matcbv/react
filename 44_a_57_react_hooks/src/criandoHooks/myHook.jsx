const { useEffect, useState, useRef } = require("react")

const useMyHook = (cb, delay) => {
    // Criando uma referência para nossa função de callback:
    const savedCb = useRef();

    // Iremos atualizar nossa função de callback salva em nossa referência toda vez que ela for alterada:
    useEffect(() => {
        savedCb.current = cb;
    }, [cb]);

    // No useEffect abaixo, iremos criar um intervalo com a função de callback armazenada em nossa referência. Salvar a função de callback em uma referência permite que o intervalo não precise ser recriado caso ela mude.
    useEffect(() => {
        const interval = setInterval(() => {
            savedCb.current();
        }, delay);

        // Nossa função de retorno irá limpar nosso intervalo no caso do useEffect ser chamado novamente (caso delay mude), ou no caso de nosso componente for desmontado. Isso é feito para evitar resíduos em nossa aplicação, que podem permancer rodando em segundo plano enquanto consomem mais memória.
        return () => clearInterval(interval);
    }, [delay]);
};

function App() {
    const [counter, setCounter] = useState(0);
    const [delay, setDelay] = useState(1000);
    const [incrementor, setIncrementor] = useState(1000);

    // Chamando nosso hook passando uma função de callback:
    useMyHook(() => setCounter((c) => c + 1), delay);

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <h2>Delay: {delay}ms</h2>
            <input type="text" onChange={(e) => setIncrementor(parseFloat(e.target.value))} />
            <button type="button" onClick={() => setDelay((d) => d + incrementor)}>+{incrementor}</button>
            <button type="button" disabled={delay <= 0} onClick={() => setDelay((d) => d - incrementor)}>-{incrementor}</button>
        </div>
    );
};

export default App;
