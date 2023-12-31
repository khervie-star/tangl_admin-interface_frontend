import styled from "styled-components";
import { device } from "../../../Global";

export const LogoText = styled.div`
  margin-left: 0.971rem;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const NavContainer = styled.div`
  color: #324a64;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 2.25rem 5rem;
  @media ${device.tablet} {
    padding: 2.25rem 3rem;
  }

  @media ${device.mobileL} {
    padding: 2.25rem 1.5rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 2.5rem;
`;

export const Terminate = styled.button`
  cursor: pointer;
  border: 0;
  background: #fff;
`;
