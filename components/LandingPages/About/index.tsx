import { FlexWrap, Image, List } from "../Home/Assets/Common";
import { ListTag } from "../Home/Assets/Icons";
import {
  AboutContainer,
  AboutFlex,
  AboutListText,
  AboutMargin,
  AboutText,
  AboutTitle,
  Heading,
  LenghtyTextAlert,
  TanglLogoBox,
} from "./styles";
import AboutImage1 from "./Images/aboutimage1.png";
import AboutImage2 from "./Images/aboutimage2.png";
import TanglBackground from "./Images/tangl.png";
import { ApplyButton } from "../Home/Assets/Buttons";
import AboutService from "./service";
const AboutContent = () => {
  return (
    <AboutContainer>
      <Heading>
        <h1>We provide capital raising & fund distribution services</h1>
        <p>We are building the Digital Home for Global Private Placements.</p>
      </Heading>
      <AboutFlex>
        <FlexWrap
          display="both"
          flexPercentage="50%"
          padding="0rem 2.5rem 0rem 0rem"
        >
          <LenghtyTextAlert>Lengthy text alert</LenghtyTextAlert>
          <AboutTitle>About TANGL</AboutTitle>
          <AboutText>
            We are a Private Placements firm serving our clients with capital
            raising & fund distribution services, whilst providing our
            High-Net-Worth clients with systematic access to investment
            opportunities, by providing them with allocations to top tier
            preforming Private Equity & Venture Capital funds and Real Estate
            investment opportunities through our digital investment platform.
          </AboutText>
          <AboutText>
            Our Experience and professional network within the Private Equity,
            Venture Capital and Real estate industries allows us to partake in
            conversations with industry professionals and start up founders at
            various stages of their business Lifecyle, and support founders with
            access to funding and ancillary services.
          </AboutText>

          <AboutText>
            Our team liaises with all industry participants to create a
            selection of prospectus investment vehicles, we partner with
            Top-Tier investment firms and provide coverage of EMEA operating
            funds and leverage our regional network within Africa to be able to
            facilitate an investors allocation to African domiciled and Emerging
            markets focussed investment vehicles and Real estate projects
          </AboutText>

          <AboutText>
            Our strategic relationship with financial institutions allows us to
            merge capital with effective expertise and introduce an
            infrastructure layer for emerging markets to benefit from the ease
            of inflows through FDIs and mainly FPIs (Foreign portfolio
            investments) via Depositary Receipts programs and our technology
            solution.
          </AboutText>
        </FlexWrap>
        <FlexWrap
          display="both"
          flexPercentage="50%"
          padding="0rem 0rem 0rem 2.5rem"
        >
          <TanglLogoBox>
            <img src={TanglBackground.src} />
          </TanglLogoBox>
        </FlexWrap>
      </AboutFlex>
      <AboutService />
      <AboutMargin>
        <AboutTitle>Digital Private Placement</AboutTitle>
        <AboutText>
          For Financial institutions and innovative Companies looking to utilise
          the Benefits of Tokenisation and Distributed ledger technology we
          specialise in offer a range of Services including Compliant Security
          Token issuance, corporate action and Investment advisory pertaining to
          Security Token issuance and listing, investment Offering due
          diligence, White paper creation and investment prospectus Distribution
          through our network.
        </AboutText>
        <AboutText>
          Through our wholly owned subsidiary TANGL Tech, we offer technical
          support and an all-inclusive issuance and investor relations platform
          to support our clients with their Security Token Lifecyle from
          distribution, investor onboarding, Token minting and distribution via
          our ERC compatible investor wallets, our digital solution takes care
          of all the investors access rights and Security token legality so you
          can focus on investing and producing return for investors.
        </AboutText>
      </AboutMargin>
      <AboutFlex>
        <FlexWrap display="both" flexPercentage="50%">
          <Image src={AboutImage2.src} alt="" />
        </FlexWrap>
        <FlexWrap
          display="both"
          flexPercentage="50%"
          padding="0rem 0rem 0rem 5rem"
        >
          <AboutTitle>
            What we look for in our Real Estate Investments
          </AboutTitle>
          <AboutText>
            Our Transactions and Development team looks to partake in the
            following:
          </AboutText>
          <List>
            <div>
              <ListTag />
            </div>
            <AboutListText>
              Purchasing & Disposition of assets which have suffered from poor
              capital structures and corporate miss-management
            </AboutListText>
          </List>
          <List>
            <div>
              <ListTag />
            </div>
            <AboutListText>Land with or without planning.</AboutListText>
          </List>
          <List>
            <div>
              <ListTag />
            </div>
            <AboutListText>
              Schemes that make use of permitted development rights
            </AboutListText>
          </List>
          <List>
            <div>
              <ListTag />
            </div>
            <AboutListText>Area regeneration schemes</AboutListText>
          </List>
          <AboutText>
            Unlocking the potential in these assets allows us to create
            affordable and unique luxury development schemes and actualise
            returns on our invested capital.
          </AboutText>
          <ApplyButton text="Get Funded" />
        </FlexWrap>
      </AboutFlex>
      <AboutFlex>
        <FlexWrap display="both" flexPercentage="50%">
          <AboutTitle>What we look for in our startups</AboutTitle>
          <AboutText>
            We pride ourselves in being sector agnostic, we look to back
            startups disrupting industries.
          </AboutText>
          <List>
            <div>
              <ListTag />
            </div>
            <AboutListText>Seed, Pre-seed and Series A startups.</AboutListText>
          </List>
          <List>
            <div>
              <ListTag />
            </div>
            <AboutListText>Raising £100K-£5M.</AboutListText>
          </List>
          <List>
            <div>
              <ListTag />
            </div>
            <AboutListText>High Total addressable market.</AboutListText>
          </List>
          <List>
            <div>
              <ListTag />
            </div>
            <AboutListText>
              Well defined Go-to-market strategy and are close to achieving
              product market fit.
            </AboutListText>
          </List>
          <List>
            <div>
              <ListTag />
            </div>
            <AboutListText>
              Based in the UK or Europe or looking to penetrate the UK market
            </AboutListText>
          </List>
          <ApplyButton text="Fund your Startup" />
        </FlexWrap>
        <FlexWrap
          display="both"
          flexPercentage="50%"
          padding="0rem 0rem 0rem 5rem"
        >
          <Image src={AboutImage1.src} />
        </FlexWrap>
      </AboutFlex>
    </AboutContainer>
  );
};

export default AboutContent;
