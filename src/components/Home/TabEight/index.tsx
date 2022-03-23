import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap, TextBody, TextTitle } from "../Assets/Common";
import { ListTag, TabEightContainer, TextWrap } from "./styles";

const TabEight = () => {
  return (
    <TabEightContainer>
      <FlexWrap>
        <Box height="22.25rem" margin="8.56rem 5rem 8.56rem 0rem"></Box>
      </FlexWrap>
      <FlexWrap>
        <TextTitle>How We Do It</TextTitle>
        <TextWrap>
          <div>
            <ListTag />
          </div>
          <TextBody>
            Our Experience and professional network within the Private Equity,
            Venture Capital and Real estate industries allows us to partake in
            conversations with industry professionals and start up founders at
            various stages of their business Lifecyle.
          </TextBody>
        </TextWrap>
        <TextWrap>
          <div>
            <ListTag />
          </div>
          <TextBody>
            Our team liaises with all industry participants to create a
            selection of prospectus companies, we partner with Top-Tier
            investment firms and support founders with access to funding and
            ancillary services.
          </TextBody>
        </TextWrap>
        <TextWrap>
          <div>
            <ListTag />
          </div>

          <TextBody>
            Our strategic relationships with financial institutions allows us to
            merge capital with effective expertise.
          </TextBody>
        </TextWrap>
        <ApplyButton text="Join Us" />
      </FlexWrap>
    </TabEightContainer>
  );
};

export default TabEight;
