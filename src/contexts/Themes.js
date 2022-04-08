import { useState, createContext } from 'react';

export const ThemeContext = createContext({});

export default function ThemeProvider({children}){
    const [ headerTheme, setHeaderTheme ] = useState('#222222');

    return(
        <ThemeContext.Provider value={{headerTheme, setHeaderTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}