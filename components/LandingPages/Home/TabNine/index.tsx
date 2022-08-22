import { LogBox, LogCard, LogText, TabNineContainer } from "./styles";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const TabNine = () => {
  const [view, setView] = useState(false);
  return (
    <InView triggerOnce={true}  threshold={0} onChange={setView}>
      {({ ref, inView }) => (
        <TabNineContainer ref={ref}>
          {inView && (
            <>
              <LogCard>
                <LogBox />
                <LogText>Create an account or login</LogText>
              </LogCard>
              <HiOutlineArrowNarrowRight />
              <LogCard>
                <LogBox />
                <LogText>Verify your credentials</LogText>
              </LogCard>
              <HiOutlineArrowNarrowRight />
              <LogCard>
                <LogBox />
                <LogText>Initiate funding round</LogText>
              </LogCard>
            </>
          )}
        </TabNineContainer>
      )}
    </InView>
  );
};

export default TabNine;
