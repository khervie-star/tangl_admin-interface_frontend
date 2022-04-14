import styled from "styled-components";
import { device } from "../../../Global";

export const TabFiveContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem;
  flex-wrap: wrap;
  @media ${device.tablet} {
    padding: 2.5rem 1.5rem;
  }
`;
export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
