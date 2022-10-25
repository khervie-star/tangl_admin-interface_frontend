import { InputConatainer, RadioContainer, Title } from "./styles";
import { useState } from "react";
import { TextTitle } from "../../../Assets/common";
import { PageBarTypes } from "../../../types";
import { useDispatch } from "react-redux";
import { individualFowardRoute } from "../../../../../store/actions";
import { ContinueButton } from "../../../Assets/Buttons";
import { useAppDispatch } from "../../../../../hooks";

const ContentEleven = ({ page }: PageBarTypes) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (page) dispatch(individualFowardRoute(page));
  };

  return (
    <>
      <TextTitle>Upload Government Identification</TextTitle>
      <form onSubmit={handleClick}>
        <InputConatainer>
          <Title>Investment Nature</Title>
          <RadioContainer>
            <input type="radio" name="select" value={"Internal Mangement"} />
            <label>Internal Mangement</label>
          </RadioContainer>
          <RadioContainer>
            <input
              type="radio"
              name="select"
              value={"With the advice of an authorized third party institution"}
            />
            <label>
              With the advice of an authorized third party institution
            </label>
          </RadioContainer>
          <RadioContainer>
            <input
              type="radio"
              name="select"
              value={"By mandate(s) entrusted to a manager"}
            />
            <label>By mandate(s) entrusted to a manager</label>
          </RadioContainer>
        </InputConatainer>
        <ContinueButton>Continue</ContinueButton>
      </form>
    </>
  );
};

export default ContentEleven;
