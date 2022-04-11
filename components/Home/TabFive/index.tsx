import { ApplyButton } from "../Assets/Buttons";
import { FlexWrap, Image, List, ListText, TextTitle } from "../Assets/Common";
import { ListTag } from "../Assets/Icons";
import { TabFiveContainer, TextWrap } from "./styles";

const TabFive = () => {
  return (
    <TabFiveContainer>
      <div>
        <TextTitle>... and startups too</TextTitle>
        <TextWrap>
          <FlexWrap flexPercentage="50%" padding="0rem 2.5rem 0rem 0rem">
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
          <FlexWrap flexPercentage="50%">
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
      </div>
    </TabFiveContainer>
  );
};

export default TabFive;
