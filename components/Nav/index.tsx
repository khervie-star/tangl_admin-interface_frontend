import {
  Wrapper,
  LogoContainer,
  LogoTitle,
  Navlist,
  NavLink,
  NavContainer,
  NavButtons,
  AuthButton,
  DropBar,
  Ul,
  Drawerbase,
  Drawer,
  DrawerIcons,
  DrawerLogo,
  ListContent,
} from "./styles";
import Link from "next/link";
import { Logo, BarIcon, DeleteIcon, DrawerLogoIcon } from "./Icons";
import { useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../LandingPages/Home/Assets/Icons/SocialIcons";
import { useRouter } from "next/router";

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

const NavBar = () => {
  const Router = useRouter();
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
    <NavContainer>
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
          <Logo />
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
          <BarIcon onClick={handleOpen} />
        </DropBar>
      </NavButtons>
    </NavContainer>
  );
};

export default NavBar;
