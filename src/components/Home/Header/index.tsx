import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderText,
  Flex,
  HeaderButton,
} from "./styles";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const Break = 450;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/investors", { replace: true });
  };
  return (
    <HeaderWrapper>
      <HeaderTitle>
        Gain systematic access to investment opportunities
      </HeaderTitle>
      {width > Break ? (
        <HeaderText>
          Smart connections between Top-Tier Venture Capital, Private Equity
          funds and Real Estate Asset classes, for Global investors.
        </HeaderText>
      ) : (
        <HeaderText>
          Smart connections between Startups, Venture Capital and Real Estate
          Asset classes
        </HeaderText>
      )}
      <Flex>
        <HeaderButton onClick={handleClick}>Apply for membership</HeaderButton>
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;
