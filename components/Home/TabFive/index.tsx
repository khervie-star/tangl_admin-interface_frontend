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

const TabFive = () => {
  return (
    <TabFiveContainer>
      <TextContainer>
        <TextTitle>... and startups too</TextTitle>
        <TextWrap>
          <FlexWrap
            display="desktop"
            flexPercentage="50%"
            padding="0rem 2.5rem 0rem 0rem"
          >
            <List>
              <div>
                <ListTag />
              </div>
              <ListText>Digitised Cap table management</ListText>
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
              <ListText>Digital solutions to manage funding rounds</ListText>
            </List>
          </FlexWrap>
          <FlexWrap display="desktop" flexPercentage="50%">
            <List>
              <div>
                <ListTag />
              </div>
              <ListText>Fund raising support</ListText>
            </List>
            <List>
              <div>
                <ListTag />
              </div>
              <ListText>Funding round data management via data rooms</ListText>
            </List>
            <List>
              <div>
                <ListTag />
              </div>
              <ListText>
                Funding round marketing to global investor community
              </ListText>
            </List>
          </FlexWrap>
          <FlexWrap display="mobile" flexPercentage="50%">
            <List>
              <div>
                <ListTag />
              </div>
              <ListText>Digitised Cap table management</ListText>
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
              <ListText>Digital solutions to manage funding rounds</ListText>
            </List>
            <List>
              <div>
                <ListTag />
              </div>
              <ListText>Fund raising support</ListText>
            </List>
            <List>
              <div>
                <ListTag />
              </div>
              <ListText>Funding round data management via data rooms</ListText>
            </List>
            <List>
              <div>
                <ListTag />
              </div>
              <ListText>
                Funding round marketing to global investor community
              </ListText>
            </List>
          </FlexWrap>
        </TextWrap>
        <ApplyButton text="Become an investor" />
      </TextContainer>
      <BoxWrap>
        <FlexWrap display="desktop">
          <Box height="28.94rem" margin="9.25rem 1.6rem 0rem 0rem"></Box>
        </FlexWrap>
        <FlexWrap display="desktop">
          <Box height="32.38rem" margin="0rem 0rem 0rem 1.6rem"></Box>
        </FlexWrap>
      </BoxWrap>
      <FlexWrap display="mobile">
        <Box height="13.375rem" margin="0rem 2.125rem 2.25rem 0rem"></Box>
      </FlexWrap>
      <FlexWrap display="mobile">
        <Box height="15rem" margin="0rem 0rem 0rem 2.125rem"></Box>
      </FlexWrap>
    </TabFiveContainer>
  );
};

export default TabFive;
