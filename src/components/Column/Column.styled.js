import styled from 'styled-components'

export const MainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
`

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  align-items: center;
  color: rgb(148, 166, 190);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: uppercase;

  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    display: flex;
  }
`

export const StyledCard = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`
