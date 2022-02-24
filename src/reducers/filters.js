//* Valores iniciais para serem controlados
//* Pelo "Reduse"
export const initialState = {
    minValue: "",
    maxValue: "",
    name: ""
}

//* criando o "Reduce". Sintaxe ele espera
//* um estado inicial e uma ação
export const filters = ( state, action ) => {

    //* Criando um switch para os casos a serem
    //* serem executados
    switch( action.type ) {

        case "SET_FILTERS":
            return {
                minValue: action.minValue,
                maxValue: action.maxValue,
                name: action.name
            };

        case "RESET_FILTERS":
            return {
                minValue: "",
                maxValue: "",
                name: ""
            };
            //* Forma Alternativa
            //* return initialState

        default:
            return state;

    };
};