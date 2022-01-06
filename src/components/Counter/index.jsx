import React from "react";

import { useSelector, useDispatch } from "react-redux";

// elements
import { CounterContainer, CounterMinus, CounterPlus, CounterValue } from "./CounterElements";

// actions
import { increment, decrement } from "../../features/Counter/counterSlice";

const Counter = ({item}) => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <CounterContainer>
            <CounterMinus onClick={() => dispatch(decrement(item))}>-</CounterMinus>
            <CounterValue>{count}</CounterValue>
            <CounterPlus onClick={() => dispatch(increment(item))}>+</CounterPlus>
        </CounterContainer>
    )
}

export default Counter