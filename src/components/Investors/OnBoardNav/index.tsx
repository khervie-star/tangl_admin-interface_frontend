import { LogoText, NavContainer, LogoContainer, Terminate } from './styles';
import { Logo } from './Icons';


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