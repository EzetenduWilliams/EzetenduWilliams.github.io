// import { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom"



// const ShoppingCartContext = createContext({})


// export function useShoppingCartContext() {
//     return useContext(ShoppingCartContext)
// }



// export function ShoppingCartContextProvider({ children }) {
//     const [cartCount, setCartCount] = useState(0)
//     const [menStore, setMenStore] = useState([])
//     const navigate = useNavigate()


//     function increaseCartQuantity(id) {
//         setMenStore(prevItem => {
//             if (prevItem.find(item => item.id === id) === null) {
//                 return [...prevItem, { id, quantity: 1 }]
//             } else {
//                 return prevItem.map(item => {
//                     if (item.id === id) {
//                         return { ...item, quantity: item.quantity + 1 }
//                     } else {
//                         return item
//                     }
//                 })
//             }
//         })
//     }
//     function decreaseCartQuantity(id) {
//         setMenStore(prevItem => {
//             if (prevItem.find(item => item.id === id)?.quantity === 1) {
//                 return prevItem.filter(item => item.id !== id)
//             } else {
//                 return prevItem.map(item => {
//                     if (item.id === id) {
//                         return { ...item, quantity: item.quantity - 1 }
//                     } else {
//                         return item
//                     }
//                 })
//             }
//         })
//     }
//     function getItemQuantity(id) {
//         return menStore.find(item => item.id === id)?.quantity || 0
//     }
//     function removeFromCart(id) {
//         setMenStore(curItems => {
//             return curItems.filter(item => item.id !== id)
//         })
//     }
//     function navigateToDetails() {
//         navigate("/details-page")
//     }
//     const menStoreQuantity = menStore.reduce((quantity, item) => item.quantity + quantity, 0)
//     return <ShoppingCartContext.Provider value={{
//         cartCount: cartCount,
//         getItemQuantity,
//         increaseCartQuantity,
//         decreaseCartQuantity,
//         removeFromCart,
//         navigateToDetails,
//         menStore: menStore,
//         menStoreQuantity
//     }}>
//         {children}
//     </ShoppingCartContext.Provider>
// }