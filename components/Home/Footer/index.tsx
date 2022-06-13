import { CircleIcon } from "../Assets/Icons";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../Assets/Icons/SocialIcons";
import {
  BaseContainer,
  BaseIcons,
  BaseText,
  FooterContainer,
  HeadWrap,
  IconBox,
  TanglWrap,
  TitleWrap,
  Wrapper,
} from "./styles";

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
          <p>Copyright</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Security</p>
        </BaseText>
        <BaseIcons>
          <FacebookIcon/>

          <TwitterIcon/>

          <InstagramIcon/>

          <LinkedInIcon/>
        </BaseIcons>
      </BaseContainer>
    </FooterContainer>
  );
};

export default Footer;
