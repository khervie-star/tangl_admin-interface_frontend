import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../Home/Assets/Icons/SocialIcons";
import { BarIcon, DeleteIcon, DrawerLogoIcon, Logo } from "../Nav/Icons";
import { BarIconTwo, NavTwoLogo } from "./Icons";
import {NavTwoContainer, AuthButton, Drawer, Drawerbase, DrawerIcons, DrawerLogo, DropBar, LogoContainer, LogoTitle, NavButtons, NavLink, Navlist, Ul, Wrapper } from "./styles";

const NavBarTwo = () => {
    const handleClick = () => {
      Router.push("/Investor/Onboarding");
    };
  
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
      <NavTwoContainer>
        <Drawer open={open}>
          <span>
            <DeleteIcon onClick={handleClose} />
          </span>
          <Ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">News & Analysis</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <DrawerIcons>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </DrawerIcons>
            </li>
            <li>
              <Drawerbase>
                <div>Copyrigth</div>
                <div>Terms</div>
                <div>Privacy</div>
                <div>Security</div>
              </Drawerbase>
            </li>
          </Ul>
          <DrawerLogo>
            <DrawerLogoIcon />
            <span>Tangl</span>
          </DrawerLogo>
        </Drawer>
        <Wrapper onClick={handleClose}>
          <LogoContainer>
            <NavTwoLogo/>
            <LogoTitle>Tangl</LogoTitle>
          </LogoContainer>
          <Navlist>
            <li>
              <Link href={"/About"}>
                <NavLink>About</NavLink>
              </Link>
            </li>
            <li>
              <Link href={"/Pricing"}>
                <NavLink>Pricing</NavLink>
              </Link>
            </li>
            <li>
              <Link href={"/News"}>
                <NavLink>News & Analysis</NavLink>
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
            <BarIconTwo onClick={handleOpen} />
          </DropBar>
        </NavButtons>
      </NavTwoContainer>
    );
  };
  
  export default NavBarTwo;
  