import {
  BackgroundImage,
  BlobText,
  TabNineContainer,
  TextWrapper,
} from "./styles";
import { TextBody, TextTitle } from "../Assets/Common";
import BackImage from "..//Assets/Images/backImage.svg";

const TabNine = () => {
  return (
    <TabNineContainer>
      <TextWrapper>
        <BlobText>signing up is easy</BlobText>
        <TextTitle>Do you need funding for your startup?</TextTitle>
        <TextBody>
          Our platform provides opportunities to apply for funding so your real
          estate or tech startup can get the resources it needs.
        </TextBody>
      </TextWrapper>
      <BackgroundImage>
        <img src={BackImage.src} />
      </BackgroundImage>
    </TabNineContainer>
  );
};

export default TabNine;
