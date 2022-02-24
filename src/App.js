import React, { useReducer } from "react";

import Filters from "./components/Filters";
import Products from "./components/Products";
import Cart from "./components/Cart";

import { FiltersContext } from "./contexts/filters-context/FiltersContext";
import { CartProvider } from "./contexts/cart-context/CartContext";

import { filters, initialState } from "./reducers/filters";

import { GlobalStyle } from "./Style/GlobalStyle";

function App() {

  //* Chamando o "useReduce" com sua sintaxe
  //* que é um Array com o "state" e o "dispatch"
  const [ filtersState, filtersDispatch ] = useReducer(filters, initialState);

  return (

    //* Disponabilizando os valores do "useReduce"
    //* Para todos os outros Comopnents com o
    //* "FiltersContext"
      <FiltersContext.Provider value={{ filters: filtersState, dispatch: filtersDispatch }}>
          <div className="app">

          <div className="div-1">
            <Filters />
          </div>

          {/* //* Maneira de usar sem o "useReduce" */}
          <CartProvider>
            <div className="div-2">
              <Products />
            </div>
            <div className="div-3">
              <Cart />
            </div>
          </CartProvider>
          {/* //* -------------------------------------------- */}

          <GlobalStyle />
          </div>

    </FiltersContext.Provider>

  );
};

export default App;
