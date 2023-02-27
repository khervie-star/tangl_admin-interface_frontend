import { LandingTitle } from "../Common";
import FooterFlow from "../FooterFlow";
import {
  FooterNavContainer,
  TermFLex,
  TermText,
  TermTitle,
  TermWrapper,
} from "../Terms/styles";

const RiskContent = () => {
  return (
    <FooterNavContainer>
      <LandingTitle>Legal Documents</LandingTitle>
      <TermWrapper>
        <TermFLex flexPercentage="70%" padding="0rem 2.5rem 0rem 0rem">
          <TermTitle>Risk Warning</TermTitle>
          <TermText>
            Investing through TANGL Capital Partners involves risks, including
            illiquidity (inability to sell assets quickly or without substantial
            loss in value), lack of dividends, loss of your investment and
            dilution and it should be done only as part of a diversified
            portfolio. There is no secondary market available meaning that these
            securities are illiquid. Your capital is at risk. TANGL Capital
            Partners is targeted at investors who understand these risks and
            make their own investment decisions. TANGL Capital Partners does not
            give investment advice or provide analysis or recommendations
            regarding investment opportunities. Investments can only be made by
            members of TANGL Capital Partners on the basis of information
            provided. TANGL Capital Partners takes no responsibility for this
            information or for any recommendations, opinions or predictions.
            Please <a>click here </a> to read the full risk warning.
            <br />
            <br />
            TANGL Capital Partners is a trading name of TANGL Capital Partners
            Limited, which is currently unregulated but is seeking approved
            status from the UK Financial Conduct Authority. TANGL Capital
            Partners Limited is registered in England and Wales. Registered No.
            __________ Registered Address: _______________.
          </TermText>
        </TermFLex>
        <TermFLex flexPercentage="30%" padding="0rem 0rem 0rem 2.5rem">
          <FooterFlow />
        </TermFLex>
      </TermWrapper>
    </FooterNavContainer>
  );
};

export default RiskContent;
