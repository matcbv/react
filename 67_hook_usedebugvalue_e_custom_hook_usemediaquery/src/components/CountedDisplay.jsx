import { forwardRef, useImperativeHandle, useRef, useState } from "react"

export default forwardRef(
    function CountedDisplay({counted}, ref){
        const [randomNum, setRandomNum] = useState('0.11');
        const indexRef = useRef();

        const handleClick = () => setRandomNum(Math.random().toFixed(2));
        
        useImperativeHandle(ref, () => ({
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
