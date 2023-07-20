import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 550px;
`;

export const SectionHeader = styled.div`
  color: var(--black-80, #324a64);
  font-family: Outfit;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.2px;
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const SectionCard = styled.div`
  width: 100%;
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid var(--black-20, #e1e8f4);
  background: #fff;
`;

export const SectionCardText = styled.p`
  color: var(--black-70, #43566a);
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.1px;
  margin: 0;
  padding: 0;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  p {
    margin: 0;
    padding: 0;
    color: var(--black-70, #43566a);
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  h6 {
    margin: 0;
    padding: 0;
    color: var(--black-80, #324a64);
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -0.1px;
  }
  .fileName {
    color: var(--blue-100, #007afb);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.1px;
  }
`;
