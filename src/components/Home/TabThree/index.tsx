import { TabThreeContainer } from "./styles";
import { Box, FlexWrap, TextBody, TextTitle } from "../Assets/Common";
import { ApplyButton } from "../Assets/Buttons";

const TabThree = () => {
  return (
    <TabThreeContainer>
      <FlexWrap>
        <TextTitle margin="0.67rem 5rem 0.67rem 0rem">
          Supporting Private Market Investors and Emerging Managers
        </TextTitle>
        <TextBody margin="1rem 5rem 1rem 0rem">
          <ul>
            <li>
              Digital solutions to manage and issue compliant investment
              vehicles
            </li>
            <li>Automated Investor onboarding and data management</li>
            <li>Fund performance and financial reporting to LPs</li>
            <li>
              Compliance and Regulatory reporting for raising from a global
              investor base
            </li>
            <li>Fund allocation distribution and marketing.</li>
          </ul>
        </TextBody>
        <ApplyButton text={"Become an approved investment vehicle"} />
      </FlexWrap>
      <FlexWrap>
        <Box height="22.25rem" margin="5.56rem 0rem 5.56rem 0rem"></Box>
      </FlexWrap>
    </TabThreeContainer>
  );
};

export default TabThree;
