import { format } from 'date-fns';
import { useEffect, useState } from 'react'

import { cardList } from '../../data.js';

import { Wrapper } from '../../lib/global.styled.js';

import { PopNewCard } from '../../components/PopUps/PopNewCard/PopNewCard.jsx';
// import { PopBrowse } from '../../components/PopUps/PopBrowse/PopBrowse.jsx';
import { Header } from '../../components/Header/Header.jsx';
import { Main } from '../../components/Main/Main.jsx';
import { Outlet } from 'react-router-dom';



export const MainPage = ({setTheme, theme}) => {
    const [cards, setCards] = useState(cardList);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
    }, []);

    function addCard(e) {
        e.preventDefault()
        const newCard = {
          id: cards[cards.length-1].id + 1,
          status: "Без статуса",
          theme: "Web Design",
          ThemeColor: "_orange",
          title: "Название задачи",
          date: `${format(new Date(), "dd.MM.yy")}`,
        }
        setCards([...cards, newCard])
        console.log(newCard)
    }


    return (
        <Wrapper>
                {/* pop-up start*/}
            <Outlet />
                {/* Перенесены в Outlet */}
                    {/* Взамен <PopExit /> */}
                    {/* <PopBrowse /> */}
            <PopNewCard />

                {/* pop-up end*/}

            <Header addCard={addCard} setTheme={setTheme} theme={theme}/>
            {isLoading ? ("Загрузка...") : (<Main cards={cards}/>)}
            {/* <MainComponent isLoading={isLoading} cards={cards}/> */}
        </Wrapper>
    )
}
