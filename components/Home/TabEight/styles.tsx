import styled from "styled-components";
import { device } from "../../../Global";
import { FlexWrap, Image, TextTitle } from "../Assets/Common";

export const TabEightContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem;
  flex-wrap: wrap;
  @media ${device.tablet} {
    padding: 2.5rem 1.5rem;
    ${FlexWrap} {
      flex: 100%;
      ${Image} {
        margin-top: 2.5rem;
      }
    }
  }
`;
