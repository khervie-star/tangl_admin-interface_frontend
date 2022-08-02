import { ApplyButton } from "../Assets/Buttons";
import { FlexWrap, Image, List, ListText, TextTitle } from "../Assets/Common";
import { ListTag } from "../Assets/Icons";
import { TabThreeContainer } from "./styles";
import Image3 from "../Assets/Images/image3.png";

const TabThree = () => {
  return (
    <TabThreeContainer>
      <FlexWrap display="both" flexPercentage="55%">
        <TextTitle>
          Supporting Private Market Investors and Emerging Managers
        </TextTitle>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            TANGL Capital Partners is a group of forward thinking entrepreneurs,
            finance professionals and legal advisors, With experience across the
            Venture Capital, Private Equity and Real Estate ecosystems.
          </ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            TANGL&apos;s digital platform puts alternative investments and private
            market strategies in the hands of high-net-worth investors and
            independent advisors.
          </ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            We provide the digital solutions needed for advisors, asset & wealth
            managers, private banks and fund managers to digitise their
            investment operations.
          </ListText>
        </List>
        <ApplyButton text="Create Admin account" />
      </FlexWrap>
      <FlexWrap display="both" flexPercentage="40%">
        <Image src={Image3.src} />
      </FlexWrap>
    </TabThreeContainer>
  );
};

export default TabThree;