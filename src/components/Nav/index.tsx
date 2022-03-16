import {
    Wrapper, 
    LogoContainer, 
    LogoTitle, Navlist, 
    NavLink, 
    NavContainer, 
    NavButtons, 
    SignInButton, 
    SignUpButton } from './styles'
import { Logo } from '../Icons/Navicons';


const NavBar = () => {
    return(
            <NavContainer>
                <Wrapper>
                    <LogoContainer>
                        <Logo/>
                        <LogoTitle>Tangl</LogoTitle>
                    </LogoContainer>
                    <Navlist>
                        <li><NavLink to={'/'}>For Investors</NavLink></li>
                        <li><NavLink to={'/about'}>For Startups</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact us</NavLink></li>
                    </Navlist>
                </Wrapper>
                <NavButtons>
                    <SignInButton>Sign in</SignInButton>
                    <SignUpButton>Sign up</SignUpButton>
                </NavButtons>
            </NavContainer>
    )
}

export default NavBar;