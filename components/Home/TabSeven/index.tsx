import { ApplyButton } from "../Assets/Buttons";
import { FlexWrap, Image, TextBody, TextTitle } from "../Assets/Common";
import { CircleIcon } from "../Assets/Icons";
import { IconText, OfferButton, TabSevenContainer } from "./styles";
import Image6 from "../Assets/Images/image6.png";

const TabSeven = () => {
  return (
    <TabSevenContainer>
      <FlexWrap display="both" padding="5rem 2.5rem 5rem 0rem">
        <OfferButton>Exclusive Offer</OfferButton>
        <TextTitle>
          <CircleIcon />
          <IconText>Extra benefits...</IconText>
        </TextTitle>
        <TextBody>
          Gain access to our luxury, lifestyle and travel concierge partners to
          enjoy yourself whilst being a member.
        </TextBody>
        <ApplyButton text="Become a partner" />
      </FlexWrap>
      <FlexWrap display="desktop">
        <Image src={Image6.src} />
      </FlexWrap>
      <FlexWrap display="mobile">
        <Image src={Image6.src} />
      </FlexWrap>
    </TabSevenContainer>
  );
};

export default TabSeven;
