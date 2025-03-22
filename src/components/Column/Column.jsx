import { Card } from '../Card/Card'

export const Column = ({ ColumnName, cards }) => {
  // const =cards;

  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{ColumnName}</p>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <Card
            NameLesson={card.Lesson}
            CardThemeColor={card.ThemeColor}
            CardTitle={card.Title}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
