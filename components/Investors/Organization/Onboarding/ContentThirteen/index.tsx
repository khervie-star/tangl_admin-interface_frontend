import { useDispatch, useSelector } from "react-redux";
import {
  individualFowardRoute,
  organizationBackwardRoute,
  organizationFowardRoute,
} from "../../../../../store/actions";
import { setOrganization } from "../../../../../store/actions/session";
import { RootState } from "../../../../../store/reducers";
import { ContinueButton } from "../../../Assets/Buttons";
import {
  RadioContainer,
  TextBody,
  TextTitle,
  LabelFlex,
  Row,
} from "../../../Assets/common";

import { PageBarTypes } from "../../../types";
import { CardLabel, SelectInvestmentNature } from "./styles";

const financialAssetManagementMethod = [
  {
    key: 1,
    content: "Internal management",
    cardType: "INTMGMT",
  },
  {
    key: 2,
    content: "With the advice of an authourized third party institution",
    cardType: "THIRDPARTYINST",
  },
  {
    key: 3,
    content: "By mandate(s) entrusted to a manager",
    cardType: "MANDATE",
  },
];

const financialTransactionFrequency = [
  {
    key: 1,
    content: "Daily",
    cardType: "DAILY",
  },
  {
    key: 2,
    content: "Quarterly",
    cardType: "QUARTERLY",
  },
  {
    key: 3,
    content: "Weekly",
    cardType: "WEEKLY",
  },
  {
    key: 4,
    content: "Annually",
    cardType: "ANNUALLY",
  },
  {
    key: 5,
    content: "Monthly",
    cardType: "MONTHLY",
  },

  {
    key: 6,
    content: "Punctually",
    cardType: "PUNCTUALLY",
  },
];

const ContentThirteen = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const handleSelect = (cardType: string) => {
    dispatch(setOrganization(cardType));
  };
  const handleSubmit = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextTitle>Investment Nature</TextTitle>
      <SelectInvestmentNature>
        <CardLabel>What is your financial asset management method?</CardLabel>
        {financialAssetManagementMethod.map((card) => {
          return (
            <RadioContainer key={card.key}>
              <input type="radio" name="select" value={card.cardType} />
              <label>{card.content}</label>
            </RadioContainer>
          );
        })}
      </SelectInvestmentNature>

      <SelectInvestmentNature>
        <CardLabel>
          What is your expected frequency of financials transactions?
        </CardLabel>
        <Row flexWrap="wrap">
          {financialTransactionFrequency.map((card) => {
            return (
              <LabelFlex
                flexPercentage="50%"
                padding="0rem 1rem 0rem 0rem"
                key={card.key}
              >
                <RadioContainer>
                  <input type="radio" name="select" value={card.cardType} />
                  <label>{card.content}</label>
                </RadioContainer>
              </LabelFlex>
            );
          })}
        </Row>
      </SelectInvestmentNature>
      <ContinueButton>Continue</ContinueButton>
    </form>
  );
};

export default ContentThirteen;
