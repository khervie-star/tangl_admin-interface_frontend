import { ApplyButton } from "../Assets/Buttons";
import { FlexWrap, Image, TextBody, TextTitle } from "../Assets/Common";
import { CircleIcon } from "../Assets/Icons";
import { Benefits, IconText, OfferButton, TabSevenContainer } from "./styles";
import Image6 from "../Assets/Images/image6.png";
import { useState } from "react";
import { InView } from "react-intersection-observer";

const TabSeven = () => {
  const [view, setView] = useState(false);
  return (
    <InView triggerOnce={true} threshold={0} onChange={setView}>
      {({ ref, inView }) => (
        <TabSevenContainer ref={ref}>
          {inView && (
            <>
              <FlexWrap display="both" padding="5rem 2.5rem 5rem 0rem">
                <OfferButton>Exclusive Offer</OfferButton>
                <Benefits>
                  <CircleIcon />
                  <TextTitle>
                    <IconText>Extra benefits...</IconText>
                  </TextTitle>
                </Benefits>
                <TextBody>
                  Gain access to our luxury, lifestyle and travel concierge
                  partners to enjoy yourself whilst being a member.
                </TextBody>
                <ApplyButton text="Become a partner" />
              </FlexWrap>
              <FlexWrap display="desktop">
                <Image src={Image6.src} />
              </FlexWrap>
              <FlexWrap display="mobile">
                <Image src={Image6.src} />
              </FlexWrap>
            </>
          )}
        </TabSevenContainer>
      )}
    </InView>
  );
};

export default TabSeven;
