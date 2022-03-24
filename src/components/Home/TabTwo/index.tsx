import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap } from "../Assets/Common";
import {
  BoxWrap,
  TabTwoContainer,
  TextBodyTwo,
  TextTitleTwo,
  TextWrap,
} from "./styles";

const TabTwo = () => {
  return (
    <TabTwoContainer>
      <TextWrap>
        <TextTitleTwo display="desktop">
          We are building the Digital Home for Global Private Placements.
        </TextTitleTwo>
        <TextTitleTwo display="mobile">Who we are</TextTitleTwo>
        <TextBodyTwo display="desktop">
          TANGL Capital Partners is a group of forward thinking entrepreneurs,
          finance professionals and legal advisors, With experience across the
          Venture Capital, Private Equity and Real Estate ecosystems. TANGL's
          digital platform puts alternative investments and private market
          strategies in the hands of high-net-worth investors and independent
          advisors. We provide the digital solutions needed for advisors, asset
          & wealth managers, private banks and fund managers to digitise their
          investment operations.
        </TextBodyTwo>
        <TextBodyTwo display="mobile">
          <p>
            TANGL Capital Partners is a group of experienced entrepreneurs,
            finance professionals and legal advisors. The experience of the team
            spans across the Venture Capital and Real estate ecosystems and
            consists of strategic partnerships with financial institutions.
          </p>
          <p>
            Our private members investment club services our relationship with
            exited venture entrepreneurs, UHNWIs, senior level executives at
            institutional firms and family offices
          </p>
        </TextBodyTwo>
        <ApplyButton text="Become an investor" />
      </TextWrap>
      <BoxWrap>
        <FlexWrap flexPercentage="25%" display="desktop">
          <Box height="28.94rem" margin="0rem 2.5rem 0rem 0rem"></Box>
        </FlexWrap>
        <FlexWrap flexPercentage="75%" display="desktop">
          <Box height="35.7rem" margin="0rem 0rem 0rem 2.5rem"></Box>
        </FlexWrap>
        <FlexWrap display="mobile">
          <Box height="13.06rem" margin="1.5rem 0rem 0rem 0rem"></Box>
        </FlexWrap>
      </BoxWrap>
    </TabTwoContainer>
  );
};

export default TabTwo;
