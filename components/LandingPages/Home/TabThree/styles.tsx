import styled, { css } from "styled-components";
import { device } from "../../../../Global";
import { FlexWrap, Image, TextTitle } from "../Assets/Common";

type TabThreeType = {
  inView?: boolean;
};

export const TabThreeContainer = styled.div`
  padding: 5rem;
  background: #43566a;
  @media ${device.tablet} {
    padding: 2.5rem 1.5rem;
  }
`;

export const TabThreeWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0px auto;
  flex-wrap: wrap;
  ${Image} {
    margin-left: 5rem;
    display: flex;
    justify-content: center;
  }
  ${TextTitle} {
    max-width: 36rem;
  }
  @media ${device.tablet} {
    ${FlexWrap} {
      flex: 100%;
    }
    ${Image} {
      margin-left: 0;
      margin-top: 2.5rem;
    }
  }
`;
