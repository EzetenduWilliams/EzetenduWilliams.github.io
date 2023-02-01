import { createContext, useContext, useState } from "react";
import { menItemStore } from "../store/fashionStore";

const ShoppingCartContext = createContext({})


export function useShoppingCartContext() {
    return useContext(ShoppingCartContext)
}


export function ShoppingContextProvider({ children }) {
    // const navigate = useNavigate()
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([])
    const [storeItem, setStoreItem] = useState({})

    // Cart Quantity
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    function addToDetailsPage(id) {
        setStoreItem(menItemStore[id])
    }


    return (
        <ShoppingCartContext.Provider value={{ cartCount, cartItems, addToDetailsPage, storeItem, cartQuantity }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}