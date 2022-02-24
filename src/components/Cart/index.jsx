import React from "react";

import { useCart } from "../../contexts/cart-context/CartContext";

import { Container } from "./style";

const Cart = () => {

    const { cart, totalValue, removeItem } = useCart();

    return (

        <Container>

            <div className="div-h2">
                <h2>Carrinho</h2>
                <p>Valor Total: R$
                    {
                        totalValue > 0 ? ( " " + totalValue.toFixed(2) ) :  ( " " + totalValue )
                    }
                </p>
            </div>

            {
                cart.length === 0 ? (
                    <p>Seu carrinho estar vazio. Adicione algúm produdo</p>
                ) : 
                (
                    cart.map(( cartItem ) => {
                        return (
                            <ul key={cartItem.id}>
                                <li>
                                    <p>Nome: { cartItem.name }</p>
                                    <img src={ cartItem.image } alt={cartItem.name} />
                                    <p>Preço: R$ { cartItem.price }</p>
                                    <hr />
                                    <b>x{ cartItem.quantity }</b>
                                    <button onClick={ () => removeItem(cartItem) }>
                                        Excluir
                                    </button>
                                </li>
                            </ul>
                        )
                    })
                )
            }
        </Container>

    );
};

export default Cart;