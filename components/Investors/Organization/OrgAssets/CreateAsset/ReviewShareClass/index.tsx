import React from "react";
import {
  CardInfo,
  Column,
  Section,
  SectionCard,
  SectionCardText,
  SectionHeader,
  Wrapper,
} from "./styles";
import {
  AssetHeaderText,
  FlexBetween,
  LabeledInput,
  Select,
} from "../../assets/common";
import { BackTextButton, GenButton } from "../../assets/buttons";

const ReviewShareClass = ({ handleBack, handleForward }: any) => {
  const handleOnClick = () => {
    handleForward();
  };
  return (
    <>
      <Wrapper>
        <AssetHeaderText>
          <h6>Create Share Class</h6>
          <p>
            Complete the form below to create the first share class for the
            asset. You wil be able to create additional share classes after.
          </p>
        </AssetHeaderText>
        <Section>
          <SectionHeader>General</SectionHeader>
          <SectionCard>
            <CardInfo>
              <p>ISIN Code</p>
              <h6>XS2347890XX</h6>
            </CardInfo>
            <CardInfo>
              <p>Currency</p>
              <h6>USD $</h6>
            </CardInfo>
          </SectionCard>
        </Section>
        <Section>
          <SectionHeader>Orders</SectionHeader>
          <SectionCard>
            <CardInfo>
              <p>Type of order subscriptions</p>
              <h6>Quantity</h6>
            </CardInfo>
            <CardInfo>
              <p>Minimun subscription in quantity</p>
              <h6>$ 25.00</h6>
            </CardInfo>
          </SectionCard>
        </Section>
        <Section>
          <SectionHeader>Initial Share Value </SectionHeader>
          <SectionCard>
            <CardInfo>
              <p>Do you wish to define the initial value for this share</p>
              <h6>Yes</h6>
            </CardInfo>
            <CardInfo>
              <p>Initial share value </p>
              <h6>$100</h6>
            </CardInfo>
          </SectionCard>
        </Section>
        <Section>
          <SectionHeader>Payment Option</SectionHeader>
          <SectionCard>
            <CardInfo>
              <p>When should payment be made</p>
              <h6>Paid between subscription cut off and settlement</h6>
            </CardInfo>
          </SectionCard>
        </Section>
        <Section>
          <SectionHeader>Fees</SectionHeader>
          <SectionCard>
            <CardInfo>
              <p>Maximum entry fees</p>
              <h6>1.56%</h6>
            </CardInfo>
          </SectionCard>
        </Section>
        <Section>
          <SectionHeader>Subscription</SectionHeader>
          <SectionCard>
            <SectionCardText>Type of order subscription</SectionCardText>
          </SectionCard>
        </Section>
        <Section>
          <SectionHeader>Subscription</SectionHeader>
          <SectionCard>
            <SectionCardText>Type of order subscription</SectionCardText>
          </SectionCard>
        </Section>
        <Section>
          <SectionHeader>Investors</SectionHeader>
          <SectionCard>
            <SectionCardText>
              Select which investor will have access to this asset and define
              fees{" "}
            </SectionCardText>
          </SectionCard>
        </Section>
        <FlexBetween>
          <BackTextButton onClick={handleBack}>Back</BackTextButton>
          <GenButton onClick={handleOnClick}>Create Share Class</GenButton>
        </FlexBetween>
      </Wrapper>
    </>
  );
};

export default ReviewShareClass;
