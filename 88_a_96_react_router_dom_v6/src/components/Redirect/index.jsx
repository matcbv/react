import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; 

export function Redirect() {
    const [counter, setCounter] = useState(5);
    const timer = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        timer.current = setTimeout(() => {
            setCounter(c => c - 1);
        }, 1000);

        if(counter <= 0){
            navigate('/about', {
                state: `This is the state: ${Math.random()}`,
            });
        };

        return () => clearInterval(timer.current);
    }, [counter, navigate]);
    
    return (
        <div>
            <h1>Você será redirecionado em: {counter}</h1>z
        </div>  
    );
};
