import { Children, createContext, useState } from "react";
export const GlobalContext = createContext();

function GlobalContextProvider({children}){
    const[slider,setSlider]=useState(true)
    const value={
        slider,
        setSlider
    }
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
export default GlobalContextProvider