import { CircleIcon } from "../Assets/Icons";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../Assets/Icons/SocialIcons";
import {
  BaseContainer,
  BaseIcons,
  BaseText,
  FooterContainer,
  HeadWrap,
  IconBox,
  RiskText,
  TanglWrap,
  TitleWrap,
  Wrapper,
} from "./styles";
import Router from "next/router";

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <TanglWrap>
          <CircleIcon />
          <span>Tangl</span>
        </TanglWrap>
        <HeadWrap>
          <TitleWrap>
            <h3>About</h3>
          </TitleWrap>
          <TitleWrap>
            <h3>Pricing</h3>
          </TitleWrap>
          <TitleWrap>
            <h3>Contact</h3>
          </TitleWrap>
        </HeadWrap>
      </Wrapper>
      <BaseContainer>
        <BaseText>
          {/* <p onClick={() => Router.push("/risk")}>Risk Warning</p> */}
          <p onClick={() => Router.push("/terms")}>Terms and Conditions</p>
          <p onClick={() => Router.push("/privacy")}>Privacy Notice</p>
          <p onClick={() => Router.push("/aml")}>AML and Sanctions Policy</p>
        </BaseText>
        <BaseIcons>
          <FacebookIcon />

          <TwitterIcon />

          <InstagramIcon />

          <LinkedInIcon />
        </BaseIcons>
      </BaseContainer>
      <RiskText>
        <p>
          Investing through TANGL Capital Partners involves risks, including
          illiquidity (inability to sell assets quickly or without substantial
          loss in value), lack of dividends, loss of your investment and
          dilution and it should be done only as part of a diversified
          portfolio. There is no secondary market available meaning that these
          securities are illiquid. Your capital is at risk. TANGL Capital
          Partners is targeted at investors who understand these risks and make
          their own investment decisions. TANGL Capital Partners does not give
          investment advice or provide analysis or recommendations regarding
          investment opportunities. Investments can only be made by members of
          TANGL Capital Partners on the basis of information provided. TANGL
          Capital Partners takes no responsibility for this information or for
          any recommendations, opinions or predictions. Please{" "}
          <a onClick={() => Router.push("/risk")}>click here </a> to read the
          full risk warning.
        </p>
        <p>
          TANGL Capital Partners is a trading name of TANGL Capital Partners
          Limited, which is currently unregulated but is seeking approved status
          from the UK Financial Conduct Authority.
          <br />
          <br />
          TANGL Capital Partners Limited is registered in England and Wales.
          <br />
          <br />
          Registered No.:
          <u>13169554</u>
          <br />
          <br />
          Registered Address:
          <u>
            YORK ECO BUSINESS CENTRE (OFFICE 12) AMY JOHNSON WAY CLIFTON
            MOOR,YORK ,ENGLAND, YO30 4AG.
          </u>
        </p>
      </RiskText>
    </FooterContainer>
  );
};

export default Footer;
