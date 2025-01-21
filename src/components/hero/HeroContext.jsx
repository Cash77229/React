import { createContext, useContext, useState } from "react";


const HeroContext = createContext()


export const HeroContextProvider = ({children}) => {

    const [data,setData] = useState("Hello !!")
    

    return (
        <HeroContext.Provider value={{data}}>
            {children}
        </HeroContext.Provider>
    )
}

const useHeroContext = () => {
    const context = useContext(HeroContext)
    if(!context){
        throw new Error('Something went Wrong in Hero Context !!')
    }

    return context
}

export default useHeroContext