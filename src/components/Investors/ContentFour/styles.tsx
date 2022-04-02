import styled from "styled-components";

export const TextTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.4px;
  color: #324a64;
  margin-top: 5rem;
`;

export const TextBody = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  color: #a0aaba;
  margin-top: 1rem;
`;

export const TelVerified = styled.div`
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
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
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: -0.1px;
      color: #5ac179;
      margin-left: 4px;
    }
  }
`;
