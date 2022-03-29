import { LogoText, NavContainer, LogoContainer, Terminate } from "./styles";
import { Logo, DeleteIcon } from "./Icons";
import { useNavigate } from "react-router-dom";

const OnBoardNavBar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/", { replace: true })
    }
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
