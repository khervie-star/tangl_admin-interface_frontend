import Router from "next/router";
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderText,
  Flex,
  HeaderButton,
} from "./styles";

const Header = () => {
  const handleClick = () => {
    Router.push("/Investor/Onbooarding");
  };

  const joinWaitinglist = () => {
    Router.push("/waitlist");
  };
  return (
    <HeaderWrapper>
      <HeaderTitle>
        Gain systematic access to investment opportunities
      </HeaderTitle>
      <HeaderText>
        Smart connections between Top-Tier Venture Capital, Private Equity funds
        and Real Estate Asset classes, for Global investors.
      </HeaderText>
      <Flex>
        <HeaderButton onClick={joinWaitinglist}>
          Apply for membership
        </HeaderButton>
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;
