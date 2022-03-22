import { TextBody, TextTitle } from "../Assets/Common";
import {
  BarWrapper,
  ButtonFlex,
  OtherButton,
  TabElevenContainer,
} from "./styles";

const TabEleven = () => {
  return (
    <TabElevenContainer>
      <BarWrapper>
        <TextTitle textAlign="center">Ready to get started?</TextTitle>
        <TextBody textAlign="center" margin="2.5rem 0rem">
          Smart connections between Startups, Venture Capital and Real Estate
          Asset classes
        </TextBody>
        <ButtonFlex>
          <OtherButton background="#007AFB">Become a partner</OtherButton>
          <OtherButton
            background="#011122"
            borderColor="#A0AABA"
            marginLeft="24px"
          >
            Apply for funding
          </OtherButton>
        </ButtonFlex>
      </BarWrapper>
    </TabElevenContainer>
  );
};

export default TabEleven;
