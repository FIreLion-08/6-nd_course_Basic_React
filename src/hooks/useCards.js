import { useContext } from 'react'
import { CardContext } from '../context/cardContext'

export const useCards = () => {
    return useContext(CardContext)
}
