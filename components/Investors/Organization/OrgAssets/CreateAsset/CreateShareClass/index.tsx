import React from "react";
import {
  Column,
  Section,
  SectionCard,
  SectionCardText,
  SectionHeader,
  Wrapper,
} from "./styles";
import { LabeledInput, Select } from "../../assets/common";

const CreateShareClass = ({ handleBack, handleForward }: any) => {
  return (
    <>
      <Wrapper>
        <Section>
          <SectionHeader>General</SectionHeader>
          <SectionCard>
            <Column>
              <div>
                <SectionCardText>Type of order subscription</SectionCardText>
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
        <Section>
          <SectionHeader>Orders</SectionHeader>
          <SectionCard>
            <SectionCardText>Type of order subscription</SectionCardText>
          </SectionCard>
        </Section>
        <Section>
          <SectionHeader>Initial Share Value </SectionHeader>
          <SectionCard>
            <SectionCardText>
              Do you wish to define the initial value for this shares
            </SectionCardText>
          </SectionCard>
        </Section>
        <Section>
          <SectionHeader>Payment Option</SectionHeader>
          <SectionCard>
            <SectionCardText>When should payment be made</SectionCardText>
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
      </Wrapper>
    </>
  );
};

export default CreateShareClass;
