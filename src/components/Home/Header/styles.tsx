import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin: 5rem 0rem;
  padding-top: 2.5rem;
  @media (max-width: 450px) {
    margin: 3.5rem 2.125rem;
    padding-top: 0;
  }
`;

export const HeaderTitle = styled.h1`
  margin: 2.5rem auto;
  max-width: 58.5rem;
  text-align: center;
  font-size: 80px;
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 96px;
  @media (max-width: 450px) {
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -0.6px;
    margin: 0.5rem auto;
  }
`;

export const HeaderText = styled.p`
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.2px;
  margin: 0rem auto;
  max-width: 40.375rem;
  @media (max-width: 450px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    margin: 1rem auto;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0rem;
`;

export const HeaderButton = styled.button`
  font-family: inherit;
  font-size: 1.125rem;
  line-height: 1.5rem;
  background: #007afb;
  border-radius: 32px;
  color: inherit;
  letter-spacing: -0.1px;
  padding: 0.75rem 1.25rem;
  border: 0;
  cursor: pointer;
`;
