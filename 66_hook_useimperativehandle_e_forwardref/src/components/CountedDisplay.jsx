import { forwardRef, useImperativeHandle, useRef, useState } from "react"

export default forwardRef(
    function CountedDisplay({counted}, ref){
        const [randomNum, setRandomNum] = useState('0.11');
        // Criando uma nova referência interna para o elemento que desejamos referenciar:
        const indexRef = useRef();

        const handleClick = () => setRandomNum(Math.random().toFixed(2));

        /*
            Com useImperativeHandle redefine completamente o que a ref expõe. Isso significa que a ref apontará somente para o objeto retornado por useImperativeHandle, ignorando qualquer referência automática ao elemento DOM. Sua estrutura segue o seguinte padrão:

            useImperativeHandle(ref, () => { items })
        */
        useImperativeHandle(ref, () => ({
            // Os elementos adicionados nesse objeto estarão disponíveis em ref.current
            handleClick,
            indexRef: indexRef.current,
        }));

        return (
            <div style={{height: '150px', width: '150px', overflowX: 'scroll', marginTop: '10px'}}>
                {counted.map( c => <p key={`c-${c}`} ref={indexRef} onClick={handleClick}>{c} + {randomNum}</p> )}
            </div>
        );
    },
);
