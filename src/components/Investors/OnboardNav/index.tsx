import { LogoText, NavContainer, LogoContainer } from './styles';
import { Logo, Terminate } from './Icons/Navicons';


const NavBar = () => {
    return(
            <NavContainer>
                <LogoContainer>
                    <Logo/>
                    <LogoText>Tangl</LogoText>
                </LogoContainer>
                <Terminate/>
            </NavContainer>
    )
}

export default NavBar;