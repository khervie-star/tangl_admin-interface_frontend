import styled from "styled-components";
import { device } from "../../../Global";

export const HeaderWrapper = styled.div`
  display: flex;
  margin: 4.7rem 5rem 8.2rem 5rem;
  @media ${device.tablet} {
    margin: 4.7rem 3rem 8.2rem 3rem;
  }

  @media ${device.mobileL} {
    margin: 4.7rem 1.5rem 8.2rem 1.5rem;
  }
`;
export const Pad = styled.div`
  margin-left: 8rem;
  @media ${device.tablet} {
    margin-left: 5rem;
  }

  @media ${device.mobileL} {
    margin-left: 0rem;
  }
`;

export const ButtonWrap = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
`;
