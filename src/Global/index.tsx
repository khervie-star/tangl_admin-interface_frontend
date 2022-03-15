import styled,{ createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  font-family: 'CeraPRO-Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
}

body{
  margin: 0 !important;
}

#root{
  margin: 0;
}
`

export const Container = styled.div`
  margin: 5rem;
`