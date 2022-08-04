import { ApplyButton } from "../Assets/Buttons";
import {
  Box,
  FlexWrap,
  Image,
  List,
  ListText,
  TextTitle,
} from "../Assets/Common";
import { ListTag } from "../Assets/Icons";
import { BoxWrap, TabFiveContainer, TextContainer, TextWrap } from "./styles";
import Image10 from "../Assets/Images/image10.png";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const TabFive = () => {
  const [view, setView] = useState(false);
  return (
    <InView triggerOnce={true} delay={1000} threshold={0} onChange={setView}>
      {({ ref, inView }) => (
        <TabFiveContainer ref={ref}>
          {inView && (
            <>
              <FlexWrap display="both" flexPercentage="50%">
                <TextContainer>
                  <TextTitle>... and startups too</TextTitle>
                  <List>
                    <div>
                      <ListTag />
                    </div>
                    <ListText>
                      Digitised cap table management for staff and external
                      investors
                    </ListText>
                  </List>
                  <List>
                    <div>
                      <ListTag />
                    </div>
                    <ListText>
                      Self-custody of equity stake for team members in secure
                      digital wallet.
                    </ListText>
                  </List>
                  <List>
                    <div>
                      <ListTag />
                    </div>
                    <ListText>
                      Digital solutions to manage funding rounds.
                    </ListText>
                  </List>
                  <List>
                    <div>
                      <ListTag />
                    </div>
                    <ListText>
                      Funding round data management via our purpose built data
                      rooms.
                    </ListText>
                  </List>
                  <ApplyButton text="Apply for funding" />
                </TextContainer>
              </FlexWrap>

              <FlexWrap
                display="both"
                flexPercentage="50%"
                padding="0rem 0rem 0rem 3.125rem"
              >
                <Image src={Image10.src} />
              </FlexWrap>
            </>
          )}
        </TabFiveContainer>
      )}
    </InView>
  );
};

export default TabFive;
