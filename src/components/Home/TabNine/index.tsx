import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap, TextBody, TextTitle } from "../Assets/Common";
import { TabNineContainer } from "./styles";

const TabNine = () => {
  return (
    <TabNineContainer>
      <FlexWrap>
        <TextTitle margin="0rem 0rem 2.5rem 0rem">What we look for in our startups</TextTitle>
        <TextBody>
          We pride ourselves in being sector agnostic, we look to back startups
          disrupting industries.
        </TextBody>
        <TextBody>
          <ul>
            <li>Seed, Pre-seed and Series A startups.</li>
            <li>Raising £100K-£5M.</li>
            <li>High Total addressable market.</li>
            <li>
              Well defined Go-to-market strategy and are close to achieving
              product market fit.
            </li>
            <li>
              Based in the UK or Europe or looking to penetrate the UK market.
            </li>
          </ul>
        </TextBody>
        <ApplyButton text={"Fund your startup"} />
      </FlexWrap>
      <FlexWrap>
        <Box height="22.25rem" margin="5.56rem 0rem 5.56rem 5rem"></Box>
      </FlexWrap>
    </TabNineContainer>
  );
};

export default TabNine;
