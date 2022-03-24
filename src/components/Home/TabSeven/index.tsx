import { Box, FlexWrap } from "../Assets/Common";
import { IconText, OfferButton, TabSevenContainer, TextTitleSeven, TextBodySeven } from "./styles";
import { CircleIcon } from "../Icons";
import { ApplyButton } from "../Assets/Buttons";

const TabSeven = () => {
  return (
    <TabSevenContainer>
      <FlexWrap display="both" padding="5rem 2.5rem 5rem 0rem">
        <OfferButton>Exclusive Offer</OfferButton>
        <TextTitleSeven display="both" >
          <CircleIcon />
          <IconText>Extra benefits...</IconText>
        </TextTitleSeven>
        <TextBodySeven display="both">
          Gain access to our luxury, lifestyle and travel concierge partners to
          enjoy yourself whilst being a member.
        </TextBodySeven>
        <ApplyButton text="Become a partner" />
      </FlexWrap>
      <FlexWrap display="desktop">
        <Box height="26.125rem" margin="0rem 0rem 0rem 2.5rem"></Box>
      </FlexWrap>
      <FlexWrap display="mobile">
        <Box height="16.31rem" margin="1.5rem 0rem 0rem 0rem"></Box>
      </FlexWrap>
    </TabSevenContainer>
  );
};

export default TabSeven;
