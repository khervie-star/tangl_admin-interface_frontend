import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap} from "../Assets/Common";
import { TabNineContainer, TextTitleNine, TextBodyNine } from "./styles";

const TabNine = () => {
  return (
    <TabNineContainer>
      <FlexWrap display="both">
        <TextTitleNine display="both">What we look for in our startups</TextTitleNine>
        <TextBodyNine display="both">
          We pride ourselves in being sector agnostic, we look to back startups
          disrupting industries.
        </TextBodyNine>
        <TextBodyNine display="both">
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
        </TextBodyNine>
        <ApplyButton text={"Fund your startup"} />
      </FlexWrap>
      <FlexWrap display="desktop">
        <Box height="22.25rem" margin="3.44rem 0rem 3.44rem 5rem"></Box>
      </FlexWrap>
      <FlexWrap display="mobile">
        <Box height="18.38rem" margin="1.5rem 0rem 0rem 0rem"></Box>
      </FlexWrap>
    </TabNineContainer>
  );
};

export default TabNine;
