import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import * as S from './LoginPage.styled.js'
import { Wrapper } from '../../lib/global.styled.js'
import { routesPath } from '../../lib/routesPath.js'
import { loginAut } from '../../services/Api.js'

export const LoginPage = ({ setIsAuth }) => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')

    const [inputValue, setInputValue] = useState({
        login: '',
        password: '',
    })

    const onChangeInput = (e) => {
        const { value, name } = e.target //;
        setInputValue({ ...inputValue, [name]: value })
    }

    const loginHandler = (e) => {
        e.preventDefault()
        const { login, password } = inputValue //пустые поля
        if (!login || !password) {
            return setErrorMessage('Заполните все поля')
        }
        loginAut(inputValue)
            .then((response) => {
                setErrorMessage('')
                setIsAuth(response.user) //Данные помещаются из авторизации
                localStorage.setItem('user', JSON.stringify(response.user))
                navigate(routesPath.MAIN)
            })
            .catch((err) => {
                setErrorMessage(err.message)
            })
    }

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
                                    onChange={onChangeInput}
                                    value={inputValue.login}
                                    type="text"
                                    name="login"
                                    id="formlogin"
                                    placeholder="Эл. почта"
                                />
                                <S.ModalInput
                                    onChange={onChangeInput}
                                    value={inputValue.password}
                                    type="password"
                                    name="password"
                                    id="formpassword"
                                    placeholder="Пароль"
                                />

                                <p style={{ color: 'red' }}>{errorMessage}</p>

                                <S.ModalBtnEnter id="btnEnter">
                                    <S.ModalBtnEnterA onClick={loginHandler}>
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
    )
}
