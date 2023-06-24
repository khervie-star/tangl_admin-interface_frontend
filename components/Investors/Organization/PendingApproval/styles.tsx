import styled, { css } from "styled-components";

export type StatusType = {
  status: string;
};

export const Container = styled.div`
  padding: 3rem;
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PendingApprovalContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 600px;
`;

export const InvestorOnboardingHeader = styled.h4`
  color: var(--black-80, #324a64);
  font-size: 32px;
  font-family: Outfit;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.4px;
  margin: 0;
`;

export const ApprovalBanner = styled.div`
  border-radius: 40px;
  background: #ebfaef;
  display: flex;
  width: 686px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  span {
    color: var(--black-80, #324a64);
    font-size: 16px;
    font-family: Outfit;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const DescriptionText = styled.div`
  color: var(--black-70, #43566a);
  text-align: center;
  font-size: 16px;
  font-family: Outfit;
  line-height: 24px;
`;

export const OnboardingSteps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

export const OnboardingStep = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

export const OnboardingStepText = styled.p`
  margin: 0;
  padding: 0;
  color: #000;
  font-size: 18px;
  font-family: Outfit;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.1px;
`;

export const OnboardingStepStatus = styled.p`
  margin: 0;
  padding: 0;

  font-size: 14px;
  font-family: Outfit;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
  ${({ status }: StatusType) =>
    status === "success"
      ? css`
          color: #5ac179;
        `
      : css`
          color: #ffb524;
        `};
`;
