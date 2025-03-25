import styled from "styled-components";
import { Hover1, Hover2, Hover3 } from "../../global.styled";

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  /* background-color: #FFFFFF; */
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
`;

export const HeaderLogoImg = styled.img`
  width: 85px;
  /* height: 38px; */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("${({theme})=>theme.logo}");
  
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
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
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
  color: #565EEF;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565EEF;
    border-bottom: 1.9px solid #565EEF;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
}
`;

export const HeaderExit=styled(Hover3('a')) `
  background-color: #33399b;
  color: #FFFFFF;
`
