import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeTitle, ChangeTitleWithParams, changeInputAction, clearInput, deleteTitle } from "../../store/titleSlice";


function MainPage() {
    const dispatch = useDispatch();
    const { title, inputValue } = useSelector(state => state.titleReducer)


    const withParams = () => {
        dispatch(ChangeTitleWithParams(inputValue))
    }

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

    return (
        <>
            <h1>{title}</h1>
            <input value={inputValue} type="text" onChange={changeInput}/>
            <button onClick={() => dispatch(clearInput())}>clear</button>
            <button onClick={withParams}>add</button>
            <button onClick={() => dispatch(deleteTitle())}>delete title</button>

            {/* <button onClick={() => dispatch(ChangeTitle())}>change title</button>
        <button onClick={withParams}>wite params</button> */}
        </>
    )
}

export default MainPage