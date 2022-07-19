import styled, { css } from "styled-components";
import { device } from "../../Global";

export type NavProps = {
  background?: string;
  margin?: string;
  display?: string;
  borderColor?: string;
  open?: boolean;
};

export const NavTwoContainer = styled.div`
  color: #324a64;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 2.25rem 5rem;
  @media ${device.laptopL} {
    padding: 2.25rem 3.5rem;
  }
  @media ${device.tablet} {
    padding: 1.75rem 1.375rem;
  }
`;

export const Drawer = styled.div`
  flex-flow: column nowrap;
  margin: 0;
  top: 0;
  right: 0;
  box-sizing: border-box;
  transform: ${({ open }: NavProps) =>
    open ? "translateX(0)" : "translateX(100%)"};
  color: #ffffff;
  width: 100%;
  background: #011122;
  box-shadow: 14px 14px 40px rgba(160, 170, 186, 0.15);
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  position: fixed;
  z-index: 4;
  padding: 1.625rem;
  transition: transform 0.3s ease-in-out;
  span {
    display: flex;
    justify-content: end;
    margin-right: 1rem;
  }
  @media ${device.mobileL} {
    padding: 2.5rem;
  }
  @media ${device.mobileM} {
    padding: 1.5rem;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0rem 1.375rem 0rem 1.375rem;
  li {
    a {
      text-decoration: none;
      font-family: "Outfit";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.1px;
      font-feature-settings: "liga" off;
      color: #a0aaba;
      cursor: pointer;
      &:hover {
        color: #007afb;
      }
    }
    margin-bottom: 3rem;
  }
`;

export const Drawerbase = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  div {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #a0aaba;
  }
`;

export const DrawerIcons = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  div {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #a0aaba;
  }
`;

export const DrawerLogo = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 0.75rem;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px;
    font-feature-settings: "liga" off;
    color: #007afb;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 2.5rem;
`;

export const LogoTitle = styled.div`
  margin-left: 0.971rem;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const Navlist = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  li {
    padding: 0rem 2.5rem;
    @media ${device.laptopL} {
      padding: 0rem 1.75rem;
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-family: inherit;
  font-weight: inherit;
  color: #324a64;
  font-size: 18px;
  line-height: 28px;
  cursor: pointer;
  &:hover {
    color: #007afb;
  }
  @media ${device.laptopE} {
    font-size: 16px;
    line-height: 24px;
  }
  @media ${device.laptop} {
    font-size: inherit;
    line-height: inherit;
  }
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthButton = styled.button`
  background: ${({ background }: NavProps) =>
    background ? background : "007AFB"};
  margin: ${({ margin }: NavProps) => (margin ? margin : "0")};
  display: ${({ display }: NavProps) =>
    display === "desktop" ? "flex" : "none"};
  box-sizing: border-box;
  border: 0;
  border-radius: 4px;
  padding: 0.75rem 1.75rem;
  color: #ffffff;
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  @media ${device.laptopE} {
    font-size: 16px;
    line-height: 24px;
  }
  &:hover {
    filter: grayscale(50%) blur(0.1px);
    transition: 0.1s ease-in-out;
  }
  cursor: pointer;
  @media ${device.laptopL} {
    padding: 0.75rem 1.5rem;
  }
  @media ${device.tablet} {
    display: ${({ display }: NavProps) =>
      display === "mobile" ? "flex" : "none"};
  }
  @media ${device.mobileL} {
    padding: 0.75rem 1rem;
  }
  @media ${device.mobileM} {
    font-size: 12px;
    line-height: 12px;
  }
`;

export const DropBar = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    margin-right: 0.5rem;
  }
`;