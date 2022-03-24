import { CircleIcon } from "../Icons";
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
            <h3>Title</h3>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
          </TitleWrap>
          <TitleWrap>
            <h3>Title</h3>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
          </TitleWrap>
          <TitleWrap>
            <h3>Title</h3>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
            <p>Something</p>
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
          <IconBox></IconBox>

          <IconBox></IconBox>

          <IconBox></IconBox>

          <IconBox></IconBox>

          <IconBox></IconBox>
        </BaseIcons>
      </BaseContainer>
    </FooterContainer>
  );
};

export default Footer;
