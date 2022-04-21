import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap, Image, List, ListText, TextTitle } from "../Assets/Common";
import { ListTag } from "../Assets/Icons";
import { TabEightContainer } from "./styles";
import Image9 from "../Assets/Images/image9.png";


const TabEight = () => {
  return (
    <TabEightContainer>
      <FlexWrap display="desktop" flexPercentage="50%">
        <Box height="22.25rem" margin="8.56rem 5rem 8.56rem 0rem"></Box>
      </FlexWrap>
      <FlexWrap
        display="both"
        flexPercentage="50%"
      >
        <TextTitle>How We Do It</TextTitle>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            Our Experience and professional network within the Private Equity,
            Venture Capital and Real estate industries allows us to partake in
            conversations with industry professionals and start up founders at
            various stages of their business Lifecyle.
          </ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            Our team liaises with all industry participants to create a
            selection of prospectus companies, we partner with Top-Tier
            investment firms and support founders with access to funding and
            ancillary services.
          </ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            Our strategic relationships with financial institutions allows us to
            merge capital with effective expertise.
          </ListText>
        </List>
        <ApplyButton text="Join the team" />
      </FlexWrap>
      <FlexWrap flexPercentage="100%" display="mobile">
        <Image src={Image9.src}/>
      </FlexWrap>
    </TabEightContainer>
  );
};

export default TabEight;
