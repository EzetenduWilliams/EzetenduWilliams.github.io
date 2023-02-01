import { createContext, useContext, useState } from "react";


// CART COUNT
const ThemeContext = createContext({})


export function useThemeContext() {
    return useContext(ThemeContext)
}


export function ThemeContextProvider({ children }) {
    const [darkTheme, setdarkTheme] = useState(true);

    function toggleTheme() {
        setdarkTheme(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}