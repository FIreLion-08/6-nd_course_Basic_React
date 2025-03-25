import { useEffect, useState } from 'react'
import './App.css'
import {PopExit} from "./components/PopUps/PopExit/PopExit.jsx";
import {PopNewCard} from './components/PopUps/PopNewCard/PopNewCard.jsx'
import {PopBrowse} from './components/PopUps/PopBrowse/PopBrowse.jsx';

import {Header} from './components/Header/Header.jsx';
import {Main} from './components/Main/Main';


import {cardList} from './data.js';
import { format } from 'date-fns';
import { GlobalStyled, Wrapper } from './global.styled.js';
import { ThemeProvider } from 'styled-components';

import {lightTheme, darkTheme} from "./globalTheme.js";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  const [theme, setTheme] = useState(true);

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

      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyled />
        <Wrapper>
          {/* pop-up start*/}
          <PopExit />
          <PopNewCard />
          <PopBrowse />
          {/* pop-up end*/}

          <Header addCard={addCard} setTheme={setTheme} theme={theme} />

          {isLoading ? ("Загрузка...") : (
            <Main cards={cards}/>
          )}
        </Wrapper>
      </ThemeProvider>
  )
}

export default App
