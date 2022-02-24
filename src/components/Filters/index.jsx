import React, { useContext, useState } from "react";

import { FiltersContext } from "../../contexts/filters-context/FiltersContext";

import { Container } from "./style";

const Filters = () => {

    //* Usando os valores do contexto
    //* "FiltersContext" aqui via deses-
    //* truturação
    const { filters, dispatch } = useContext(FiltersContext);

    const [ minValue, setMinValue ]  = useState(filters.minValue);
    const [ maxValue, setMaxValue ]  = useState(filters.maxValue);
    const [ name, setName ]  = useState(filters.name);

    const handleMinValueChange = ({ target }) => {
        setMinValue(target.value)
    };

    const handleMaxValueChange = ({ target }) => {
        setMaxValue(target.value)
    };

    const handleNameValueChange = ({ target }) => {
        setName(target.value)
    };

    //* Caso a ser executado pelo Switch
    //* para setar os valores dos inputs
    const handleApplyFilters = () => {

        const uppdateFiltersAction = {
            type: "SET_FILTERS",
            minValue: Number(minValue),
            maxValue: Number(maxValue),
            name: name
        };

        dispatch(uppdateFiltersAction);

    };

    //* Caso a ser executado pelo Switch
    //* para limpar os inputs
    const handleClearFilters = () => {

        setMinValue("");
        setMaxValue("");
        setName("");

        dispatch({ type: "RESET_FILTERS" });
    };

    return (

        <Container>

            <div className="div-h2">
                <h2>Filtros</h2>
            </div>

            <input type="number" placeholder="Valor Mínimo" 
            value={minValue}
            onChange={handleMinValueChange}
             />

            <input type="number" placeholder="Valor Máximo" 
            value={maxValue}
            onChange={handleMaxValueChange}
            />

            <input type="text" placeholder="Nome do Produto" 
            value={name}
            onChange={handleNameValueChange}
            />

            <button onClick={handleApplyFilters}>
                Aplicar Filtro
            </button>

            <button onClick={handleClearFilters}>
                Limpar Filtros
            </button>

        </Container>

    );
};

export default Filters;