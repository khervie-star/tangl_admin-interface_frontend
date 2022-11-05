import styled from "styled-components";
import { device } from "../../../../Global";
import { FlexWrap, Image } from "../Assets/Common";

export const TabTwoContainer = styled.div`
  padding: 5rem;
  background: #ffffff;
  @media ${device.tablet} {
    padding: 2.5rem 1.5rem;
  }
`;

export const TabTwoWrapper = styled.div`
  max-width: 1440px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: #ffffff;
  @media ${device.tablet} {
    ${FlexWrap} {
      flex: 100%;
    }
    ${Image} {
      margin-left: 0;
      margin-bottom: 2.5rem;
    }
  }
`;

export const HeadWrap = styled.div`
  margin-right: 19.875rem;
  @media ${device.tablet} {
    margin-right: 0;
  }
`;

export const BaseWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  @media ${device.tablet} {
    ${FlexWrap} {
      flex: 100%;
      display: flex;
      justify-content: center;
    }
    ${Image} {
      margin-top: 2.5rem;
    }
  }
`;
