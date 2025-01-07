import { useEffect, useRef } from 'react';

// Comparando se nosso objeto de opções da requisição está diferente do anterior:
const isObjectsEqual = (firstObj, secObj) => {
    return JSON.stringify(firstObj) === JSON.stringify(secObj);
};

export default useFetch = (url, options) => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const urlRef = useRef('');
    const optionsRef = useRef({});

    useEffect(() => {
        if(!isObjectsEqual(urlRef.current, url)){
            urlRef.current = url;
            setShouldRender(s => !s);
        };

        if(!isObjectsEqual(optionsRef.current, options)){
            optionsRef.current = options;
            setShouldRender(s => !s);
        }
    }, [url, options]);

    // Utilizando o useEffect para garantir que os posts só sejam requisitados durante a primeira montagem de nosso componente ou caso a url ou as options mudem.
    useEffect(() => {
        // Criando uma variável de estado para validar se nosso estado deve receber o resultado da requisição:
        let waitFetch = true;
        // Criando um controller para nossa requisição:
        const controller = new AbortController();
        const signal = controller.signal;

        setLoading(true);
        const fetchData = async () => {
            try{
                const result = await (await fetch(urlRef.current, {signal, ...optionsRef.current})).json();
                // Atualizando nosso estado caso o componente ainda esteja montado na tela:
                if(waitFetch){
                    setResult(result);
                    setLoading(false);
                };
            }catch (e){
                if(waitFetch){
                    setLoading(false)
                };
                console.warn(e); 
            };
        };
        fetchData();
        
        // Função de retorno utilizada após nosso componente ser desmontado:
        return () => {
            waitFetch = false;
            controller.abort();
        }

    }, [shouldRender]);
    return [result, loading];
}
