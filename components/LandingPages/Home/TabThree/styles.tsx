import styled from "styled-components";
import { device } from "../../../../Global";
import { FlexWrap, Image, TextTitle } from "../Assets/Common";

export const TabThreeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem;
  flex-wrap: wrap;
  ${Image} {
    margin-left: 5rem;
  }
  ${TextTitle}{
     max-width: 36rem;
  }
  @media ${device.tablet} {
    padding: 2.5rem 1.5rem;
    ${FlexWrap}{
      flex: 100%;
    }
    ${Image} {
    margin-left: 0;
    margin-top: 2.5rem;
  }
  }
`;
