import { useState } from "react";
import useFetch from "../../utils/useFetch";
import Post from "../Post";

export default function Posts(){
    const [postId, setPostId] = useState('');
    let [result, loading] = useFetch(
        'https://jsonplaceholder.typicode.com/posts/' + postId,
        {
            method: 'GET',
            headers: {
                postId: postId,
            },
        },
    );

    const handleClick = id => setPostId(id);

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
        };
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
