import React from "react";
import { BackTextButton, RoundedOutlinedButton } from "../assets/buttons";
import {
  Header,
  HeaderText,
  TabButton,
  TabContainer,
  TabContent,
  TabLine,
  Wrapper,
} from "./styles";
import Overview from "./Tabs/Overview";
import Investors from "./Tabs/Investors";

const AssetManagement = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (tabIndex: React.SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  return (
    <Wrapper>
      <BackTextButton>All Assets</BackTextButton>
      <Header>
        <HeaderText> Tangl Growth Fund</HeaderText>
        <RoundedOutlinedButton>View Fund Information</RoundedOutlinedButton>
      </Header>
      <TabContainer>
        <TabButton active={activeTab === 0} onClick={() => handleTabChange(0)}>
          Overview
        </TabButton>
        <TabButton active={activeTab === 1} onClick={() => handleTabChange(1)}>
          Share Classes
        </TabButton>
        <TabButton active={activeTab === 2} onClick={() => handleTabChange(2)}>
          Investors
        </TabButton>
        <TabLine activeTab={activeTab} />
      </TabContainer>
      <TabContent>
        {activeTab === 0 && <Overview />}
        {activeTab === 1 && <Investors />}
        {activeTab === 2 && <Investors />}
      </TabContent>
    </Wrapper>
  );
};

export default AssetManagement;
