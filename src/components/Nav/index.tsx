import {Wrapper, LogoContainer, LogoTitle, Navlist, NavLink } from './styles'


const NavBar = () => {
    return(
            <Wrapper>
                <LogoContainer>
                    <LogoTitle>Tangl</LogoTitle>
                </LogoContainer>
                <Navlist>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/about'}>Contact</NavLink></li>
                    <li><NavLink to={'/contact'}>About</NavLink></li>
                </Navlist>
            </Wrapper>
    )
}

export default NavBar;