import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap } from "../Assets/Common";
import {
  BoxWrap,
  TabFiveContainer,
  TextBodyFive,
  TextFlex,
  TextTitleFive,
  TextWrapper,
} from "./styles";

const TabFive = () => {
  return (
    <TabFiveContainer>
      <TextWrapper>
        <TextTitleFive display="both">... and startups too</TextTitleFive>
        <TextBodyFive display="desktop">
          <TextFlex>
            <FlexWrap display="desktop">
              <li>Digital solutions to manage funding rounds</li>
              <li>Fund raising support</li>
              <li>Funding round data management via data rooms</li>
              <li>Funding round marketing to global investor community</li>
            </FlexWrap>
            <FlexWrap display="desktop" padding="0rem 0rem 0rem 2.5rem">
              <li>Digitised Cap table management</li>
              <li>
                Self-custody of equity stake for team members in secure digital
                wallet.
              </li>
            </FlexWrap>
          </TextFlex>
        </TextBodyFive>
        <TextBodyFive display="mobile">
          <ul>
            <li>Funding support.</li>
            <li>Business development advisory Services.</li>
            <li>
              In-person pitch and networking events to leverage our investor
              base
            </li>
            <li>Technology Partners through our network.</li>
            <li>Strategic company acquisitions and exit advisory.</li>
          </ul>
        </TextBodyFive>
        <ApplyButton text="Apply for funding"/>
      </TextWrapper>
      <BoxWrap>
        <FlexWrap display="desktop">
          <Box height="28.94rem" margin="9.25rem 1.6rem 0rem 0rem"></Box>
        </FlexWrap>
        <FlexWrap display="desktop">
          <Box height="32.38rem" margin="0rem 0rem 0rem 1.6rem"></Box>
        </FlexWrap>
      </BoxWrap>
      <FlexWrap display="mobile">
        <Box height="18.38rem" margin="1.5rem 1.5rem 0rem 1.5rem"></Box>
      </FlexWrap>
    </TabFiveContainer>
  );
};

export default TabFive;
