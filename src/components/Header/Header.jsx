import { useState } from 'react'
import * as S from './Header.styled.js'
import { Container } from '../../global.styled.js'

export const Header = ({ addCard, setTheme, theme }) => {
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
            <a href="" target="_self">
              <S.HeaderLogoImg src="logo.png" alt="logo" />
              {/* <S.HeaderLogoImg src="logo_dark.png" alt="logo" /> */}
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <S.HeaderLogoImg src="logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <S.HeaderBtnMainNew id="btnMainNew">
              <S.HeaderBtnMainNewLink href="#popNewCard" onClick={addCard}>
                Создать новую задачу
              </S.HeaderBtnMainNewLink>
            </S.HeaderBtnMainNew>
            <S.HeaderUser
              href="#user-set-target"
              className="_hover02"
              onClick={openModal}
            >
              Ivan Ivanov
            </S.HeaderUser>
            {isOpened && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                {/* <a href="">x</a> */}
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input
                    onChange={() => setTheme(!theme)}
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                  />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  )
}
