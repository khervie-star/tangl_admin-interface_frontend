import Link from "next/link";
import {
  DollarIcon,
  GroupIcon,
  MailIcon,
  PowerIcon,
  SettingIcon,
  TanglIcon,
  WindowsIcon,
} from "../Icons";
import { Control, Logo, NavLink, SideBarContainer, SideRoutes } from "./styles";

const SideBar = () => {
  return (
    <SideBarContainer>
      <Logo>
        <TanglIcon />
        <span>tangl</span>
      </Logo>
      <SideRoutes>
        <Link href="/Investor/Organization/Dashboard">
          <NavLink>
            <WindowsIcon />
            <span>Dashboard</span>
          </NavLink>
        </Link>
        <Link href="/Investor/Assets">
          <NavLink>
            <DollarIcon />
            <span>Assets</span>
          </NavLink>
        </Link>
        <Link href="/Investor/Assets">
          <NavLink>
            <MailIcon />
            <span>Invites</span>
          </NavLink>
        </Link>
        <Link href="/Investor/Assets">
          <NavLink>
            <GroupIcon />
            <span>Investors</span>
          </NavLink>
        </Link>
      </SideRoutes>
      <Control>
        <Link href="/Investor/Assets">
          <NavLink>
            <SettingIcon />
            <span>Settings</span>
          </NavLink>
        </Link>
        <Link href="/Investor/Assets">
          <NavLink>
            <PowerIcon />
            <span>Log Out</span>
          </NavLink>
        </Link>
      </Control>
    </SideBarContainer>
  );
};

export default SideBar;
