import { ApplyButton } from "../Assets/Buttons";
import { FlexWrap, Image, TextBody, TextTitle } from "../Assets/Common";
import { TabThreeContainer, TabThreeWrapper } from "./styles";
import Image3 from "../Assets/Images/image3.png";

const TabThree = () => {
  return (
    <TabThreeContainer>
      <TabThreeWrapper>
        <FlexWrap
          display="both"
          flexPercentage="50%"
          padding="0rem 2.5rem 0rem 0rem"
        >
          <TextTitle>
            Supporting Private Market Investors and Emerging Managers
          </TextTitle>
          <TextBody>
            We provide the digital solutions needed for asset & wealth managers,
            private banks and fund managers to digitise their investment
            operations.
          </TextBody>
          <ApplyButton text="Create Admin account" />
        </FlexWrap>
        <FlexWrap
          display="both"
          flexPercentage="50%"
          padding="0rem 0rem 0rem 2.5rem"
        >
          <Image src={Image3.src} />
        </FlexWrap>
      </TabThreeWrapper>
    </TabThreeContainer>
  );
};

export default TabThree;
