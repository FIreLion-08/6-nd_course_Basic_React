// import { format } from 'date-fns';
import { useContext, useEffect, useState } from 'react'

import { Wrapper } from '../../lib/global.styled.js'
import { Header } from '../../components/Header/Header.jsx'
import { Main } from '../../components/Main/Main.jsx'
import { Outlet } from 'react-router-dom'
import { getCards } from '../../api/MainPageApi.js'
import { Column } from '../../components/Column/Column.jsx'
import { UserContext } from '../../context/UserContext.jsx'

import { CardContext } from '../../context/cardContext.jsx'

export const MainPage = ({ setTheme, theme }) => {
    const { cards, setCards } = useContext(CardContext)
    const [errorMsg, setErrorMsg] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const { user } = useContext(UserContext)

    // console.log(text)

    useEffect(() => {
        setIsLoading(true)

        getCards(user.token)
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
    }, [user, setCards])

    const statusList = [
        'Без статуса',
        'Нужно сделать',
        'В работе',
        'Тестирование',
        'Готово',
    ]

    return (
        <Wrapper>
            <Outlet />
            <Header
                // addCard={addCard}
                setTheme={setTheme}
                theme={theme}
            />
            {errorMsg ? (
                <p>${errorMsg}</p>
            ) : isLoading ? (
                'Загрузка...'
            ) : (
                <Main errorMsg={errorMsg} cards={cards}>
                    {statusList.map((status) => (
                        <Column
                            title={status}
                            key={status}
                            cardList={cards.filter(
                                (card) => card.status === status,
                            )}
                        />
                    ))}
                </Main>
            )}
        </Wrapper>
    )
}
