import styled from "styled-components";
import { device } from "../../../../../Global";
import { TextBody, TextTitle } from "../../../Assets/common";


export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14rem;
  @media ${device.tablet} {
    margin-top: 4rem;
  }
  @media ${device.mobileL} {
    margin-top: 2rem;
  }
`;
