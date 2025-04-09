import { useState } from 'react'
import { Link } from 'react-router-dom'

import * as S from './Header.styled.js'
import { Container } from '../../lib/global.styled.js'
import { routesPath } from '../../lib/routesPath.js'

export const Header = ({ addCard, setTheme, theme, isAuth }) => {
    // Пункт_№1: Модальное окно
    const [isOpened, setIsOpened] = useState(false)

    const openModal = (e) => {
        e.preventDefault()
        setIsOpened((prev) => !prev)
    }
    //
    return (
        <S.Header>
            <Container>
                <S.HeaderBlock>
                    <div>
                        <Link to={routesPath.MAIN}>
                            <S.HeaderLogoImg
                            // src="public/logo.png"
                            // alt="logo"
                            />
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
                        <S.HeaderBtnMainNew id="btnMainNew">
                            <S.HeaderBtnMainNewLink
                                href="#popNewCard"
                                onClick={addCard}
                            >
                                Создать новую задачу
                            </S.HeaderBtnMainNewLink>
                        </S.HeaderBtnMainNew>
                        <S.HeaderUser onClick={openModal}>
                            {isAuth.name}
                        </S.HeaderUser>
                        {isOpened && (
                            <S.HeaderUserSet id="user-set-target">
                                {/* <a href="">x</a> */}
                                <S.HeaderUserSetName>
                                    {isAuth.name}
                                </S.HeaderUserSetName>
                                <S.HeaderUserSetMail>
                                    {isAuth.login}
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
                                <S.HeaderExit type="button">
                                    <Link to={routesPath.EXIT}>Выйти</Link>
                                </S.HeaderExit>
                            </S.HeaderUserSet>
                        )}
                    </S.HeaderNav>
                </S.HeaderBlock>
            </Container>
        </S.Header>
    )
}
