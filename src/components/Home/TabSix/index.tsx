import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap, TextBody, TextTitle } from "../Assets/Common";
import { BoxText, TabSixContainer } from "./styles";

const TabSix = () => {
  return (
    <TabSixContainer>
      <FlexWrap>
        <Box height="30.13rem">
          <BoxText>
            {
              "Register --> Verify --> View selection of investment opportunities --> Invest --> Investment management --> Secondary market "
            }
          </BoxText>
        </Box>
      </FlexWrap>
      <FlexWrap padding="7.72rem 0rem 7.72rem 5rem">
        <TextTitle>Start investing securely</TextTitle>
        <TextBody margin="2.5rem 0rem 2.5rem 0rem">
          Our diverse group of placement agents source deals and carry out due
          diligence on all prospective investments.
        </TextBody>
        <ApplyButton text="Do Something" />
      </FlexWrap>
    </TabSixContainer>
  );
};

export default TabSix;
