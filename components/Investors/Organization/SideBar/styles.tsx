import styled from "styled-components";

export const SideBarContainer = styled.div`
  background: #011122;
  max-width: 17.5rem;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 2.5rem 3.75rem 0rem 2.5rem;
  overflow-x: hidden;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.2px;
    color: #ffffff;
    margin-left: 0.75rem;
  }
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-feature-settings: "liga" off;
  color: #ffffff;
  padding: 0.75rem 4rem 0.75rem 1rem;
  margin-top: 2.5rem;
  span {
    margin-left: 1.125rem;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 16px;
  }
  &:focus {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 16px;
  }
`;

export const SideRoutes = styled.div`
  margin-top: 5rem;
`;

export const Control = styled.div`
  margin: 7.5rem 0rem 13.5rem 0rem;
`;
