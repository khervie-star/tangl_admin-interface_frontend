import styled from "styled-components";
import { device } from "../../../Global";

export const ContactContainer = styled.div`
  background: #ffffff;
  padding: 5rem;
  max-width: 1440px;
  margin: auto;
  @media ${device.tablet} {
    padding: 1.5rem;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8.75rem;
  margin-top: 5rem;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-row-gap: 3.75rem;
    > * {
      &:last-child {
        order: -1;
      }
    }
  }
`;

export const ContactFormContainer = styled.div`
  background: #ffffff;
  border: 1px solid #e1e8f4;
  border-radius: 24px;
  padding: 2.5rem;
  box-sizing: border-box;
`;

export const ContactImage = styled.div`
  img {
    width: 100%;
  }
`;

export const SendMessage = styled.button`
  width: 100%;
  background: #007afb;
  border-radius: 4px;
  padding: 0.75rem 0rem;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  justify-content: center;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #ffffff;
  margin: 2rem 0rem;
  border: 0;
  cursor: pointer;
`;

export const ContactFormFooter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #011122;
  font-size: 18px;
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #43566a;
    margin-right: 1.5rem;
    @media ${device.tablet} {
      margin-bottom: 1rem;
    }
  }
`;
