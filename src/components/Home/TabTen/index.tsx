import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap, TextBody, TextTitle } from "../Assets/Common";
import { TabTenContainer, TextBodyTen, TextTitleTen } from "./styles";

const TabTen = () => {
  return (
    <TabTenContainer>
      <FlexWrap display="desktop">
        <Box height="22.25rem" margin="5.56rem 5rem 5.56rem 0rem"></Box>
      </FlexWrap>
      <FlexWrap display="both">
        <TextTitleTen display="both" >What we look for in our Real Estate Investments</TextTitleTen>
        <TextBodyTen display="both">
          Our Transactions and Development team looks to partake in the
          following:
        </TextBodyTen>
        <TextBodyTen display="both">
          <ul>
            <li>
              Purchasing & Disposition of assets which have suffered from poor
              capital structures and corporate miss-management.
            </li>
            <li>Land with or without planning</li>
            <li>Schemes that make use of permitted development rights</li>
            <li>Area regeneration schemes</li>
            <li>
              Unlocking the potential in these assets allows us to create
              affordable and unique luxury development schemes and actualise
              returns on our invested capital.
            </li>
          </ul>
        </TextBodyTen>
        <ApplyButton text={"Get Funded"} />
      </FlexWrap>
      <FlexWrap display="mobile">
        <Box height="18.38rem" margin="1.5rem 0rem 0rem 0rem"></Box>
      </FlexWrap>
    </TabTenContainer>
  );
};

export default TabTen;
