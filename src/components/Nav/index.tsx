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
import { Logo, BarIcon } from "./Icons/Navicons";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/investors");
  };
  return (
    <NavContainer>
      <Wrapper>
        <LogoContainer>
          <Logo />
          <LogoTitle>Tangl</LogoTitle>
        </LogoContainer>
        <Navlist>
          <li>
            <NavLink to={"/"}>For Investors</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>For Startups</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact us</NavLink>
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
