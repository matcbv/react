import { useEffect, useState, useRef } from 'react';

// Comparando se nosso objeto de opções da requisição está diferente do anterior:
const isObjectsEqual = (firstObj, secObj) => JSON.stringify(firstObj) === JSON.stringify(secObj);

export default function useFetch (url, options){
    // Abaixo, criamos os estados a serem utilizados em nosso hook:
    // Obs.: Os estados de um hook em uso no componente, quando atualizados, também irão causar a re-renderização do componente.
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const urlRef = useRef('');
    const optionsRef = useRef({});

    useEffect(() => {
        if(!isObjectsEqual(urlRef.current, url) && !isObjectsEqual(optionsRef.current, options)){
            urlRef.current = url;
            optionsRef.current = options;
            setShouldRender(s => !s);
        } else if(!isObjectsEqual(urlRef.current, url)){
            urlRef.current = url;
            setShouldRender(s => !s);
        } else if(!isObjectsEqual(optionsRef.current, options)){
            optionsRef.current = options;
            setShouldRender(s => !s);
        };
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
                // Passando o sinal de abortagem junto do cabeçalho recebido por parâmetro para nossa requisição.
                const result = await (await fetch(urlRef.current, {signal, ...optionsRef.current})).json();
                // Atualizando nosso estado caso o componente ainda esteja montado na tela:
                if(waitFetch){
                    setResult(result);
                    setLoading(false);
                };
            }catch (e){
                if(waitFetch){
                    setLoading(false);
                };
                console.warn(e); 
            };
        };
        fetchData();
        
        // Função de retorno utilizada após nosso componente ser desmontado:
        return () => {
            waitFetch = false;
            controller.abort();
        };

    }, [shouldRender]);

    return [result, loading];
};
