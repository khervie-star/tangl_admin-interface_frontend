import styled from "styled-components";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const OrgNav = () => {
    return (
      <NavContainer>
        <div>
          <SideBar />
        </div>
        <Div>
          <TopBar />
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