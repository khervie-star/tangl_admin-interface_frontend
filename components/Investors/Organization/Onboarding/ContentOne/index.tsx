import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { CardLabel, SelectAdmin } from "./styles";

const selectCards = [
  {
    key: 1,
    content: "Startup",
    cardType: "STARTUP",
  },
  {
    key: 2,
    content: "Real Estate Firm",
    cardType: "REALFIRM",
  },
  {
    key: 3,
    content: "Private Equity Firm",
    cardType: "PRIFIRM",
  },
  {
    key: 4,
    content: "Venture Capital Firm",
    cardType: "VENTFIRM",
  },
  {
    key: 5,
    content: "Special Purpose Investment Vehicle",
    cardType: "SPECINV",
  },
];

const ContentOne = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  const handleSelect = (cardType: string) => {
    // dispatch(setOrganization(cardType));
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch(setOrganization(e.target.value));
    setDisabled(false);
  };

  const handleSubmit = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextTitle>Choose Admin Type</TextTitle>
      <TextBody>
        To begin with, kindly choose how you want to register.
      </TextBody>
      <SelectAdmin>
        <CardLabel>Admin Type</CardLabel>
        <div onChange={handleClick}>
          {selectCards.map((card) => {
            return (
              <RadioContainer key={card.key}>
                <input type="radio" name="select" value={card.cardType} />
                <label>{card.content}</label>
              </RadioContainer>
            );
          })}
        </div>
      </SelectAdmin>
      <ContinueButton disabled={disabled && true}>Continue</ContinueButton>
    </form>
  );
};

export default ContentOne;
