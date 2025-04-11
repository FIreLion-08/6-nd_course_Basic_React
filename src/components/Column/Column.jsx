import { Card } from "../Card/Card.jsx";

import *as S from "./Column.styled";

export const  Column = ({status, cards}) => {
    return (
        <div className="main__column column">
          <S.ColumnTitle>
            <p>{status}</p>
          </S.ColumnTitle>
          <S.StyledCard>
            {cards.map(el => <Card key={el._id} card={el} />)}
          </S.StyledCard>
        </div>
    )
}
