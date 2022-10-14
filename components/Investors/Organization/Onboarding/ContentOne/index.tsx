import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminType } from "../../../../../constants";
import {
  individualFowardRoute,
  organizationBackwardRoute,
  organizationFowardRoute,
} from "../../../../../store/actions";
import { setAdminRegister } from "../../../../../store/actions/register";
import { setOrganization } from "../../../../../store/actions/session";
import { RootState } from "../../../../../store/reducers";
import { ContinueButton } from "../../../Assets/Buttons";
import {
  RadioContainer,
  TextBody,
  TextTitle,
  FlexItems,
  FlexText,
} from "../../../Assets/common";
import { AvatarIcon } from "../../../Assets/Icons";

import { PageBarTypes } from "../../../types";
import { CardLabel, SelectAdmin } from "./styles";

const ContentOne = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const [cardType, setCardType] = useState<string>("");

  // Get register data from root state
  const { data } = useSelector((store: RootState) => ({
    data: store.register,
  }));

  const handleSelect = async () => {
    await dispatch(setOrganization(cardType));
    if (page) dispatch(organizationFowardRoute(page));
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setCardType(e.target.value);
    // setDisabled(false);
  };

  const handleSubmit = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };
  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <TextTitle>Choose Admin Type</TextTitle>
      <TextBody>
        To begin with, kindly choose how you want to register.
      </TextBody>
      <SelectAdmin>
        <CardLabel>Admin Type</CardLabel>
        <div onChange={handleClick}>
          {adminType.map((card) => {
            return (
              <RadioContainer key={card.key}>
                <input type="radio" name="select" value={card.cardType} />
                <label>{card.content}</label>
              </RadioContainer>
            );
          })}
        </div>
      </SelectAdmin>
      <FlexItems>
        <ContinueButton disabled={!cardType && true} onClick={handleSelect}>
          Continue
        </ContinueButton>
      </FlexItems>

      {/* </form> */}
    </>
  );
};

export default ContentOne;
