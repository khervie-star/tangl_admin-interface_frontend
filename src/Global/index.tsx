import styled,{ createGlobalStyle } from "styled-components";


const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

export const GlobalStyles = createGlobalStyle`

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