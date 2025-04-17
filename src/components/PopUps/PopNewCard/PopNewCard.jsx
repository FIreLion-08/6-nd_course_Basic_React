import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'

import * as S from './PopNewCard.styled.js'
import { routesPath } from '../../../lib/routesPath.js'
import { addNewCardApi } from '../../../api/MainPageApi.js'
import { UserContext } from '../../../context/UserContext.jsx'
import { CardContext } from '../../../context/cardContext.jsx'
import { Calendar } from '../../Calendar/Calendar.jsx'

// import { DayPicker } from "react-day-picker";
// import { ru } from "date-fns/locale";

export const PopNewCard = () => {
    const { user } = useContext(UserContext)
    const { setCards } = useContext(CardContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const [date] = useState(new Date())

    const [inputValue, setInputValue] = useState({
        title: '',
        topic: '',
        status: '',
        description: '',
        // date: new Date(),
    })

    // const currentDate = `${date.getDate() }.${date.getMonth()+1}.${date.getFullYear()}`
    // const currentDate = date.toLocaleDateString("ru-US")

    //Обработка БЭК
    const OnAddNewCard = () => {
        setError('')
        const title = !inputValue.title ? 'Новая задача' : inputValue.title
        const topic = !inputValue.topic ? 'Research' : inputValue.topic
        const status = !inputValue.status ? 'Без статуса' : inputValue.status
        const newCard = {
            description: inputValue.description,
            title,
            topic,
            status,
            date,
        }

        if (!inputValue.description) {
            return setError('Заполните описание')
        }

        addNewCardApi({
            newCard,
            token: user.token,
        })
            .then((responce) => {
                console.log(responce)
                setCards(responce.tasks)
                navigate(routesPath.MAIN)
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    const onChangeInput = (e) => {
        const { value, name } = e.target
        setInputValue({ ...inputValue, [name]: value })
    }

    return (
        <S.PopNewCard id="popNewCard">
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
                        <Link to={routesPath.MAIN}>
                            <S.PopNewCardClose>✖</S.PopNewCardClose>
                        </Link>
                        <S.PopNewCardWrap>
                            <S.PopNewCardForm id="formNewCard" action="#">
                                <S.ForNewBlock>
                                    <S.SubTtl htmlFor="formTitle">
                                        Название задачи
                                    </S.SubTtl>
                                    <S.FormNewInput
                                        onChange={onChangeInput}
                                        value={inputValue.title}
                                        type="text"
                                        name="title"
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        autoFocus=""
                                    />
                                </S.ForNewBlock>
                                <S.ForNewBlock>
                                    <S.SubTtl htmlFor="textArea">
                                        Описание задачи
                                    </S.SubTtl>
                                    <S.FormNewArea
                                        onChange={onChangeInput}
                                        name="description"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                        defaultValue={''}
                                    />
                                </S.ForNewBlock>
                            </S.PopNewCardForm>
                            <Calendar />
                        </S.PopNewCardWrap>
                        <S.PopNewCardCategories>
                            <p>Категория</p>
                            <S.PopNewCardCategoriesTheme>
                                <S.InputRadio
                                    type="radio"
                                    id="radio1"
                                    name="topic"
                                    value="Web Design"
                                    onChange={onChangeInput}
                                />
                                <S.RadioToolbarLabel1 htmlFor="radio1">
                                    Web Design
                                </S.RadioToolbarLabel1>

                                <S.InputRadio
                                    type="radio"
                                    id="radio2"
                                    name="topic"
                                    value="Research"
                                    onChange={onChangeInput}
                                />
                                <S.RadioToolbarLabel2 htmlFor="radio2">
                                    Research
                                </S.RadioToolbarLabel2>

                                <S.InputRadio
                                    type="radio"
                                    id="radio3"
                                    name="topic"
                                    value="Copywriting"
                                    onChange={onChangeInput}
                                />
                                <S.RadioToolbarLabel3 htmlFor="radio3">
                                    Copywriting
                                </S.RadioToolbarLabel3>
                            </S.PopNewCardCategoriesTheme>
                        </S.PopNewCardCategories>
                        {error && error}
                        <button
                            onClick={OnAddNewCard}
                            className="form-new__create _hover01"
                            id="btnCreate"
                        >
                            Создать задачу
                        </button>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCard>
    )
}
