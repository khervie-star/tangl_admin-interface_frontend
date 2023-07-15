import React from "react";
import {
  AssetInformationCard,
  AssetInformationContent,
  AssetInformationHeaderText,
  AssetInformationSection,
  AssetInformationWrapper,
  GridContainer,
  GridItem,
  SectionHeader,
  SmallText,
} from "./styles";
import {
  FilePicker,
  LabeledInput,
  LabeledTextfield,
} from "../../assets/common";
import { SolidBlueButton } from "../../../OrgDashboard/assets/buttons";

const AssetInformation = ({ handleBack, handleForward }: any) => {
  return (
    <>
      <AssetInformationWrapper>
        <AssetInformationHeaderText>
          Step 2: Asset Information
        </AssetInformationHeaderText>
        <AssetInformationContent>
          <AssetInformationSection>
            <SectionHeader>General</SectionHeader>
            <AssetInformationCard>
              <GridContainer>
                <GridItem col="9">
                  <LabeledInput label="Asset name*" />
                </GridItem>
                <GridItem col="3">
                  <LabeledInput label="Asset symbol*" />
                </GridItem>
              </GridContainer>
              <LabeledTextfield label="Asset description" />
            </AssetInformationCard>
          </AssetInformationSection>
          <AssetInformationSection>
            <SectionHeader>Bank Information</SectionHeader>
            <AssetInformationCard>
              <LabeledInput label="Bank name*" />
              <LabeledInput label="IBAN*" />
              <LabeledInput label="BIC/Swift code*" />
            </AssetInformationCard>
          </AssetInformationSection>
          <AssetInformationSection>
            <SectionHeader>Prospectus</SectionHeader>
            <SmallText>Upload the prospectus</SmallText>
            <FilePicker />
          </AssetInformationSection>
          <AssetInformationSection>
            <SectionHeader>Cover Image</SectionHeader>
            <SmallText>
              Upload a fund cover image <span>(optional)</span>
            </SmallText>
            <FilePicker />
          </AssetInformationSection>
          <AssetInformationSection>
            <SolidBlueButton onClick={handleForward}>Continue</SolidBlueButton>
          </AssetInformationSection>
        </AssetInformationContent>
      </AssetInformationWrapper>
    </>
  );
};

export default AssetInformation;
