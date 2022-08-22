import { ApplyButton } from "../Assets/Buttons";
import { FlexWrap, Image, TextBody, TextTitle } from "../Assets/Common";
import { TabSixContainer } from "./styles";
import Image5 from "../Assets/Images/image5.png";
import { useState } from "react";
import { InView } from "react-intersection-observer";

const TabSix = () => {
  const [view, setView] = useState(false);
  return (
    <InView triggerOnce={true}  threshold={0} onChange={setView}>
      {({ ref, inView }) => (
        <TabSixContainer ref={ref}>
          {inView && (
            <>
              <FlexWrap display="both" flexPercentage="50%">
                <Image src={Image5.src} />
              </FlexWrap>
              <FlexWrap
                display="both"
                flexPercentage="50%"
                padding="0rem 0rem 0rem 5rem"
              >
                <TextTitle>
                  Take control of how you manage and interact with your assets
                </TextTitle>
                <TextBody>
                  View approved funds, access Due diligence documents and
                  Request allocation to investment fund. View your portfolio’s
                  composition and performance.
                </TextBody>
                <ApplyButton text="Become an investor" />
              </FlexWrap>
            </>
          )}
        </TabSixContainer>
      )}
    </InView>
  );
};

export default TabSix;
