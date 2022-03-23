import styled from "styled-components";
import { Link } from "react-router-dom";

export type NavProps = {
  background?: string;
  margin?: string;
  display?: string;
  borderColor?: string;
};

export const NavContainer = styled.div`
  color: white;
  background-color: #131a22;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 2.25rem 5rem;
  @media (max-width: 450px) {
    padding: 1.75rem 1.375rem;
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
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthButton = styled.button`
  background: ${({ background }: NavProps) =>
    background ? background : "007AFB"};
  border: ${({ borderColor }: NavProps) =>
    borderColor ? `1px solid ${borderColor}` : "0"};
  margin: ${({ margin }: NavProps) => (margin ? margin : "0")};
  display: ${({ display }: NavProps) =>
    (display === "desktop" ? 'flex' : "none")};
  box-sizing: border-box;
  border-radius: 32px;
  padding: 0.625rem 1rem;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  cursor: pointer;
  @media (max-width: 450px) {
    display: ${({ display }: NavProps) =>
    (display === "mobile" ? 'flex' : "none")};
  }
`;

export const DropBar = styled.div`
  display: none;
  @media (max-width: 450px) {
    display: flex;
    margin-right: 0.5rem;
  }
`;
