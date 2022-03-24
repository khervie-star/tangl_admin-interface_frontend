import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap } from "../Assets/Common";
import { TabFourContainer, TextBodyFour, TextTitleFour } from "./styles";

const TabFour = () => {
  return (
    <TabFourContainer>
      <FlexWrap display="desktop">
        <Box height="41.25rem"></Box>
      </FlexWrap>

      {/* Padding on this FlexWrap here is just for desktop */}
      <FlexWrap display="both" padding="7.31rem 0rem 7.31rem 2.5rem">
        <TextTitleFour display="both">We serve investors...</TextTitleFour>
        <TextBodyFour display="desktop">
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
        </TextBodyFour>
        <TextBodyFour display="mobile">
          <ul>
            <li>
              Meticulous due diligence carried out on prospective startup & Real
              Estate investments.
            </li>
            <li>Privately Curated portfolio of alternative investments.</li>
            <li>
              Tax incentive schemes for investors who support early-stage
              businesses.
            </li>
            <li>
              In-person pitch and networking events across the globe to leverage
              your membership and create new professional relationships.
            </li>
          </ul>
        </TextBodyFour>
        <ApplyButton text={"Become an investor"} />
      </FlexWrap>
      <FlexWrap display="mobile">
        <Box height="15.63rem" margin="1.5rem 0rem 0rem 0rem"></Box>
      </FlexWrap>
    </TabFourContainer>
  );
};

export default TabFour;
