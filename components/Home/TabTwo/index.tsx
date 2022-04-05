import { ApplyButton } from "../Assets/Buttons";
import { List, ListText, TextTitle } from "../Assets/Common";
import { ListTag } from "../Assets/Icons";
import { HeadWrap, TabTwoContainer } from "./styles";

const TabTwo = () => {
  return (
    <TabTwoContainer>
      <HeadWrap>
        <TextTitle>
          We are building the Digital Home for Global Private Placements.
        </TextTitle>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            TANGL Capital Partners is a group of forward thinking entrepreneurs,
            finance professionals and legal advisors, With experience across the
            Venture Capital, Private Equity and Real Estate ecosystems.{" "}
          </ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            TANGL's digital platform puts alternative investments and private
            market strategies in the hands of high-net-worth investors and
            independent advisors.
          </ListText>
        </List>
        <List>
          <div>
            <ListTag />
          </div>
          <ListText>
            We provide the digital solutions needed for advisors, asset & wealth
            managers, private banks and fund managers to digitise their
            investment operations.
          </ListText>
        </List>
        <ApplyButton text="Become an investor"></ApplyButton>
      </HeadWrap>
    </TabTwoContainer>
  );
};

export default TabTwo;
