import { LogoText, NavContainer, LogoContainer, Terminate } from "./styles";
import { Logo, DeleteIcon } from "./Icons";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { setInvestorType } from "../../../store/actions/session";
import { setIndividualPage } from "../../../store/actions";

const OnBoardNavBar = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    Router.replace("/");
    dispatch(setInvestorType(""))
    dispatch(setIndividualPage(1))
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
