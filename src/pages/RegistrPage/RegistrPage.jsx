import { Link } from "react-router-dom";
import { Wrapper } from '../../lib/global.styled.js';
import * as S from "./RegistrPage.styled.js";
import { routesPath } from "../../lib/routesPath.js";

export const RegistrPage = () => {
  return (
    <>
      <Wrapper>
        <S.ContainerRegistr>
          <S.Model>
            <S.ModalBlock>
              <S.ModelTtl>
                <h2>Регистрация</h2>
              </S.ModelTtl>
              <S.ModalFormLogin id="formLogUp" action="#">
                <S.ModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
                <S.ModalInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <Link to={routesPath.LOGIN}>
                  <S.ModalBtnRegistrEnter id="RegistrEnter">
                    <S.ModalBtnRegistrEnterA>
                      {" "}
                      Зарегистрироваться
                    </S.ModalBtnRegistrEnterA>
                  </S.ModalBtnRegistrEnter>
                </Link>
                <S.ModalFormGroup>
                  <S.ModalFormGroupAP>Уже есть аккаунт?</S.ModalFormGroupAP>
                  <Link to={routesPath.LOGIN}>
                    <S.ModalFormGroupAP>Войдите здесь</S.ModalFormGroupAP>
                  </Link>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Model>
        </S.ContainerRegistr>
      </Wrapper>
    </>
  );
}
