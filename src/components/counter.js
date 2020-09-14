import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';


function Counter() {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h1> Counter {counter}</h1>
            <div>
                <button onClick={() => dispatch(increment(5))}>+ 5 </button>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(decrement(5))}>- 5</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'SIGN_IN' })}>Logout</button>
            </div>
        </div>
    );
}
export default Counter;