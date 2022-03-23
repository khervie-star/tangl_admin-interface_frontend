import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap } from "../Assets/Common";
import { BoxText, TabSixContainer, TextTitleSix, TextBodySix } from "./styles";

const TabSix = () => {
  return (
    <TabSixContainer>
      <FlexWrap display="desktop">
        <Box height="30.13rem">
          <BoxText>
            {
              "Register --> Verify --> View selection of investment opportunities --> Invest --> Investment management --> Secondary market "
            }
          </BoxText>
        </Box>
      </FlexWrap>
      <FlexWrap display="both" padding="7.72rem 0rem 7.72rem 5rem">
        <TextTitleSix display="both">Start investing securely</TextTitleSix>
        <TextBodySix display="both">
          Our diverse group of placement agents source deals and carry out due
          diligence on all prospective investments.
        </TextBodySix>
        <ApplyButton text="Do Something" />
      </FlexWrap>
      <FlexWrap display="mobile">
        <Box height="18.38rem" margin="1.5rem 0rem 0rem 0rem"></Box>
      </FlexWrap>
    </TabSixContainer>
  );
};

export default TabSix;
