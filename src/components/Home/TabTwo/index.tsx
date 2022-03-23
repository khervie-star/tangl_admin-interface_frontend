import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap, TextBody, TextTitle } from "../Assets/Common";
import { BoxWrap, TabTwoContainer, TextWrap } from "./styles";

const TabTwo = () => {
  return (
    <TabTwoContainer>
      <TextWrap>
        <TextTitle margin="0rem 2.5rem 0rem 0rem">
          We are building the Digital Home for Global Private Placements.
        </TextTitle>
        <TextBody margin="2.5rem 0rem">
          TANGL Capital Partners is a group of forward thinking entrepreneurs,
          finance professionals and legal advisors, With experience across the
          Venture Capital, Private Equity and Real Estate ecosystems. TANGL's
          digital platform puts alternative investments and private market
          strategies in the hands of high-net-worth investors and independent
          advisors. We provide the digital solutions needed for advisors, asset
          & wealth managers, private banks and fund managers to digitise their
          investment operations.
        </TextBody>
        <ApplyButton text="Become an investor" />
      </TextWrap>
      <BoxWrap>
      <FlexWrap flexPercentage="25%" ><Box height="28.94rem" margin="0rem 2.5rem 0rem 0rem"></Box></FlexWrap>
      <FlexWrap flexPercentage="75%"><Box height="60.31rem" margin="0rem 0rem 0rem 2.5rem"></Box></FlexWrap>
      </BoxWrap>    
    </TabTwoContainer>
  );
};

export default TabTwo;
