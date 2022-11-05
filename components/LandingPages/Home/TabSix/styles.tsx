import styled from "styled-components";
import { device } from "../../../../Global";
import { FlexWrap, Image, TextTitle } from "../Assets/Common";

export const TabSixContainer = styled.div`
  padding: 5rem;
  background: #007afb;
  @media ${device.tablet} {
    padding: 2.5rem 1.5rem;
  }
`;

export const TabSixWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0px auto;
  flex-wrap: wrap;
  @media ${device.tablet} {
    ${FlexWrap} {
      flex: 100%;
    }
  }
`;
