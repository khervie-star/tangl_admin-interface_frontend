import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap, TextBody, TextTitle } from "../Assets/Common";
import { TabFourContainer } from "./styles";

const TabFour = () => {
  return (
    <TabFourContainer>
      <FlexWrap>
        <Box height="41.25rem"></Box>
      </FlexWrap>
      <FlexWrap padding="7.31rem 0rem 7.31rem 2.5rem">
        <TextTitle>We serve investors...</TextTitle>
        <TextBody>
          <ul>
            <li>
              With access to a curated selection of allocations to alternative
              investments & private market funds across different strategies.
            </li>
            <li>
              Direct investment opportunities into funding rounds of innovative
              market leading start-ups
            </li>
            <li>
              Meticulous due diligence carried out on prospective investments
              displayed in private data rooms.
            </li>
            <li>
              Seamless investment execution and self-custody of economic
              interest in secure digital wallet.
            </li>
          </ul>
        </TextBody>
        <ApplyButton text={"Become an investor"}/>
      </FlexWrap>
    </TabFourContainer>
  );
};

export default TabFour;
