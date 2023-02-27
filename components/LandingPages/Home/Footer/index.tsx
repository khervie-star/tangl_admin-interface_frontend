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
          <p onClick={() => Router.push("/risk")}>Risk Warning</p>
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
    </FooterContainer>
  );
};

export default Footer;
