import { createSlice } from "@reduxjs/toolkit";

const calculateSlice = createSlice({
    name: "calculateSlice",
    initialState: {
        num1Value: "",
        num2Value: "",
        operator: "",
        result: "",
    },
    reducers: {
        setNum1: (state, action) => {
            state.num1Value = action.payload;
        },
        setNum2: (state, action) => {
            state.num2Value = action.payload;
        },
        setOperator: (state, action) => {
            state.operator = action.payload;
        },
        calculateResult: (state) => {
            if (state.num1Value && state.num2Value && state.operator) {
                const num1 = parseFloat(state.num1Value);
                const num2 = parseFloat(state.num2Value);
                switch (state.operator) {
                    case "+":
                        state.result = (num1 + num2).toString();
                        break;
                    case "-":
                        state.result = (num1 - num2).toString();
                        break;
                    case "*":
                        state.result = (num1 * num2).toString();
                        break;
                    case "/":
                        state.result = (num1 / num2).toString();
                        break;
                    default:
                        break;
                }
            }
        },
        clearNumbers: (state) => {
            state.num1Value = "";
            state.num2Value = "";
            state.operator = "";
            state.result = "";
        },
    },
});

export const { setNum1, setNum2, setOperator, calculateResult, clearNumbers } =
    calculateSlice.actions;

export default calculateSlice.reducer;