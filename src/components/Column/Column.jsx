import { Card } from '../Card/Card.jsx'

import * as S from './Column.styled'

export const Column = ({ title, cardList }) => {
    return (
        <S.MainColumn>
            <S.ColumnTitle>
                <p>{title}</p>
            </S.ColumnTitle>
            <S.StyledCard>
                {cardList.map((card) => (
                    <Card
                        topic={card.topic}
                        title={card.title}
                        date={card.date}
                        key={card._id}
                        id={card._id}
                    />
                ))}
            </S.StyledCard>
        </S.MainColumn>
    )
}
