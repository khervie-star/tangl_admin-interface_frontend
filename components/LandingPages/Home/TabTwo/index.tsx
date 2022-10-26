import { ApplyButton } from "../Assets/Buttons";
import {
  FlexWrap,
  Image,
  List,
  ListText,
  TextBodyDark,
  TextTitle,
  TextTitleDark,
} from "../Assets/Common";
import { BaseWrap, HeadWrap, TabTwoContainer } from "./styles";
import Image1 from "../Assets/Images/image1.png";
import { useState } from "react";

const TabTwo = () => {
  const [view, setView] = useState(false);
  return (
    <TabTwoContainer>
      <FlexWrap
        display="both"
        flexPercentage="50%"
        padding="0rem 2.5rem 0rem 0rem"
      >
        <Image src={Image1.src} />
      </FlexWrap>
      <FlexWrap
        display="both"
        flexPercentage="50%"
        padding="0rem 0rem 0rem 2.5rem"
      >
        <TextTitleDark>
          We are building the Digital Home for Global Private Placements.
        </TextTitleDark>

        <TextBodyDark>
          TANGL&apos;s digital platform puts alternative investments and private
          market strategies in the hands of high-net-worth investors and
          independent financial advisors (IFAs).
        </TextBodyDark>

        <ApplyButton text="Become an investor"></ApplyButton>
      </FlexWrap>
    </TabTwoContainer>
  );
};

export default TabTwo;
