import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../LandingPages/Home/Assets/Icons/SocialIcons";
import { BarIcon, DeleteIcon, DrawerLogoIcon, Logo } from "../Nav/Icons";
import { BarIconTwo, NavTwoLogo } from "./Icons";
import {
  NavTwoContainer,
  AuthButton,
  Drawer,
  Drawerbase,
  DrawerIcons,
  DrawerLogo,
  DropBar,
  LogoContainer,
  LogoTitle,
  NavButtons,
  NavLink,
  Navlist,
  Ul,
  Wrapper,
  ListContent,
} from "./styles";

const links = [
  {
    href: "/About",
    name: "About",
  },
  {
    href: "/Pricing",
    name: "Pricing",
  },
  {
    href: "/News",
    name: "News",
  },
  {
    href: "/Contact",
    name: "Contact us",
  },
];

const NavBarTwo = () => {
  const Router = useRouter();

  const handleClick = () => {
    Router.push("/Investor/Onboarding");
  };

  const handleLogin = () => {
    Router.push("/Investor/Login");
  };

  const gotoWaitlist = () => {
    Router.push("/waitlist");
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
          <ListContent active={Router.pathname == "/"}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </ListContent>
          {links &&
            links.map((link: any, index: any) => (
              <ListContent active={Router.pathname == link.href} key={index}>
                <Link href={link.href}>
                  <a>{link.name}</a>
                </Link>
              </ListContent>
            ))}
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
          <NavTwoLogo />
          <LogoTitle>
            <Link href={"/"}>
              <a>Tangl</a>
            </Link>
          </LogoTitle>
        </LogoContainer>
        <Navlist>
          {links &&
            links.map((link: any, index: any) => (
              <ListContent active={Router.pathname == link.href} key={index}>
                <Link href={link.href}>
                  <NavLink>{link.name}</NavLink>
                </Link>
              </ListContent>
            ))}
        </Navlist>
      </Wrapper>
      <NavButtons>
        <AuthButton
          background="#011122"
          borderColor="#a0aaba"
          margin="0rem 1.25rem 0rem 0rem"
          display="desktop"
          // onClick={handleLogin}
          onClick={gotoWaitlist}
        >
          Sign in
        </AuthButton>
        <AuthButton
          background="#007afb"
          margin="0rem 0rem 0rem 1.25rem"
          display="desktop"
          // onClick={handleClick}
          onClick={gotoWaitlist}
        >
          Sign up
        </AuthButton>
        <AuthButton
          background="#007afb"
          display="mobile"
          margin="0rem 2.8rem 0rem 0rem"
          // onClick={handleClick}
          onClick={gotoWaitlist}
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
