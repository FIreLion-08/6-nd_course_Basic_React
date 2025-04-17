import styled from 'styled-components'

export const PopNewCard = styled.div`
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;

    /* &:target {
    display: block;
  } */

    @media screen and (max-width: 660px) {
        top: 70px;
    }
`

export const PopNewCardContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);

    @media screen and (max-width: 660px) {
        padding: 0;
        justify-content: flex-start;
    }

    @media screen and (max-width: 495px) {
        padding: 0;
        justify-content: flex-start;
    }
`

export const PopNewCardBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.body};
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    position: relative;

    @media screen and (max-width: 660px) {
        border-radius: 0;
    }

    @media screen and (max-width: 495px) {
        padding: 20px 16px 32px;
    }
`

export const PopNewCardContent = styled.div`
    display: block;
    text-align: left;
`

export const PopNewCardTtl = styled.h3`
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
`
export const PopNewCardClose = styled.span`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94a6be;
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.text};
    }
`

export const PopNewCardWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 660px) {
        display: block;
    }
`

export const PopNewCardForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;

    @media screen and (max-width: 495px) {
        max-width: 100%;
        width: 100%;
        display: block;
    }
`

export const ForNewBlock = styled.div`
    display: flex;
    flex-direction: column;
`

export const SubTtl = styled.label`
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`

export const FormNewInput = styled.input`
    width: 100%;
    margin: 20px 0;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    color: ${({ theme }) => theme.text};

    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
    }
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
    }
`

export const FormNewArea = styled.textarea`
    max-width: 370px;
    margin-top: 14px;
    height: 200px;

    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;

    color: ${({ theme }) => theme.text};

    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
    }
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
    }
`

// export const Calendar = styled.div`
//   width: 182px;
//   margin-bottom: 20px;
// `
// export const CalendarTtl = styled.p`
//   margin-bottom: 14px;
//   padding: 0 7px;

//   color: ${({theme})=> theme.text};
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1;
// `

// export const CalendarDate = styled(DayPicker)`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   // margin-top: 14px;
//   margin: 0 0px;
//   // padding: 0 10px;

//   background-color: #fffffff;
//   color: #94A6BE;

//   .rdp {
//     margin: 0em;
//   }

//   .rdp-caption_label {

//     color: #94A6BE;
//     font-size: 14px;
//     line-height: 25px;
//     font-weight: 600;
//   }
//   .rdp-cell{
//     width: 22px;
//     height: 22px;
//     margin: 2px;
//     border-radius: 30%;
//     flex-wrap: nowrap;
//     align-items: center;
//     justify-content: center;
//     color: #94A6BE;
//     font-size: 12px;
//     line-height: 1;
//     letter-spacing: -0.2px;
//     cursor: pointer;

//   }
//   .rdp-button_reset.rdp-button.rdp-day {
//     width: 22px;
//     height: 22px;
//     font-size: 12px;
//   }
// `

// export const CalendarPeriod = styled.div`
//   padding-top: 20px;
//   p {
//     color: #94A6BE;
//     font-size: 10px;
//     line-height: 1;
//     span {
//       color: ${({theme})=> theme.text};
//     }
//   }
// `

export const PopNewCardCategories = styled.div`
    margin-bottom: 20px;
    p {
        margin-bottom: 14px;

        color: ${({ theme }) => theme.text};
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
    }
`
export const PopNewCardCategoriesTheme = styled.div``
export const InputRadio = styled.input`
    display: none;

    &:checked + label {
        opacity: 100%;
    }
`

export const RadioToolbarLabel1 = styled.label`
    display: inline-block;
    padding: 8px 20px 8px 20px;
    border-radius: 24px;
    color: #ff6d00;
    background: #ffe4c2;
    cursor: pointer;
    margin-right: 7px;
    opacity: 40%;

    &:hover {
        opacity: 100%;
    }
`

export const RadioToolbarLabel2 = styled.label`
    display: inline-block;
    padding: 8px 20px 8px 20px;
    border-radius: 24px;
    color: #06b16e;
    background: #b4fdd1;
    cursor: pointer;
    margin-right: 7px;
    opacity: 40%;

    &:hover {
        opacity: 100%;
    }
`

export const RadioToolbarLabel3 = styled.label`
    display: inline-block;
    padding: 8px 20px 8px 20px;
    border-radius: 24px;
    color: #9a48f1;
    background: #e9d4ff;
    cursor: pointer;
    margin-right: 7px;
    opacity: 50%;

    &:hover {
        opacity: 100%;
    }
`
