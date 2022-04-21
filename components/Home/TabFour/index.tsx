import { ApplyButton } from "../Assets/Buttons";
import { FlexWrap, Image, List, ListText, TextTitle } from "../Assets/Common";
import { ListTag } from "../Assets/Icons";
import { TabFourContainer } from "./styles";
import Image4 from "../Assets/Images/image4.png";

const TabFour = () => {
  return (
    <TabFourContainer>
      <FlexWrap display="both" flexPercentage="50%">
        <Image src={Image4.src} />
      </FlexWrap>
      <FlexWrap display="both" flexPercentage="50%" padding="0rem 0rem 0rem 5rem">
        <TextTitle>We serve investors...</TextTitle>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            With access to a curated selection of allocations to alternative
            investments & private market funds across different strategies.
          </ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            Direct investment opportunities into funding rounds of innovative
            market leading start-ups
          </ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            Meticulous due diligence carried out on prospective investments
            displayed in private data rooms.
          </ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            Seamless investment execution and self-custody of economic interest
            in secure digital wallet.
          </ListText>
        </List>
        <ApplyButton text="Become an investor" />
      </FlexWrap>
    </TabFourContainer>
  );
};

export default TabFour;
