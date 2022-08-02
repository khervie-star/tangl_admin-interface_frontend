import { ApplyButton } from "../Assets/Buttons";
import {
  Box,
  FlexWrap,
  Image,
  List,
  ListText,
  TextTitle,
} from "../Assets/Common";
import { ListTag } from "../Assets/Icons";
import { BoxWrap, TabFiveContainer, TextContainer, TextWrap } from "./styles";
import Image10 from "../Assets/Images/image10.png";

const TabFive = () => {
  return (
    <TabFiveContainer>
      <TextContainer>
        <FlexWrap display="both" flexPercentage="50%">
          <TextTitle>... and startups too</TextTitle>
          <List>
            <div>
              <ListTag />
            </div>
            <ListText>
              Digitised cap table management for staff and external investors
            </ListText>
          </List>
          <List>
            <div>
              <ListTag />
            </div>
            <ListText>
              Self-custody of equity stake for team members in secure digital
              wallet.
            </ListText>
          </List>
          <List>
            <div>
              <ListTag />
            </div>
            <ListText>Digital solutions to manage funding rounds.</ListText>
          </List>
          <List>
            <div>
              <ListTag />
            </div>
            <ListText>
              Funding round data management via our purpose built data rooms.
            </ListText>
          </List>
        </FlexWrap>
        <FlexWrap
          display="both"
          flexPercentage="50%"
          padding="0rem 0rem 0rem 3.125rem"
        >
          <Image src={Image10.src} />
        </FlexWrap>
        <ApplyButton text="Apply for funding" />
      </TextContainer>
    </TabFiveContainer>
  );
};

export default TabFive;
