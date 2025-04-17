import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import * as S from './Header.styled.js'
import { Container } from '../../lib/global.styled.js'
import { routesPath } from '../../lib/routesPath.js'
import { UserContext } from '../../context/UserContext.jsx'

export const Header = ({ setTheme, theme }) => {
    // Пункт_№1: Модальное окно
    const [isOpened, setIsOpened] = useState(false)

    const navigate = useNavigate()

    const { user } = useContext(UserContext)

    const openModal = (e) => {
        e.preventDefault()
        setIsOpened((prev) => !prev)
    }

    const addCard = () => {
        navigate(routesPath.NEW_CARD)
    }

    //
    return (
        <S.Header>
            <Container>
                <S.HeaderBlock>
                    <div>
                        <Link to={routesPath.MAIN}>
                            <S.HeaderLogoImg src="logo.png" alt="logo" />
                        </Link>
                    </div>
                    {/* <div>
                        <a href="" target="_self">
                            <S.HeaderLogoImg src="logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self">
                            <S.HeaderLogoImg src="logo_dark.png" alt="logo" />
                        </a>
                    </div> */}
                    <S.HeaderNav>
                        <S.HeaderBtnMainNew id="btnMainNew" onClick={addCard}>
                            <S.HeaderBtnMainNewLink>
                                Создать новую задачу
                            </S.HeaderBtnMainNewLink>
                        </S.HeaderBtnMainNew>
                        <S.HeaderUser onClick={openModal}>
                            {user.name}
                        </S.HeaderUser>
                        {isOpened && (
                            <S.HeaderUserSet id="user-set-target">
                                {/* <a href="">x</a> */}
                                <S.HeaderUserSetName>
                                    {user.name}
                                </S.HeaderUserSetName>
                                <S.HeaderUserSetMail>
                                    {user.login}
                                </S.HeaderUserSetMail>
                                <S.HeaderUserSetTheme>
                                    <p>Темная тема</p>
                                    <input
                                        onChange={() => setTheme(!theme)}
                                        type="checkbox"
                                        className="checkbox"
                                        name="checkbox"
                                    />
                                </S.HeaderUserSetTheme>
                                <S.HeaderExit to={routesPath.EXIT}>
                                    Выйти
                                </S.HeaderExit>
                            </S.HeaderUserSet>
                        )}
                    </S.HeaderNav>
                </S.HeaderBlock>
            </Container>
        </S.Header>
    )
}
