import { ApplyButton } from "../Assets/Buttons";
import { FlexWrap, Image, TextBody, TextTitle } from "../Assets/Common";
import { TabSixContainer } from "./styles";
import Image5 from "../Assets/Images/image5.png";

const TabSix = () => {
  return (
    <TabSixContainer>
      <FlexWrap display="both" flexPercentage="50%">
        <Image src={Image5.src} />
      </FlexWrap>
      <FlexWrap
        display="both"
        flexPercentage="50%"
        padding="0rem 0rem 0rem 5rem"
      >
        <TextTitle>
          Take control of how you manage and interact with your assets
        </TextTitle>
        <TextBody>
          View approved funds, access Due diligence documents and Request
          allocation to investment fund. View your portfolio’s composition and
          performance.
        </TextBody>
        <ApplyButton text="Become an investor" />
      </FlexWrap>
    </TabSixContainer>
  );
};

export default TabSix;
