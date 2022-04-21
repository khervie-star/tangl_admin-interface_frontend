import { ApplyButton } from "../Assets/Buttons";
import {
  FlexWrap,
  Image,
  TextBody,
  TextTitle,
} from "../Assets/Common";
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
        <TextTitle>Start investing securely</TextTitle>
        <TextBody>
          Our diverse group of placement agents source deals and carry out due
          diligence on all prospective investments.
        </TextBody>
        <ApplyButton text="Become an investor" />
      </FlexWrap>
    </TabSixContainer>
  );
};

export default TabSix;
