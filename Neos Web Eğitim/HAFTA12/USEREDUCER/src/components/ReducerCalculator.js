function reducer(state, action) {
    switch (action.type) {
        case "SET_NUMBER1":
            return { ...state, number1: action.payload };
        case "SET_NUMBER2":
            return { ...state, number2: action.payload };
        case "SET_RESULT":
            return { ...state, result: action.payload };
        default:
            throw new Error("Invalid Action Type");
    }
}

//başlangıçdeğer belirleme
const initialState = {
    number1: 0,
    number2: 0,
    result: "",
};

export { reducer, initialState };
