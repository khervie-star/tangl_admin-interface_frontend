import styled,{ createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
*{

  
}

body{
  margin: 0 !important;
  color: #ffffff;
  background: #000000;
  font-family: 'Outfit';
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
}

#root{
  margin: 0;
}
`

export const Container = styled.div`
  padding: 5rem;
`