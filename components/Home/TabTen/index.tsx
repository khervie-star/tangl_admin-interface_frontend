import { ApplyButton } from "../Assets/Buttons";
import {
  FlexWrap,
  Image,
  List,
  ListText,
  TextBody,
  TextTitle,
} from "../Assets/Common";
import { ListTag } from "../Assets/Icons";
import { TabTenContainer } from "./styles";
import Image8 from "../Assets/Images/image8.png";

const TabTen = () => {
  return (
    <TabTenContainer>
      <FlexWrap
        display="both"
        padding="0rem 2.5rem 0rem 0rem"
        flexPercentage="40%"
      >
        <Image src={Image8.src} />
      </FlexWrap>
      <FlexWrap
        display="both"
        flexPercentage="50%"
        padding="0rem 0rem 0rem 2.5rem"
      >
        <TextTitle>What we look for in our Real Estate Investments</TextTitle>
        <TextBody>
          Our Transactions and Development team looks to partake in the
          following:
        </TextBody>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            Purchasing & Disposition of assets which have suffered from poor
            capital structures and corporate miss-management
          </ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>Land with or without planning</ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            Schemes that make use of permitted development rights
          </ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>Area regeneration schemes</ListText>
        </List>
        <TextBody>
          Unlocking the potential in these assets allows us to create affordable
          and unique luxury development schemes and actualise returns on our
          invested capital.
        </TextBody>
        <ApplyButton text="Get funded" />
      </FlexWrap>
    </TabTenContainer>
  );
};

export default TabTen;
