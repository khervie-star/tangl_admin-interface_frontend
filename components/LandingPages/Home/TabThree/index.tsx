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
import { TabThreeContainer } from "./styles";
import Image3 from "../Assets/Images/image3.png";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const TabThree = () => {
  const [view, setView] = useState(false);
  return (
    <InView triggerOnce={true} threshold={0} onChange={setView}>
      {({ ref, inView }) => (
        <TabThreeContainer inView={inView} ref={ref}>
          <>
            <FlexWrap
              display="both"
              flexPercentage="50%"
              padding="0rem 2.5rem 0rem 0rem"
            >
              <TextTitle>
                Supporting Private Market Investors and Emerging Managers
              </TextTitle>
              <TextBody>
                We provide the digital solutions needed for asset & wealth
                managers, private banks and fund managers to digitise their
                investment operations.
              </TextBody>
              <ApplyButton text="Create Admin account" />
            </FlexWrap>
            <FlexWrap
              display="both"
              flexPercentage="50%"
              padding="0rem 0rem 0rem 2.5rem"
            >
              <Image src={Image3.src} />
            </FlexWrap>
          </>
        </TabThreeContainer>
      )}
    </InView>
  );
};

export default TabThree;
