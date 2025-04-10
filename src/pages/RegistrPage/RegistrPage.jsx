import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import * as S from './RegistrPage.styled.js'
import { Wrapper } from '../../lib/global.styled.js'
import { routesPath } from '../../lib/routesPath.js'
import { register } from '../../services/Api.js'

export const RegistrPage = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')

    const [inputValue, setInputValue] = useState({
        name: '',
        login: '',
        password: '',
    })

    const onChangeInput = (e) => {
        // console.log(e);
        const { value, name } = e.target //;
        // console.log(inputValue)
        setInputValue({ ...inputValue, [name]: value })
    }

    const registerHandler = (e) => {
        e.preventDefault()

        const { name, login, password } = inputValue //пустые поля
        if (!name || !login || !password) {
            return setErrorMessage('Заполните все поля')
        }

        register(inputValue)
            .then(() => {
                setErrorMessage('')
                navigate(routesPath.LOGIN)
            })
            .catch((err) => {
                setErrorMessage(err.message)
            })
    }
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
                                    onChange={onChangeInput}
                                    value={inputValue.name}
                                    type="text"
                                    name="name"
                                    id="first-name"
                                    placeholder="Имя"
                                />
                                <S.ModalInput
                                    onChange={onChangeInput}
                                    value={inputValue.login}
                                    type="text"
                                    name="login"
                                    id="loginReg"
                                    placeholder="Эл. почта"
                                />
                                <S.ModalInput
                                    onChange={onChangeInput}
                                    value={inputValue.password}
                                    type="password"
                                    name="password"
                                    id="passwordFirst"
                                    placeholder="Пароль"
                                />
                                <p style={{ color: 'red' }}>{errorMessage}</p>
                                <Link to={routesPath.LOGIN}>
                                    <S.ModalBtnRegistrEnter id="RegistrEnter">
                                        <S.ModalBtnRegistrEnterA onClick={registerHandler}>
                                                Зарегистрироваться
                                        </S.ModalBtnRegistrEnterA>
                                    </S.ModalBtnRegistrEnter>
                                </Link>
                                <S.ModalFormGroup>
                                    <S.ModalFormGroupAP>
                                        Уже есть аккаунт?
                                    </S.ModalFormGroupAP>
                                    <Link to={routesPath.LOGIN}>
                                        <S.ModalFormGroupAP>
                                            Войдите здесь
                                        </S.ModalFormGroupAP>
                                    </Link>
                                </S.ModalFormGroup>
                            </S.ModalFormLogin>
                        </S.ModalBlock>
                    </S.Model>
                </S.ContainerRegistr>
            </Wrapper>
        </>
    )
}
