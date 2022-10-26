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
} from "./styles";
import AboutImage1 from "./Images/aboutimage1.png";
import AboutImage2 from "./Images/aboutimage2.png";
import { ApplyButton } from "../Home/Assets/Buttons";
const AboutContent = () => {
  return (
    <AboutContainer>
      <Heading>
        <h1>About</h1>
        <p>We are building the Digital Home for Global Private Placements.</p>
      </Heading>
      <AboutMargin>
        <AboutTitle>How we do it</AboutTitle>
        <List>
          <div>
            <ListTag />
          </div>
          <AboutListText>
            We are a Private Placements firm serving our clients with capital
            raising & fund distribution services, whilst providing our
            High-Net-Worth clients with systematic access to investment
            opportunities, by providing them with allocations to top tier
            preforming Private Equity & Venture Capital funds and Real Estate
            investment opportunities through our digital investment platform.
            Our Experience and professional network within the Private Equity,
            Venture Capital and Real estate industries allows us to partake in
            conversations with industry professionals and start up founders at
            various stages of their business Lifecyle, and support founders with
            access to funding and ancillary services. Our team liaises with all
            industry participants to create a selection of prospectus investment
            vehicles, we partner with Top-Tier investment firms and provide
            coverage of EMEA operating funds and leverage our regional network
            within Africa to be able to facilitate an investors allocation to
            African domiciled and Emerging markets focussed investment vehicles
            and Real estate projects.
            <p>
              Our strategic relationship with financial institutions allows us
              to merge capital with effective expertise and introduce an
              infrastructure layer for emerging markets to benefit from the ease
              of inflows through FDIs and mainly FPIs (Foreign portfolio
              investments) via our technology solution, something we are
              personally passionate about.
            </p>
          </AboutListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <AboutListText>
            Our team liaises with all industry participants to create a
            selection of prospectus companies, we partner with Top-Tier
            investment firms and support founders with access to funding and
            ancillary services.
          </AboutListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <AboutListText>
            Our strategic relationships with financial institutions allows us to
            merge capital with effective expertise.
          </AboutListText>
        </List>
      </AboutMargin>
      <AboutMargin>
        <AboutTitle>How we do it</AboutTitle>
        <List>
          <div>
            <ListTag />
          </div>
          <AboutListText>
            Our Experience and professional network within the Private Equity,
            Venture Capital and Real estate industries allows us to partake in
            conversations with industry professionals and start up founders at
            various stages of their business Lifecyle.
          </AboutListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <AboutListText>
            Our team liaises with all industry participants to create a
            selection of prospectus companies, we partner with Top-Tier
            investment firms and support founders with access to funding and
            ancillary services.
          </AboutListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <AboutListText>
            Our strategic relationships with financial institutions allows us to
            merge capital with effective expertise.
          </AboutListText>
        </List>
      </AboutMargin>
      <AboutFlex>
        <FlexWrap display="both" flexPercentage="50%">
          <Image src={AboutImage2.src} />
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
