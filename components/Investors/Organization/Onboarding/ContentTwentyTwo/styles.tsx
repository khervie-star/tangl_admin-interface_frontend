import styled, { css } from "styled-components";

export const FundraisingFormTitle = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  color: #011122;
  margin-top: 1rem;
`;

export const SectionTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #324a64;
  margin: 1rem 0;
`;

export const SectionCard = styled.div`
  color: #43566a;
  background: #ffffff;
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: left;
  padding: 32px;
  margin: 24px 0;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:hover,
  &:focus,
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.4px;
  }
`;

export const SectionItem = styled.div`
  box-sizing: border-box;
  margin-bottom: 1.5rem;
`;

export const SectionValue = styled.label`
  margin: 4px 0;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #011122;
`;

export const ItemLabel = styled.p`
  margin: 4px 0;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #43566a;
`;
