
import { Link, useNavigate } from "react-router-dom";
import { routesPath } from "../../../lib/routesPath.js";
import * as S from "./PopExit.styled.js";



export const  PopExit = ({ setIsAuth }) => {

  const navigate = useNavigate ();

  const logOut = () => {
    setIsAuth(false);
    navigate(routesPath.LOGIN);
  }

  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtlH2>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtlH2>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <Link to={routesPath.LOGIN}>
                <S.PopExitExitYes onClick={logOut} id="exitYes">
                  Да, выйти
                </S.PopExitExitYes>
              </Link>
              <Link to={routesPath.MAIN}>
                <S.PopExitExitNo  id="exitNo">
                  Нет, остаться
                </S.PopExitExitNo>
              </Link>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
