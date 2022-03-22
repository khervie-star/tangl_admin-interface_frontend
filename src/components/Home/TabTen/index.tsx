import { ApplyButton } from "../Assets/Buttons";
import { Box, FlexWrap, TextBody, TextTitle } from "../Assets/Common";
import { TabTenContainer } from "./styles";

const TabTen = () => {
  return (
    <TabTenContainer>
      <FlexWrap>
        <Box height="22.25rem" margin="5.56rem 5rem 5.56rem 0rem"></Box>
      </FlexWrap>
      <FlexWrap>
        <TextTitle margin="0rem 0rem 2.5rem 0rem">What we look for in our Real Estate Investments</TextTitle>
        <TextBody>
          Our Transactions and Development team looks to partake in the
          following:
        </TextBody>
        <TextBody>
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
        </TextBody>
        <ApplyButton text={"Get Funded"} />
      </FlexWrap>
    </TabTenContainer>
  );
};

export default TabTen;
