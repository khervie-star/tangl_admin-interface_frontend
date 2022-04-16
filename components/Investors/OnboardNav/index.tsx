import { LogoText, NavContainer, LogoContainer, Terminate } from "./styles";
import { Logo, DeleteIcon } from "./Icons";
import Router from "next/router";

const OnBoardNavBar = () => {
  const handleClick = () => {
    Router.replace("/");
  };
  return (
    <NavContainer>
      <LogoContainer>
        <Logo />
        <LogoText>Tangl</LogoText>
      </LogoContainer>
      <Terminate onClick={handleClick}>
        <DeleteIcon />
      </Terminate>
    </NavContainer>
  );
};

export default OnBoardNavBar;
