import useCounterContext from "../../contexts/CounterContext/use_counter_context";

export default function Heading(){
    const [state] = useCounterContext();
    return <h1>Count: {state.counter}</h1>;
};
