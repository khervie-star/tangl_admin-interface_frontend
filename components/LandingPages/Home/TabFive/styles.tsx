import styled from "styled-components";
import { device } from "../../../../Global";
import { FlexWrap } from "../Assets/Common";

export const TabFiveContainer = styled.div`
  padding: 5rem 0rem;
  @media ${device.tablet} {
    padding: 2.5rem 0rem;
    ${FlexWrap}{
      flex: 100%;
    }
  }
`;
export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div`
  margin: 0rem 5rem 2.5rem 5rem;
  @media ${device.tablet} {
    margin: 0rem 1.5rem 2.5rem 1.5rem;
  }
`;

export const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${device.tablet} {
    display: none;
  }
`;
