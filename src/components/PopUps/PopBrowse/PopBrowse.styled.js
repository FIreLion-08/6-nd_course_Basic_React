import styled from "styled-components";
import { topicStyles } from "../../../lib/topic";
import { CardName } from "../../Card/Card.styled.js";
import { Hover1, Hover3 } from "../../../lib/global.styled.js";


export const PopBrouwseStyled = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  &:target {
    display: block;
  }
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;
export const PopBrouwseContainer = styled.div`
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
`;

export const PopBrouwseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({theme})=> theme.body};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrouwseContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
  margin-bottom: 20px;
`;

export const PopBrouwseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrouwseTitle = styled.h3`
  color: ${({theme})=> theme.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBroweColor = styled.div`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  width: 115px;
  height: 30px;
  border-radius: 24px;
  background-color: ${({ $themeColor }) =>
        topicStyles[$themeColor]?.backgroundColor || "#94a6be"};

  ${CardName} {
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#ffffff"};
  }
  margin-right: 7px;
`

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;
export const StatusPsubTtlP = styled.div`
  padding-bottom: 14px;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: ${({theme})=> theme.text};
`;

export const StatusThemesDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: flex-start;
    gap: 7px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;

    letter-spacing: 0em;
    text-align: center;
    width: auto;
    overflow: auto;
`;

export const OpenedCardTheme = styled.input`
  display: none;

&:checked + label {
  opacity: 100%;
}
`;

export const StatusThemeLabel = styled.label`
  display: inline-block;
  height: 30px;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;


  cursor: pointer;
  margin-right: 7px;
  opacity: 40%;
  background-color: ${({ $color }) =>
        topicStyles[$color]?.backgroundColor || "#94A6BE"};

  ${CardName} {
    color: ${({ $color }) => topicStyles[$color]?.color || "#FFFFF"};
  }

  &:hover {
    opacity: 100%;
  }
  white-space: nowrap;
`;


export const PopBrouwseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseTitle = styled.label`
  color: ${({theme})=> theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: ${({theme})=> theme.text};
  background-color: ${({theme})=> theme.body};
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
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

// export const Calendar = styled.div`
//   width: 182px;
//   margin-bottom: 20px;
// `
// export const CalendarTtl = styled.p`
//   margin-bottom: 14px;
//   padding: 0 7px;

//   color: #000;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1;
// `

// export const CalendarPeriod = styled.div`
//   padding-top: 20px;
//   p {
//     color: #94A6BE;
//     font-size: 10px;
//     line-height: 1;
//     span {
//       color: #000000;
//     }
//   }
// `


export const PopBrowseButtonBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    button {
      height: 40px;
      width: 100%;
      margin-right: 0px;
    }
  }
`;

export const ButtonGroup = styled.div`
  button {
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    button {
      margin-right: 0px;
    }
  }
`;

export const ButtonChengeDelete = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  a {
    color: #565eef;
  }
  ${Hover3}
`;

export const ButtonClose = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  a {
    color: #ffffff;
  }
  ${Hover1}
`;
