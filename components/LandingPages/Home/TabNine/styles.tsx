import styled from "styled-components";
import { device } from "../../../../Global";
export const TabNineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5rem;
  @media ${device.tablet} {
    display: none;
  }
`;

export const LogCard = styled.div`
  background: #011122;
  border-radius: 4px;
  padding: 2.5rem;
`;

export const LogText = styled.h1`
  margin: 0;
  margin-top: 1.5rem;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.4px;
  color: #ffffff;
  max-width: 16rem;
`;

export const LogBox = styled.div`
  display: flex;
  height: 18.5rem;
  max-width: 16rem;
  background: #a0aaba;
`;
