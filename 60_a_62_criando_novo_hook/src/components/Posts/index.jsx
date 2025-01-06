import { useEffect, useRef, useState } from "react";
import Post from "../Post";

const useFetch = (url, options) => {
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
        let waitFetch = true;
        const controller = new AbortController();
        const signal = controller.signal;
        setLoading(true);
        const fetchData = async () => {
            try{
                const result = await (await fetch(urlRef.current, {signal, ...optionsRef.current})).json();
                if(waitFetch){
                    setResult(result);
                    setLoading(false);
                };
            }catch (e){
                if(waitFetch){
                    setLoading(false)
                };
                throw e;
            };
        };
        fetchData();

        return () => {
            waitFetch = false;
        }

    }, [shouldRender]);
    return [result, loading];
}

const isObjectsEqual = (firstObj, secObj) => {
    return JSON.stringify(firstObj) === JSON.stringify(secObj);
};

export default function Posts(){
    const [postId, setPostId] = useState('')
    let [result, loading] = useFetch(
        'https://jsonplaceholder.typicode.com/posts/' + postId,
        {
            method: 'GET',
            headers: {
                id: postId,
            },
        }
    );

    const handleClick = (id) => {
        setPostId(id)
    };

    if(loading){
        return (
            <div>
                <h1>Posts</h1>
                <p>Loadings posts...</p>
            </div>
        );
    }else {
        if(!Array.isArray(result)){
            result = [result];
        }
        return (
            <div>
                <h1>Posts</h1>
                <div>
                    <Post handleClick={handleClick} posts={result} />
                </div>
            </div>
        );
    };
};
