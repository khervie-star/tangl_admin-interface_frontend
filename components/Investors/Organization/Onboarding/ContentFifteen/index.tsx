import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../hooks";
import {
  individualFowardRoute,
  organizationBackwardRoute,
  organizationFowardRoute,
} from "../../../../../store/actions";
import { setOrganization } from "../../../../../store/actions/session";
import { RootState } from "../../../../../store/reducers";
import { ContinueButton } from "../../../Assets/Buttons";
import { RadioContainer, TextBody, TextTitle } from "../../../Assets/common";

import { PageBarTypes } from "../../../types";
import { CardLabel, SelectInvestmentNature } from "./styles";

const investmentObjectivesCard = [
  {
    key: 1,
    content: "Cross currency hedging",
    cardType: "CRSSCURRHDG",
  },
  {
    key: 2,
    content: "Performance",
    cardType: "PERFORMANCE",
  },
  {
    key: 3,
    content: "Own fund Investment",
    cardType: "OWNFNDINV",
  },
];

const ContentFifteen = ({ page }: PageBarTypes) => {
  const dispatch = useAppDispatch();
  const [investmentObjectives, setInvestmentObjectives] = useState("");
  const handleSelect = (cardType: string) => {
    dispatch(setOrganization(cardType));
  };
  const handleSubmit = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextTitle>Investment Objectives</TextTitle>
      <SelectInvestmentNature>
        <CardLabel>What are your main investment objectives </CardLabel>
        {investmentObjectivesCard.map((card) => {
          return (
            <RadioContainer key={card.key}>
              <input
                type="radio"
                name="Investment Objectives"
                value={investmentObjectives}
                onChange={() => setInvestmentObjectives(card.cardType)}
              />
              <label>{card.content}</label>
            </RadioContainer>
          );
        })}
      </SelectInvestmentNature>

      <ContinueButton disabled={!investmentObjectives}>Continue</ContinueButton>
    </form>
  );
};

export default ContentFifteen;
