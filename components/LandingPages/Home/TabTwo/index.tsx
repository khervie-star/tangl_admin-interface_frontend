import { ApplyButton } from "../Assets/Buttons";
import { FlexWrap, Image, List, ListText, TextTitle } from "../Assets/Common";
import { ListTag } from "../Assets/Icons";
import { BaseWrap, HeadWrap, TabTwoContainer } from "./styles";
import Image1 from "../Assets/Images/image1.png";
import Image2 from "../Assets/Images/image2.png";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const TabTwo = () => {
  const [view, setView] = useState(false);
  return (
    <TabTwoContainer>
      <HeadWrap>
        <InView triggerOnce={true}  threshold={0} onChange={setView}>
          {({ ref, inView }) => (
            <div ref={ref}>
              {inView && (
                <>
                  <TextTitle>
                    We are building the Digital Home for Global Private
                    Placements.
                  </TextTitle>
                  <List>
                    <div>
                      <ListTag />
                    </div>
                    <ListText>
                      TANGL Capital Partners is a group of forward thinking
                      entrepreneurs, finance professionals and legal advisors,
                      With experience across the Venture Capital, Private Equity
                      and Real Estate ecosystems.
                    </ListText>
                  </List>
                  <List>
                    <div>
                      <ListTag />
                    </div>
                    <ListText>
                      TANGL&apos;s digital platform puts alternative investments
                      and private market strategies in the hands of
                      high-net-worth investors and independent advisors.
                    </ListText>
                  </List>
                  <List>
                    <div>
                      <ListTag />
                    </div>
                    <ListText>
                      We provide the digital solutions needed for advisors,
                      asset & wealth managers, private banks and fund managers
                      to digitise their investment operations.
                    </ListText>
                  </List>
                  <ApplyButton text="Become an investor"></ApplyButton>
                </>
              )}
            </div>
          )}
        </InView>
      </HeadWrap>
      <InView triggerOnce={true}  threshold={0} onChange={setView}>
        {({ ref, inView }) => (
          <div ref={ref}>
            {inView && (
              <BaseWrap>
                <>
                  <FlexWrap display="both" flexPercentage="25%">
                    <Image src={Image1.src} />
                  </FlexWrap>
                  <FlexWrap display="desktop" flexPercentage="75%">
                    <Image src={Image2.src} />
                  </FlexWrap>
                </>
              </BaseWrap>
            )}
          </div>
        )}
      </InView>
    </TabTwoContainer>
  );
};

export default TabTwo;
