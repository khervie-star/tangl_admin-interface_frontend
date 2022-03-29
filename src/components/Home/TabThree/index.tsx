import { TabThreeContainer, TextBodyThree, TextTitleThree } from "./styles";
import { Box, FlexWrap} from "../Assets/Common";
import { ApplyButton } from "../Assets/Buttons";

const TabThree = () => {
  return (
    <TabThreeContainer>
      <FlexWrap display="desktop">
        <TextTitleThree display="desktop">
          Supporting Private Market Investors and Emerging Managers
        </TextTitleThree>
        <TextBodyThree display="desktop">
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
        </TextBodyThree>
        <ApplyButton text={"Become an approved investment vehicle"} />
      </FlexWrap>
      <FlexWrap display="desktop">
        <Box height="22.25rem" margin="5.56rem 0rem 5.56rem 0rem"></Box>
      </FlexWrap>
    </TabThreeContainer>
  );
};

export default TabThree;
