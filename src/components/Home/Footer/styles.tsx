import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 5rem;
  padding: 5rem;
  background: #011122;
`;

export const HeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TanglWrap = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: center;
  letter-spacing: -0.2px;
  color: #ffffff;
  span {
    margin-left: 12px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    font-feature-settings: "liga" off;
    color: #ffffff;
  }
  p {
    font-family: "Cera Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: -0.1px;
    color: #a0aaba;
  }
`;

export const BaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding: 40px 0px;
`;

export const BaseText = styled.div`
  display: flex;
  align-items: center;
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    margin-right: 57px;
    color: #a0aaba;
  }
`;

export const BaseIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const Flex = styled.div`
  flex: 20%;
`;

export const IconBox = styled.div`
  height: 48px;
  width: 48px;
  margin-left: 35px;
  box-sizing: border-box;
  background: #a0aaba;
`;
