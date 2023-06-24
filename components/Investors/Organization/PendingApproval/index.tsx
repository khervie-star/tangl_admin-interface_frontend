import React from "react";
import {
  ApprovalBanner,
  Container,
  DescriptionText,
  InvestorOnboardingHeader,
  OnboardingStep,
  OnboardingStepStatus,
  OnboardingStepText,
  OnboardingSteps,
  PendingApprovalContent,
} from "./styles";
import { SolidDarkButton } from "./assets/buttons";
import { CheckmarkIcon } from "./assets/icons";

const PendingApproval = () => {
  return (
    <Container>
      <PendingApprovalContent>
        <InvestorOnboardingHeader>Investor Onboarding</InvestorOnboardingHeader>
        <ApprovalBanner>
          <CheckmarkIcon />
          <span>Information has been sent to Tangl for approval</span>
        </ApprovalBanner>
        <DescriptionText>
          You will receive an email when Tangl has reviewed your information
        </DescriptionText>
        <OnboardingSteps>
          <OnboardingStep>
            <OnboardingStepText>Registration</OnboardingStepText>
            <OnboardingStepStatus status="success">
              Approved
            </OnboardingStepStatus>
          </OnboardingStep>
          <OnboardingStep>
            <OnboardingStepText>KYC</OnboardingStepText>
            <OnboardingStepStatus status="pending">
              Pending approval
            </OnboardingStepStatus>
          </OnboardingStep>
          <OnboardingStep>
            <OnboardingStepText>Security</OnboardingStepText>
            <OnboardingStepStatus status="success">
              Success
            </OnboardingStepStatus>
          </OnboardingStep>
          <OnboardingStep>
            <OnboardingStepText>Investment Questionnaire</OnboardingStepText>
            <OnboardingStepStatus status="success">
              Success
            </OnboardingStepStatus>
          </OnboardingStep>
        </OnboardingSteps>
        <SolidDarkButton>Contact Support</SolidDarkButton>
      </PendingApprovalContent>
    </Container>
  );
};

export default PendingApproval;
