import React, { useContext } from "react";

import { FiltersContext } from "../../contexts/filters-context/FiltersContext";
import { useCart } from "../../contexts/cart-context/CartContext";

import { arrayProductsBolas } from "../../arrayProducts/arrayProducts";

import { Container } from "./style";

const Products = () => {

    const { addCart } = useCart();

    //* Usando o "filter"  já com os valores recebidos
    //* e atualizados para filtrar a lista
    const { filters } = useContext(FiltersContext);

    let filterProducts = arrayProductsBolas;

    //* Fiz os Filtros desta forma por que nos meus
    //* testes foram os que si sairam melhor.
    //* Mas reconheço que ficou feio.

    //* Por Nome
    if ( filters.name !== "" ) {
        filterProducts = arrayProductsBolas.filter(( product ) => {
            if ( product.name.toLocaleLowerCase().includes(filters.name.toLowerCase()) ) {
                return true;
            };
    
            return false;
        });
    };

    //* Preço Mínimo
    if ( filters.minValue > 0 ) {
        filterProducts = arrayProductsBolas.filter(( product ) => {
            if ( product.price >= filters.minValue ) {
                return true;
            };
    
            return false;
        });
    };

    //* Preço Máximo
    if ( filters.maxValue > 0 ) {
        filterProducts = arrayProductsBolas.filter(( product ) => {
            if ( product.price <= filters.maxValue ) {
                return true;
            };
    
            return false;
        });
    };

    return (

        <Container>

            <div className="div-h2">
                <h2>Bolas</h2>
            </div>

            {
                // eslint-disable-next-line array-callback-return
                //* Ordenando Array por preços
                filterProducts.sort(( currentProduct, nextProduct ) => {

                    return currentProduct.price - nextProduct.price 

                }).map(( products ) => {
                    return(
                      <ul key={ products.id }>
                          <li>
                                <p>Nome: { products.name }</p>
                                <img src={ products.image } alt={products.name} />
                                <p>Preço: R$ { products.price.toFixed(2) }</p>   
                                <button onClick={() =>  addCart(products)}>
                                    Comprar
                                </button>
                          </li>
                      </ul>
                    )
                })
            }

        </Container>

    );
};

export default Products;