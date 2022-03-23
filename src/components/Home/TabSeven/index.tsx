import { Box, FlexWrap, TextBody, TextTitle } from "../Assets/Common";
import { IconText, OfferButton, TabSevenContainer } from "./styles";
import { CircleIcon } from "../Icons";
import { ApplyButton } from "../Assets/Buttons";

const TabSeven = () => {
  return (
    <TabSevenContainer>
      <FlexWrap padding="5rem 2.5rem 5rem 0rem">
        <OfferButton>Exclusive Offer</OfferButton>
        <TextTitle flex="flex" alignItems="center" margin="1.5rem 0rem 0.5rem 0rem">
          <CircleIcon />
          <IconText>Extra benefits...</IconText>
        </TextTitle>
        <TextBody margin="0rem 0rem 1.5rem 0rem">
          Gain access to our luxury, lifestyle and travel concierge partners to
          enjoy yourself whilst being a member.
        </TextBody>
        <ApplyButton text="Become a partner" />
      </FlexWrap>
      <FlexWrap>
        <Box height="26.125rem" margin="0rem 0rem 0rem 2.5rem"></Box>
      </FlexWrap>
    </TabSevenContainer>
  );
};

export default TabSeven;
