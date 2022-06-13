import styled from "styled-components";
import { device } from "../../../Global";
import { TextBody, TextTitle } from "../Assets/Common";

export type ButtonProps = {
  background?: string;
  borderColor?: string;
  margin?: string;
  display?: string;
};

export const TabEightContainer = styled.div`
  padding: 5rem;
  @media ${device.mobileL} {
    padding: 2.5rem 1.5rem;
  }
`;

export const BarWrapper = styled.div`
  padding: 5rem;
  background: #011122;
  border-radius: 16px;
  ${TextTitle}{
      text-align: center;
  }
  ${TextBody}{
    text-align: center;
    margin: 2.5rem 0rem;
  }
  @media ${device.mobileL} {
    padding: 2.5rem;
  }
`;

export const ButtonFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const OtherButton = styled.button`
  background: ${({ background }: ButtonProps) =>
    background ? background : "007AFB"};
  border: ${({ borderColor }: ButtonProps) =>
    borderColor ? `1px solid ${borderColor}` : "0"};
  border-radius: 32px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #ffffff;
  padding: 12px 20px;
  margin: ${({ margin }) => (margin ? margin : "0")};
  cursor: pointer;
  &:hover{
    filter: grayscale(50%) blur(0.1px);
    transition: .1s ease-in-out;
  }
  @media ${device.mobileL} {
    margin: ${({ display }) =>
      display === "mobile" ? "1.5rem 0rem 0rem 0rem" : "0"};
  }
`;
