import { Children } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

export type ChildType = {
  children: any;
}

const OrgNav = ({children}: ChildType) => {
    return (
      <NavContainer>
        <div>
          <SideBar />
        </div>
        <Div>
          <TopBar />
          {children}
        </Div>
      </NavContainer>
    );
  };
  
  export default OrgNav;
  
  const NavContainer = styled.div`
    display: flex;
  `;
  
  const Div = styled.div`
      width: 100%;
      box-sizing: content-box;
  `