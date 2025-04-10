import { format } from 'date-fns'
import { useEffect, useState } from 'react'

import { Wrapper } from '../../lib/global.styled.js'
import { PopNewCard } from '../../components/PopUps/PopNewCard/PopNewCard.jsx'
import { Header } from '../../components/Header/Header.jsx'
import { Main } from '../../components/Main/Main.jsx'
import { Outlet } from 'react-router-dom'
import { getCards } from '../../services/Api.js'

export const MainPage = ({ setTheme, theme, isAuth }) => {
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [errorMsg, setErrorMsg] = useState('')

    function addCard(e) {
        e.preventDefault()
        const newCard = {
            _id: cards[cards.length - 1]._id + 10,
            status: 'Без статуса',
            topic: 'Web Design',
            ThemeColor: '_orange',
            title: 'Название задачи',
            date: `${format(new Date(), 'dd.MM.yy')}`,
        }
        setCards([...cards, newCard])
    }

    useEffect(() => {
        setIsLoading(true)

        getCards(isAuth.token)
            .then((response) => {
                setErrorMsg('')
                setCards(response.tasks)
                setIsLoading(false)
            })
            .catch((err) => {
                setErrorMsg(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <Wrapper>
            {/* pop-up start*/}
            <Outlet />
            {/* Перенесены в Outlet */}
            {/* Взамен <PopExit /> */}
            {/* <PopBrowse /> */}
            <PopNewCard />

            {/* pop-up end*/}

            <Header
                isAuth={isAuth}
                addCard={addCard}
                setTheme={setTheme}
                theme={theme}
            />
            {errorMsg ? (
                <p>{errorMsg}</p>
            ) : isLoading ? (
                'Загрузка...'
            ) : (
                <Main errorMsg={errorMsg} cards={cards} />
            )}
        </Wrapper>
    )
}
