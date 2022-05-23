import Link from "next/link";
import { useState } from "react";
import Router from "next/router";
import {
  DollarIcon,
  GroupIcon,
  MailIcon,
  PowerIcon,
  SettingIcon,
  TanglIcon,
  WindowsIcon,
} from "../../Icons";
import { Control, Logo, NavLink, SideBarContainer, SideRoutes } from "./styles";

const SideBar = () => {
  const [activeRoute, setActiveRoute] = useState("");

  const handleClick = (name: string, href: string) => {
    setActiveRoute(name);
    Router.push(href);
  };
  return (
    <SideBarContainer>
      <Logo>
        <TanglIcon />
        <span>tangl</span>
      </Logo>
      <SideRoutes>
        <NavLink
          active={activeRoute === "dashboard" && true}
          onClick={() =>
            handleClick("dashboard", "/Investor/Organization/Dashboard")
          }
        >
          <WindowsIcon />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          active={activeRoute === "assets" && true}
          onClick={() => handleClick("assets", "/Investor/Organization/Assets")}
        >
          <DollarIcon />
          <span>Assets</span>
        </NavLink>

        <NavLink
          active={activeRoute === "invites" && true}
          onClick={() =>
            handleClick("invites", "")
          }
        >
          <MailIcon />
          <span>Invites</span>
        </NavLink>

        <NavLink
          active={activeRoute === "investors" && true}
          onClick={() =>
            handleClick("investors", "")
          }
        >
          <GroupIcon />
          <span>Investors</span>
        </NavLink>
      </SideRoutes>
      <Control>
        <NavLink
          active={activeRoute === "settings" && true}
          onClick={() =>
            handleClick("settings", "")
          }
        >
          <SettingIcon />
          <span>Settings</span>
        </NavLink>

        <NavLink
          active={activeRoute === "power" && true}
          onClick={() =>
            handleClick("power", "")
          }
        >
          <PowerIcon />
          <span>Log Out</span>
        </NavLink>
      </Control>
    </SideBarContainer>
  );
};

export default SideBar;
