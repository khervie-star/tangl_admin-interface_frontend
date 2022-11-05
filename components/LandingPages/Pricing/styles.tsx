import styled, { css } from "styled-components";
import { device } from "../../../Global";

type PricingTypes = {
  active?: boolean;
};
export const PricingContainer = styled.div`
  background: #ffffff;
  padding: 5rem;
  max-width: 1440px;
  margin: auto;
  @media ${device.tablet} {
    padding: 1.5rem;
  }
`;

export const TabWrap = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

export const TabContainer = styled.div`
  padding: 0.625rem;
  background: #f4f4f4;
  border-radius: 4px;
  display: inline-grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  margin: 5rem 0rem;
  max-width: 27rem;
  box-sizing: border-box;
`;

export const Tabs = styled.span`
  padding: 0.625rem 2.5rem;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.4px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  @media ${device.mobileL} {
    padding: 0.625rem 2rem;
  }
  ${({ active }: PricingTypes) =>
    active
      ? css`
          background: #ffffff;
          border-radius: 4px;
          color: #324a64; ;
        `
      : css`
          color: #a0aaba;
          background: #f4f4f4;
        `}
`;

export const PricingGrid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.125rem;
  @media ${device.tablet}{
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PricingCards = styled.div`
  background: #f4f4f4;
  border-radius: 4px;
  padding: 2.5rem;
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #43566a;
    margin: 0;
    margin-bottom: 2rem;
  }
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.1px;
    text-transform: uppercase;
    color: #a0aaba;
    margin: 0;
    margin-bottom: 0.5rem;
  }
`;

export const PricePlan = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #3798ff;
  margin-bottom: 0.5rem;
`;

export const Prices = styled.div`
  display: flex;
  align-items: baseline;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #007afb;
  }
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #324a64;
    margin-left: 0.5rem;
    text-transform: lowercase;
  }
`;

export const PricingButton = styled.button`
  background: #007afb;
  border-radius: 4px;
  width: 100%;
  padding: 0.75rem 0rem;
  display: flex;
  justify-content: center;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #ffffff;
  border: 0;
  margin: 2rem 0rem;
`;

export const Includes = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.1px;
  text-transform: uppercase;
  color: #a0aaba;
`;

export const Features = styled.ul`
  list-style: none;
  li {
    display: flex;
    align-items: center;
    span {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #43566a;
      margin-left: 1rem;
      text-transform: none;
    }
  }
`;
