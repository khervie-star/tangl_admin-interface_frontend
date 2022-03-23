import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap } from "../Assets/Common";
import {
  ListTag,
  TabEightContainer,
  TextBodyEight,
  TextTitleEight,
  TextWrap,
} from "./styles";

const TabEight = () => {
  return (
    <TabEightContainer>
      <FlexWrap display="desktop">
        <Box height="22.25rem" margin="8.56rem 5rem 8.56rem 0rem"></Box>
      </FlexWrap>
      <FlexWrap display="desktop">
        <TextTitleEight display="desktop">How We Do It</TextTitleEight>
        <TextWrap>
          <div>
            <ListTag />
          </div>
          <TextBodyEight display="desktop">
            Our Experience and professional network within the Private Equity,
            Venture Capital and Real estate industries allows us to partake in
            conversations with industry professionals and start up founders at
            various stages of their business Lifecyle.
          </TextBodyEight>
        </TextWrap>
        <TextWrap>
          <div>
            <ListTag />
          </div>
          <TextBodyEight display="desktop">
            Our team liaises with all industry participants to create a
            selection of prospectus companies, we partner with Top-Tier
            investment firms and support founders with access to funding and
            ancillary services.
          </TextBodyEight>
        </TextWrap>
        <TextWrap>
          <div>
            <ListTag />
          </div>

          <TextBodyEight display="desktop">
            Our strategic relationships with financial institutions allows us to
            merge capital with effective expertise.
          </TextBodyEight>
        </TextWrap>
        <ApplyButton text="Join Us" />
      </FlexWrap>
      <FlexWrap display="mobile">
        <TextTitleEight display="mobile">How We Do It</TextTitleEight>
        <TextBodyEight display="mobile">
          <p>
            Our Experience and professional network within the Venture Capital
            ecosystem and Real estate industry allows us to partake in
            conversations with Founders at various stages of their business
            Lifecyle.
          </p>
          <p>
            Our team liaises with all parties to create a selection of
            prospectus companies, we support founders with access to funding and
            ancillary services.
          </p>
          <p>
            Our strategic relationship with financial institutions allows us to
            partake in the disposition and turnaround of brick-and-mortar assets
            allowing us merge equity and expertise in our development
            endeavours.
          </p>
        </TextBodyEight>
        <ApplyButton text="Join Us" />
      </FlexWrap>
      <FlexWrap display="mobile">
        <Box height="13.75rem" margin="1.5rem 0rem 0rem 0rem"></Box>
      </FlexWrap>
    </TabEightContainer>
  );
};

export default TabEight;
