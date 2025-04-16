import * as S from "./Main.styled.js";
import { Container } from "../../lib/global.styled.js";

// import {Column} from '../Column/Column.jsx';


export const Main = ({children}) => {
    return (
        <S.StyleMain>
          <Container>
            <S.MainBlock>
              <S.StyledMainContenet>
                {children}
              </S.StyledMainContenet>
            </S.MainBlock>
          </Container>
        </S.StyleMain>
    )
}
