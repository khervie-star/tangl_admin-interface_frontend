import styled, { css } from "styled-components";
import { device } from "../../../../Global";
import { FlexWrap, Image, TextTitle } from "../Assets/Common";

type TabThreeType = {
  inView?: boolean;
};

export const TabThreeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem;
  flex-wrap: wrap;
  ${({ inView }: TabThreeType) =>
    inView
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transition: visibility 2s, opacity 5s linear;
        `}
  ${Image} {
    margin-left: 5rem;
  }
  ${TextTitle} {
    max-width: 36rem;
  }
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
