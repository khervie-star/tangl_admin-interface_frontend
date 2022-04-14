import styled from "styled-components";
import { TabProps } from "./types";

export const List = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 1.5rem;
`;

export const ListText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #a0aaba;
  margin: 0;
  margin-left: 1.875rem;
`;

export const TextTitle = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #ffffff;
`;

export const FlexWrap = styled.div`
  flex: ${({ flexPercentage }: TabProps) =>
    flexPercentage ? flexPercentage : "50%"};
  box-sizing: border-box;
  padding: ${({ padding }: TabProps) => (padding ? padding : "0")};
`;

export const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
`;
