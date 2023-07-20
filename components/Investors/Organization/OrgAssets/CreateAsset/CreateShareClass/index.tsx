import React from "react";
import {
  Column,
  InputWithAdornment,
  InputWithSideLabel,
  Section,
  SectionCard,
  SectionCardText,
  SectionHeader,
  ShareClassName,
  Wrapper,
} from "./styles";
import {
  AssetHeaderText,
  FilePicker,
  FlexBetween,
  LabeledInput,
  RadioColumn,
  RadioContainer,
  Select,
  SmallText,
} from "../../assets/common";
import { CheckboxContainer, LabelFlex, Row } from "../../../../Assets/common";
import { PercentageIcon } from "../../assets/Icons";
import { BackTextButton, GenButton } from "../../assets/buttons";

const investors = [
  {
    key: 1,
    content: "Investors",
    cardType: "MMSEC",
  },
  {
    key: 2,
    content: "AQR caoital management",
    cardType: "NRATED",
  },
  {
    key: 3,
    content: "Brevan Horward",
    cardType: "BONDS",
  },
  {
    key: 4,
    content: "Elliot management",
    cardType: "FXMRKT",
  },
  {
    key: 5,
    content: "Bridgewaters Assoociate",
    cardType: "CNVBONDS",
  },
  {
    key: 6,
    content: "Two sigma investment",
    cardType: "SWAPS",
  },
  {
    key: 7,
    content: "Renaissance technology",
    cardType: "LSTDSHRS",
  },
  {
    key: 8,
    content: "Millenium management",
    cardType: "IFT",
  },
  {
    key: 9,
    content: "Man Group",
    cardType: "UNLSTSHRS",
  },
];

const CreateShareClass = ({ handleBack, handleForward }: any) => {
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

        {/* General */}
        <Section>
          <SectionHeader>General</SectionHeader>
          <SectionCard>
            <Column>
              <div>
                <ShareClassName>
                  <p>Share class name</p>
                  <InputWithSideLabel placeholder="e.g A">
                    Class
                  </InputWithSideLabel>
                </ShareClassName>
              </div>
              <div style={{ width: "100%" }}>
                <LabeledInput label="ISIN Code*" />
              </div>
              <div>
                <Select>
                  <option>Select currency</option>
                </Select>
              </div>
            </Column>
          </SectionCard>
        </Section>

        {/* Orders */}
        <Section>
          <SectionHeader>Orders</SectionHeader>
          <SectionCard>
            <SectionCardText>Type of order subscription</SectionCardText>
            <RadioColumn>
              <RadioContainer>
                <input
                  type="radio"
                  name="orderSubscriptionType"
                  value={"Amount"}
                />
                <label>Amount</label>
              </RadioContainer>
              <RadioContainer>
                <input
                  type="radio"
                  name="orderSubscriptionType"
                  value={"Quantity"}
                />
                <label>Quantity</label>
              </RadioContainer>
            </RadioColumn>
          </SectionCard>
        </Section>

        {/* InitialShare Value */}
        <Section>
          <SectionHeader>Initial Share Value </SectionHeader>
          <SectionCard>
            <SectionCardText>
              Do you wish to define the initial value for this shares
            </SectionCardText>
            <RadioColumn>
              <RadioContainer>
                <input
                  type="radio"
                  name="orderSubscriptionType"
                  value={"Amount"}
                />
                <label>Yes</label>
              </RadioContainer>
              <RadioContainer>
                <input
                  type="radio"
                  name="orderSubscriptionType"
                  value={"Quantity"}
                />
                <label>No</label>
              </RadioContainer>
            </RadioColumn>
          </SectionCard>
        </Section>

        {/* Payment Options */}
        <Section>
          <SectionHeader>Payment Option</SectionHeader>
          <SectionCard>
            <SectionCardText>When should payment be made</SectionCardText>
            <RadioColumn>
              <RadioContainer>
                <input
                  type="radio"
                  name="orderSubscriptionType"
                  value={"Amount"}
                />
                <label>Paid at time of order</label>
              </RadioContainer>
              <RadioContainer>
                <input
                  type="radio"
                  name="orderSubscriptionType"
                  value={"Quantity"}
                />
                <label>Paid between subscription sut off and settlement</label>
              </RadioContainer>
            </RadioColumn>
          </SectionCard>
        </Section>

        {/*  */}
        <Section>
          <SectionHeader>Subscription</SectionHeader>
          <SectionCard>
            <SectionCardText>Type of order subscription</SectionCardText>
          </SectionCard>
        </Section>

        {/* Fees */}
        <Section>
          <SectionHeader>Fees</SectionHeader>
          <SectionCard>
            <ShareClassName>
              <p>Maximum entry fees</p>
              <InputWithSideLabel placeholder="e.g 1.5" reverse>
                <PercentageIcon />
              </InputWithSideLabel>
            </ShareClassName>
          </SectionCard>
        </Section>

        {/* Documents */}
        <Section>
          <SectionHeader>Documents</SectionHeader>
          <SectionCard>
            <Row flexWrap="wrap">
              <LabelFlex flexPercentage="50%" padding="0rem 1rem 0rem 0rem">
                <SmallText>Key investor information document</SmallText>
                <FilePicker />
              </LabelFlex>
              <LabelFlex flexPercentage="50%" padding="0rem 1rem 0rem 0rem">
                <SmallText>Annual Report</SmallText>
                <FilePicker />
              </LabelFlex>
            </Row>
          </SectionCard>
        </Section>

        {/* Investors */}
        <Section>
          <SectionHeader>Investors</SectionHeader>
          <SectionCard>
            <SectionCardText>
              Select which investor will have access to this asset and define
              fees{" "}
            </SectionCardText>
            <Row flexWrap="wrap">
              {investors.map((investor) => {
                return (
                  <LabelFlex
                    flexPercentage="50%"
                    padding="0rem 1rem 0rem 0rem"
                    key={investor.key}>
                    <CheckboxContainer key={investor.key}>
                      <input
                        type="checkbox"
                        name="Investors"
                        // value={investmentVehicles}
                        // onChange={() => setInvestmentVehicles(card.cardType)}
                      />
                      <label>{investor.content}</label>
                    </CheckboxContainer>
                  </LabelFlex>
                );
              })}
            </Row>
          </SectionCard>
        </Section>

        <FlexBetween>
          <BackTextButton onClick={handleBack}>Back</BackTextButton>
          <GenButton onClick={handleOnClick}>
            Next: Review Share Class Information
          </GenButton>
        </FlexBetween>
      </Wrapper>
    </>
  );
};

export default CreateShareClass;
