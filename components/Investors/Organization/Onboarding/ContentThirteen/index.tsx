import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  financialAssetManagementMethodArray,
  financialTransactionFrequencyArray,
} from "../../../../../constants";
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

const ContentThirteen = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const [financialTransactionFrequency, setFinancialTransactionFrequency] =
    useState("");
  const [financialAssetMgmntMethod, setFinancialAssetMgmntMethod] =
    useState("");

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
        {financialAssetManagementMethodArray.map((card) => {
          return (
            <RadioContainer key={card.key}>
              <input
                type="radio"
                name="Financial Asset Mgmnt Method"
                value={financialAssetMgmntMethod}
                onChange={() => setFinancialAssetMgmntMethod(card.cardType)}
              />
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
          {financialTransactionFrequencyArray.map((card) => {
            return (
              <LabelFlex
                flexPercentage="50%"
                padding="0rem 1rem 0rem 0rem"
                key={card.key}
              >
                <RadioContainer>
                  <input
                    type="radio"
                    name="Financial Transaction
                    Frequency"
                    value={financialTransactionFrequency}
                    onChange={() =>
                      setFinancialTransactionFrequency(card.cardType)
                    }
                  />
                  <label>{card.content}</label>
                </RadioContainer>
              </LabelFlex>
            );
          })}
        </Row>
      </SelectInvestmentNature>
      <ContinueButton
        disabled={!financialTransactionFrequency || !financialAssetMgmntMethod}
      >
        Continue
      </ContinueButton>
    </form>
  );
};

export default ContentThirteen;
