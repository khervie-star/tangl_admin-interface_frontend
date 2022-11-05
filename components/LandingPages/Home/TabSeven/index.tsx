import { ApplyButton } from "../Assets/Buttons";
import { FlexWrap, Image, TextBody, TextTitle } from "../Assets/Common";
import { CircleIcon } from "../Assets/Icons";
import {
  Benefits,
  IconText,
  OfferButton,
  TabSevenContainer,
  TabSevenWrapper,
} from "./styles";
import Image6 from "../Assets/Images/image6.png";

const TabSeven = () => {
  return (
    <TabSevenContainer>
      <TabSevenWrapper>
        <FlexWrap display="both" padding="5rem 2.5rem 5rem 0rem">
          <OfferButton>Exclusive Offer</OfferButton>
          <Benefits>
            <CircleIcon />
            <TextTitle>
              <IconText>Extra benefits...</IconText>
            </TextTitle>
          </Benefits>
          <TextBody>
            Gain access to our luxury, lifestyle and travel concierge partners
            to enjoy yourself whilst being a member.
          </TextBody>
          <ApplyButton text="Become a partner" />
        </FlexWrap>
        <FlexWrap display="desktop" padding="5rem 0rem 5rem 2.5rem">
          <Image src={Image6.src} />
        </FlexWrap>
        <FlexWrap display="mobile">
          <Image src={Image6.src} />
        </FlexWrap>
      </TabSevenWrapper>
    </TabSevenContainer>
  );
};

export default TabSeven;
