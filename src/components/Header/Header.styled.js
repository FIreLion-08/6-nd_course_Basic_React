import styled from "styled-components";
import { Hover1, Hover2, Hover3 } from "../../lib/global.styled";
import { Link } from "react-router-dom";


export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  /* background-color: #ffffff; */
  background-color: ${({theme})=> theme.primary};
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
  background-color: ${({theme})=>theme.primary};
`;

export const HeaderLogoImg = styled.img`
  width: 85px;
  height: 30px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("${({theme})=>theme.logo}");
  border-color: none !important; /* Убираем рамку с использованием !important */
  display: block; /* Убираем возможные отступы */
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//
// background-color: ${({theme})=>theme.body};
export const HeaderBtnMainNew=styled(Hover1('button')) `
width: 178px;
height: 30px;
border-radius: 4px;
background-color: #565eef;
color: #ffffff;
border: none;
font-size: 14px;
line-height: 10px;
font-weight: 500;
margin-right: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 14px;

&:hover {
  background-color: #33399b;
}
`;

export const HeaderBtnMainNewLink=styled.a`
  color: #FFFFFF;
`;

export const HeaderUser=styled(Hover2('a')) `
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme})=> theme.text2};
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${({theme})=> theme.tetx2};
    border-bottom: 1.9px solid ${({theme})=> theme.tetx2};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
}
`;

export const HeaderUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${({theme})=> theme.primary};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const HeaderUserSetName = styled.p`
  color: ${({theme})=> theme.text};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const HeaderUserSetMail = styled.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const HeaderUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${({theme})=> theme.text};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type=checkbox] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #EAEEF6;
    outline: none;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    &::before {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: #94A6BE;
        transition: 0.5s;
    }
  }
  input:checked[type=checkbox]::before {
    left: 12px;
  }
`;

export const HeaderExit= styled(Hover3('a')) `
  box-sizing: border-box;
  border: 1px solid ${({theme})=> theme.text2};
  border-radius: 4px;
  padding: 10px 14px 10px 14px;
  margin: 34px 0px;
  color: ${({theme})=> theme.text2};
`
