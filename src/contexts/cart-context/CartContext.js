import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

//* Fazendo o Context sem o UseReduce
export const CartProvider = ({ children }) => {

    //* Estados
    const [ cart, setCart ] = useState([]);
    const [ totalValue, setTotalValue ] = useState();

    //* Somar Valores do Carrinho de Compras
    useEffect(() => {
        let value = 0;
        // eslint-disable-next-line array-callback-return
        cart.forEach(( item ) => {
            value += item.price * item.quantity;
        });

        setTotalValue(value);

    }, [cart]);

    //* Adicinar Item
    const addCart = ( item ) => {
        const newCart = [ ...cart ]

        const index = cart.findIndex( itemCart => itemCart.id === item.id  );
        if ( index === -1 ) {
            newCart.push({ ...item, quantity: 1 });
        } else {
            newCart[index].quantity++
        };

        setCart(newCart); 
    };

    //* Remover Item
    const removeItem = ( itemCart ) => {
        const newCartList = cart.filter(( item ) => {
            return item.id !== itemCart.id;
        });
    
        setCart(newCartList);
    };

    //* Persistir Dados Locais
    useEffect(() => {
        const dataLocal = localStorage.getItem("cartLocal");
        if ( dataLocal !== null ) {
            setCart(JSON.parse(dataLocal));
        };
    }, []);

    //* Guardando Dados Locais
    useEffect(() => {
        localStorage.setItem("cartLocal" ,JSON.stringify(cart));
    });

    const store = {
        addCart,
        cart,
        totalValue,
        removeItem
    };
    
    return (
        <CartContext.Provider value={ store }>
            { children }
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    const { cart, addCart, totalValue, itemTotalPrice, removeItem } = context;

    return { cart, addCart, totalValue, itemTotalPrice, removeItem };

};