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
  Flex,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <HeadWrap>
        <TanglWrap>
          <CircleIcon />
          <span>Tangl</span>
        </TanglWrap>
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
      <BaseContainer>
        <BaseText>
          <p>Copyright</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Security</p>
        </BaseText>
        <BaseIcons>
          <Flex>
            <IconBox></IconBox>
          </Flex>
          <Flex>
            <IconBox></IconBox>
          </Flex>
          <Flex>
            <IconBox></IconBox>
          </Flex>
          <Flex>
            <IconBox></IconBox>
          </Flex>
          <Flex>
            <IconBox></IconBox>
          </Flex>
        </BaseIcons>
      </BaseContainer>
    </FooterContainer>
  );
};

export default Footer;
