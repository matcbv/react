import useCounterContext from "../../utils/useCounterContext";

export default function Heading(){
    const [state] = useCounterContext();
    return <h1>Count: {state.counter}</h1>;
};
