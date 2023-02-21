import { FlexWrap, List } from "../Home/Assets/Common";
import { SecondaryListTag } from "../Home/Assets/Icons";
import {
  AboutBox,
  AboutFlex,
  AboutListText,
  AboutMargin,
  AboutText,
  AboutTitle,
  LenghtyTextAlert,
  ServiceButton,
  ServiceButtonContainer,
  ServiceContent,
} from "./styles";
import { useState } from "react";

const ServiceText = ({ activeText }: { activeText: string }) => {
  if (activeText === "investor") {
    return (
      <>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            We are able to act as a global distributor / sub-distributor for
            funds{" "}
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            We ensure compliance of marketing activities with local regulators
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>Selection of core investor markets</AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            Handling all Jurisdiction data requirements
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            Limited partner pre-screening and KYC onboarding
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            AML screening to ensure investor compliance with money laundering
            regulations of the jurisdiction where the entity is domiciled
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            Generation and Distribution of investor communications and other
            fund information through a secure investor portal
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            Generation of tailored investor reporting
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>Processing investor transfers</AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            Where required, we will assist with the opening of fund bank
            accounts with our partners
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            A Dedicated client manager who co-ordinates all aspects of the fund
            set up and assist with implementation of our digital solutions.
          </AboutListText>
        </List>
      </>
    );
  } else if (activeText === "individual") {
    return (
      <>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            We provide streamlined access to fund allocations and investment
            vehicles
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            Access to privately issued equity or debt securities
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            Access to Private capital pools for Providing liquidity to Private
            Debt funds
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            Access to asset collateralised Property bonds
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>Allocations to pre-IPO equity sales</AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            And a well-rounded selection of investment opportunities to benefit
            from portfolio diversification
          </AboutListText>
        </List>
      </>
    );
  } else {
    return (
      <>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>Funding support</AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>Business development advisory Services</AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>Business development advisory Services</AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            Strategic mergers and acquisition opportunities and exit advisory
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            Technology Partners and developer team placements
          </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>Talent acquisition services </AboutListText>
        </List>
        <List>
          <div>
            <SecondaryListTag />
          </div>
          <AboutListText>
            In-person pitch and networking events to leverage our investor base
          </AboutListText>
        </List>
      </>
    );
  }
};

const AboutService = () => {
  const [activeText, setActiveText] = useState("investor");
  const handleActiveButton = (text: string) => {
    setActiveText(text);
  };

  return (
    <>
      <AboutMargin>
        <ServiceContent>
          <LenghtyTextAlert>SERVICES</LenghtyTextAlert>
          <AboutTitle>
            We cater to private investors, investment firms and startups
          </AboutTitle>
          <AboutText>
            Learn more about our services for each group by interacting with the
            buttons below.
          </AboutText>
        </ServiceContent>
      </AboutMargin>
      <AboutFlex>
        <FlexWrap
          display="both"
          flexPercentage="40%"
          padding="0rem 2.5rem 0rem 0rem"
        >
          <AboutBox>
            <ServiceButtonContainer>
              <ServiceButton
                active={activeText === "investor" && true}
                onClick={() => handleActiveButton("investor")}
              >
                Investment Firms
              </ServiceButton>
              <ServiceButton
                active={activeText === "individual" && true}
                onClick={() => handleActiveButton("individual")}
              >
                Individual Investors
              </ServiceButton>
              <ServiceButton
                active={activeText === "startup" && true}
                onClick={() => handleActiveButton("startup")}
              >
                Startups
              </ServiceButton>
            </ServiceButtonContainer>
          </AboutBox>
        </FlexWrap>
        <FlexWrap
          display="both"
          flexPercentage="60%"
          padding="0rem 0rem 0rem 2.5rem"
        >
          <ServiceText activeText={activeText} />
        </FlexWrap>
      </AboutFlex>
    </>
  );
};

export default AboutService;
