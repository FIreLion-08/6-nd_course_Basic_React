import * as S from './Main.styled.js'
import { Container } from '../../global.styled.js'

import { Column } from '../Column/Column.jsx'

export const Main = ({ cards }) => {
  return (
    <S.StyleMain>
      <Container>
        <S.MainBlock>
          <S.StyledMainContenet>
            <Column
              status={'Без статуса'}
              cards={cards.filter((task) => task.status === 'Без статуса')}
            />
            <Column
              status={'Нужно сделать'}
              cards={cards.filter((task) => task.status === 'Нужно сделать')}
            />
            <Column
              status={'В работе'}
              cards={cards.filter((task) => task.status === 'В работе')}
            />
            <Column
              status={'Тестирование'}
              cards={cards.filter((task) => task.status === 'Тестирование')}
            />
            <Column
              status={'Готово'}
              cards={cards.filter((task) => task.status === 'Готово')}
            />
          </S.StyledMainContenet>
        </S.MainBlock>
      </Container>
    </S.StyleMain>
  )
}
