import { createContext, useState } from 'react'

export const CardContext = createContext(null)

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([])

    return (
        <CardContext.Provider value={{ cards, setCards }}>
            {children}
        </CardContext.Provider>
    )
}
