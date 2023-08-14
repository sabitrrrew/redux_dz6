import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateResult, clearNumbers, setNum1, setNum2, setOperator } from "../../store/calculateSlise";

function  CalculatePage() {
    const dispatch = useDispatch()
    const {num1Value, num2Value, operator, result} = useSelector(state => state.calculateReducer)


    const handleNum1 = (event) => {
        dispatch(setNum1(event.target.value))
    }
    const handleNum2 = (event) => {
        dispatch(setNum2(event.target.value))
    }
    const handleOperator = (selectedOperator) => () => {
        dispatch(setOperator(selectedOperator))
        dispatch(calculateResult())
    }
    const handleClear = () => {
        dispatch(clearNumbers())
    }

    return (
        <>
            <input placeholder="num1" onChange={handleNum1} value={num1Value} type="number"/>
            <input placeholder="num2" onChange={handleNum2} value={num2Value} type="number"/>
            <button onClick={handleClear}>очистить</button>
            <div>
                <button onClick={handleOperator('+')}>+</button>
                <button onClick={handleOperator('-')}>-</button>
                <button onClick={handleOperator('*')}>*</button>
                <button onClick={handleOperator('/')}>/</button>
            </div>
            <h1>{result}</h1>
        </>
    )
}

export default CalculatePage