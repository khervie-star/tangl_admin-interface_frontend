import styled from "styled-components";

export const MailContainer = styled.div`
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
    margin: 0;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #a0aaba;
      margin: 0;
    }
  }
`;

export const ResendLink = styled.div`
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 14rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #324a64;
    margin: 0;
  }
  span {
    display: flex;
    align-items: center;
    margin: 0;
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      font-feature-settings: "liga" off;
      color: #007afb;
      margin-left: 4px;
    }
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

