import React from "react";
import { DarkContBtn } from "../../../Assets/Buttons";
import { TextBody, TextTitle } from "../../../Assets/common";
import { PageBarTypes } from "../../../types";
import { VerifiedIcon } from "../../Icons";
import {
  ApplicationItem,
  ApplicationReviewWrapper,
  EditButton,
} from "./styles";

const ReviewOnboardingApplication = ({ page }: PageBarTypes) => {
  return (
    <div>
      <TextTitle>Review Application</TextTitle>
      <TextBody>
        Click the button below to confirm your submission or go back to previous
        sections to edit your entries.
      </TextBody>
      <ApplicationReviewWrapper>
        <ApplicationItem>
          <p>Registration</p>
          <EditButton>Edit</EditButton>
        </ApplicationItem>
        <ApplicationItem>
          <p>KYC</p>
          <EditButton>Edit</EditButton>
        </ApplicationItem>
        <ApplicationItem>
          <p>Proof of Business</p>
          <EditButton>Edit</EditButton>
        </ApplicationItem>
        <ApplicationItem>
          <p>Investment Questionnaire</p>
          <EditButton>Edit</EditButton>
        </ApplicationItem>
      </ApplicationReviewWrapper>
      <DarkContBtn>Confirm</DarkContBtn>
    </div>
  );
};

export default ReviewOnboardingApplication;
