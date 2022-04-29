import {
  Wrapper,
  LogoContainer,
  LogoTitle,
  Navlist,
  NavLink,
  NavContainer,
  NavButtons,
  AuthButton,
  DropBar,
} from "./styles";
import Link from "next/link";
import { Logo, BarIcon } from "./Icons";
import Router from "next/router";

const NavBar = () => {
  const handleClick = () => {
    Router.push("/Investor");
  };
  return (
    <NavContainer>
      <Wrapper>
        <LogoContainer>
          <Logo />
          <LogoTitle>Tanglet</LogoTitle>
        </LogoContainer>
        <Navlist>
          <li>
            <Link href={"/"}>
              <NavLink>For Investors</NavLink>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <NavLink>For Startups</NavLink>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <NavLink>Contact us</NavLink>
            </Link>
          </li>
        </Navlist>
      </Wrapper>
      <NavButtons>
        <AuthButton
          background="#011122"
          borderColor="#a0aaba"
          margin="0rem 1.25rem 0rem 0rem"
          display="desktop"
        >
          Sign in
        </AuthButton>
        <AuthButton
          background="#007afb"
          margin="0rem 0rem 0rem 1.25rem"
          display="desktop"
          onClick={handleClick}
        >
          Sign up
        </AuthButton>
        <AuthButton
          background="#007afb"
          display="mobile"
          margin="0rem 2.8rem 0rem 0rem"
          onClick={handleClick}
        >
          Get funded
        </AuthButton>
        <DropBar>
          <BarIcon />
        </DropBar>
      </NavButtons>
    </NavContainer>
  );
};

export default NavBar;
