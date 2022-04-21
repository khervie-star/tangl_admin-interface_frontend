import { ApplyButton } from "../Assets/Buttons";
import {
  FlexWrap,
  Image,
  List,
  ListText,
  TextBody,
  TextTitle,
} from "../Assets/Common";
import { ListTag } from "../Assets/Icons";
import { TabNineContainer } from "./styles";
import Image7 from "../Assets/Images/image7.png";

const TabNine = () => {
  return (
    <TabNineContainer>
      <FlexWrap display="both" padding="0rem 2.5rem 0rem 0rem" flexPercentage="50%">
        <TextTitle>What we look for in our startups</TextTitle>
        <TextBody>
          We pride ourselves in being sector agnostic, we look to back startups
          disrupting industries.
        </TextBody>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>Seed, Pre-seed and Series A startups</ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>Raising £100K-£5M</ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>High Total addressable market</ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            Well defined Go-to-market strategy and are close to achieving
            product market fit
          </ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            Based in the UK or Europe or looking to penetrate the UK market
          </ListText>
        </List>
        <ApplyButton text="Fund your startup" />
      </FlexWrap>
      <FlexWrap display="both" padding="0rem 0rem 0rem 2.5rem" flexPercentage="45%">
        <Image src={Image7.src} />
      </FlexWrap>
    </TabNineContainer>
  );
};

export default TabNine;
