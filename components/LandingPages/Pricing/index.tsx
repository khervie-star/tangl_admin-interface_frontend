import { useState } from "react";
import { LandingTitle } from "../Common";
import { CheckBoxIcon } from "./Icons";
import {
  Features,
  Includes,
  PricePlan,
  Prices,
  PricingButton,
  PricingCards,
  PricingContainer,
  PricingGrid,
  TabContainer,
  Tabs,
  TabWrap,
} from "./styles";

const tabs = [
  {
    name: "Admin",
    type: "ADM",
  },
  {
    name: "Individual",
    type: "IND",
  },
];

const cards = [
  {
    plan: "Free",
    price: "0",
    description: "Free for all, no commitments, no card required",
    features: ["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"],
  },
  {
    plan: "Basic",
    price: "30",
    includes: "Everything in FREE plus:",
    description: "Standard features for everyone",
    features: ["Feature A", "Feature B", "Feature C"],
  },
  {
    plan: "Premium",
    price: "50",
    includes: "Everything in BASIC plus:",
    description: "Advanced features for pros who need more customization.",
    features: ["Feature A", "Feature B", "Feature C"],
  },
];

const PricingContent = () => {
  const [invType, setInvType] = useState("ADM");
  const handleTab = (type: string) => {
    setInvType(type);
  };

  return (
    <PricingContainer>
      <LandingTitle>Features and Pricing</LandingTitle>
      <TabWrap>
        <TabContainer>
          {tabs.map((tab, index) => (
            <Tabs
              onClick={() => handleTab(tab.type)}
              active={invType === tab.type && true}
              key={index}
            >
              {tab.name}
            </Tabs>
          ))}
        </TabContainer>
      </TabWrap>
      <PricingGrid>
        {cards.map((card, index) => (
          <PricingCards key={index}>
            <PricePlan>{card.plan}</PricePlan>
            <p>{card.description}</p>
            <span>Starts at</span>
            <Prices>
              <h1>${card.price}</h1>
              <span>per month</span>
            </Prices>
            <PricingButton>Start</PricingButton>
            {card.includes && <Includes>{card.includes}</Includes>}
            <Features>
              {card.features.map((feature, index) => (
                <li key={index}>
                  <CheckBoxIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </Features>
          </PricingCards>
        ))}
      </PricingGrid>
    </PricingContainer>
  );
};

export default PricingContent;
