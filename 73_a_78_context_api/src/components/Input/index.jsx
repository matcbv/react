import useCounterContext from "../../utils/useCounterContext";

export default function Input(){
    const [, action] = useCounterContext();

    const inputHandle = () => {
        const inputValue = document.getElementById('set-counter').value;
        action.set(Number(inputValue));
    };

    return (
        <div>
            <div style={{display: 'flex', flexFlow: 'column nowrap'}}>
                <label htmlFor="set-counter">set counter number</label>
                <input type="number" name="set-counter" id="set-counter" />
            </div>
            <button style={{display: 'block', width: '100%'}} type="button" onClick={inputHandle}>set</button>
        </div>
    );
};
