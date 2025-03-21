import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import { PopExit } from "./components/PopUps/PopExit/PopExit.jsx";
import { PopNewCard } from "./components/PopUps/PopNewCard/PopNewCard.jsx";
import { PopBrowse } from "./components/PopUps/PopBrowse/PopBrowse.jsx";

import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main";

import { cardList } from "./data.js";
import { format } from "date-fns";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  function addCard(e) {
    e.preventDefault();
    const newCard = {
      id: cards[cards.length - 1].id + 1,
      status: "Без статуса",
      theme: "Web design",
      ThemeColor: "_orange",
      title: "Название задачи",
      date: `${format(new Date(), "dd.MM.yy")}`,
    };
    setCards([...cards, newCard]);
    console.log(newCard);
  }

  return (
    <>
      <div className="wrapper">
        {/* pop-up start*/}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end*/}

        <Header addCard={addCard} />
        {isLoading ? ("Загрузка...") : (
          <Main cards={cards}/>
        )}
      </div>
    </>
  );
}

export default App;
