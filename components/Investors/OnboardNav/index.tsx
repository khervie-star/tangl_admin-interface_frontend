import { LogoText, NavContainer, LogoContainer, Terminate } from "./styles";
import { Logo, DeleteIcon } from "./Icons";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { setInvestorType } from "../../../store/actions/session";

const OnBoardNavBar = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    Router.replace("/");
    dispatch(setInvestorType(""))
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
