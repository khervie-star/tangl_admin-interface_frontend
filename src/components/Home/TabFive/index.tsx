import { Box, FlexWrap, TextBody, TextTitle } from "../Assets/Common";
import { BoxWrap, TabFiveContainer, TextFlex, TextWrapper } from "./styles";

const TabFive = () => {
  return (
    <TabFiveContainer>
      <TextWrapper>
        <TextTitle margin="0.67rem 0rem 2.5rem 0rem">... and startups too</TextTitle>
        <TextBody>
          <TextFlex>
            <FlexWrap>
              <li>Digital solutions to manage funding rounds</li>
              <li>Fund raising support</li>
              <li>Funding round data management via data rooms</li>
              <li>Funding round marketing to global investor community</li>
            </FlexWrap>
            <FlexWrap padding="0rem 0rem 0rem 2.5rem">
              <li>Digitised Cap table management</li>
              <li>
                Self-custody of equity stake for team members in secure digital
                wallet.
              </li>
            </FlexWrap>
          </TextFlex>
        </TextBody>
      </TextWrapper>
      <BoxWrap>
          <FlexWrap>
              <Box height="28.94rem" margin="9.25rem 1.6rem 0rem 0rem"></Box>
          </FlexWrap>
          <FlexWrap>
              <Box height="32.38rem" margin="0rem 0rem 0rem 1.6rem"></Box>
          </FlexWrap>
      </BoxWrap>
    </TabFiveContainer>
  );
};

export default TabFive;
