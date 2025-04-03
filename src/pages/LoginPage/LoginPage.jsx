import { Link } from "react-router-dom";

import { Wrapper } from '../../lib/global.styled.js';
import * as S from "./LoginPage.styled.js";
import { routesPath } from "../../lib/routesPath.js";


export const LoginPage = ({ login }) => {

    return (
      <>
        <Wrapper>
          <S.ContainerLogin>
            <S.Model>
              <S.ModalBlock>
                <S.ModelTtl>
                  <h2>Вход</h2>
                </S.ModelTtl>
                <S.ModalFormLogin id="formLogIn" action="#">
                  <S.ModalInput
                    type="text"
                    name="login"
                    id="formlogin"
                    placeholder="Эл. почта"
                  />
                  <S.ModalInput
                    type="password"
                    name="password"
                    id="formpassword"
                    placeholder="Пароль"
                  />
                  <S.ModalBtnEnter id="btnEnter">
                      <S.ModalBtnEnterA
                        onClick={login}
                        //  logout={login}
                        >
                          Войти
                      </S.ModalBtnEnterA>
                  </S.ModalBtnEnter>
                  <S.ModalFormGroup>
                    <S.ModalFormGroupAP>
                      Нужно зарегистрироваться?
                    </S.ModalFormGroupAP>
                    <Link to={routesPath.REGISTER}>
                      <S.ModalFormGroupAP>
                        Регистрируйтесь здесь
                      </S.ModalFormGroupAP>
                    </Link>
                  </S.ModalFormGroup>
                </S.ModalFormLogin>
              </S.ModalBlock>
            </S.Model>
          </S.ContainerLogin>
        </Wrapper>
      </>
    );
  }
