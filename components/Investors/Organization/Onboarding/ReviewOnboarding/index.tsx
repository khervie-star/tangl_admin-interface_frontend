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
import { useRouter } from "next/router";

const ReviewOnboardingApplication = ({ page }: PageBarTypes) => {
  const router = useRouter();
  const confirmSignup = () => {
    router.push("Investor/Organization/Pending-Approval");
  };
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
      <DarkContBtn onClick={confirmSignup}>Confirm</DarkContBtn>
    </div>
  );
};

export default ReviewOnboardingApplication;
