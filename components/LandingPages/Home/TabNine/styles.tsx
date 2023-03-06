import styled from "styled-components";
import { device } from "../../../../Global";
export const TabNineContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem 5rem 25rem 5rem;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 0px auto;
  @media ${device.tablet} {
    display: none;
  }
  position: relative;
`;

export const TextWrapper = styled.div`
  max-width: 388px;
`;

export const BlobText = styled.span`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.1px;
  text-transform: uppercase;
  color: #007afb;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 10rem;
  bottom: 5rem;
  img {
    width: 100%;
  }
`;
