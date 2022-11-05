import styled from "styled-components";
import { device } from "../../../../Global";
import { FlexWrap, Image } from "../Assets/Common";

export const TabFiveContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0px auto;
  @media ${device.tablet} {
    padding: 2.5rem 1.5rem;
    ${FlexWrap} {
      flex: 100%;
    }
    ${Image} {
      margin-left: 0;
      margin-top: 2.5rem;
    }
  }
`;
export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div`
  @media ${device.tablet} {
    margin: 0rem 0rem 1.5rem 0rem;
  }
`;

export const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${device.tablet} {
    display: none;
  }
`;
