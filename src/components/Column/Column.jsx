import { Card } from "../Card/Card"

export const  Column = ({status, cards}) => {
    return (
        <div className="main__column column">
          <div className="column__title">
            <p>{status}</p>
          </div>
          <div className="cards">
            {cards.map(
              (card, id) => (
                <Card
                  key={id}
                  NameLesson={card.theme}
                  CardThemeColor={card.ThemeColor}
                  CardTitle={card.title}
                  cardDate={card.date}
                />
              )
            )}
          </div>
        </div>
    )
}
