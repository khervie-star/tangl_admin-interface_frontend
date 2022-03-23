import styled from "styled-components";

export type ButtonProps = {
  background?: string;
  borderColor?: string;
  marginLeft?: string;
};

export const TabElevenContainer = styled.div`
  padding: 5rem;
`;

export const BarWrapper = styled.div`
  padding: 5rem;
  background: #011122;
  border-radius: 16px;
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
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "0")};
  cursor: pointer;
`;
