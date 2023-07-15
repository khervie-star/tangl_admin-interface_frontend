import React from "react";
import {
  AssetInformationCard,
  AssetInformationContent,
  AssetInformationSection,
  AssetInformationWrapper,
  CardInfo,
  GridContainer,
  GridItem,
  ReviewAssetInformationHeader,
  ReviewAssetInformationHeaderDescription,
  ReviewAssetInformationHeaderText,
  SectionHeader,
  SmallText,
} from "./styles";
import {
  FilePicker,
  LabeledInput,
  LabeledTextfield,
} from "../../assets/common";
import { SolidBlueButton } from "../../../OrgDashboard/assets/buttons";

const ReviewAssetInformation = ({ handleBack, handleForward }: any) => {
  return (
    <>
      <AssetInformationWrapper>
        <ReviewAssetInformationHeader>
          <ReviewAssetInformationHeaderText>
            Review Asset Information
          </ReviewAssetInformationHeaderText>
          <ReviewAssetInformationHeaderDescription>
            Review the information below to ensure it is correct prior to
            creating the Asset
          </ReviewAssetInformationHeaderDescription>
        </ReviewAssetInformationHeader>

        <AssetInformationContent>
          <h4 className="info-header">Asset Information</h4>
          <AssetInformationSection>
            <SectionHeader>General</SectionHeader>
            <AssetInformationCard>
              <CardInfo>
                <p>Asset Name</p>
                <h6>Global growt fund</h6>
              </CardInfo>
              <CardInfo>
                <p>Asset symbol</p>
                <h6>GGF1</h6>
              </CardInfo>
              <CardInfo>
                <p>Asset description</p>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lacus magna nibh justo, leo. Justo habitant et at bibendum.
                </h6>
              </CardInfo>
            </AssetInformationCard>
          </AssetInformationSection>

          <AssetInformationSection>
            <SectionHeader>Bank Information</SectionHeader>
            <AssetInformationCard>
              <CardInfo>
                <p>Bank Name</p>
                <h6>Example bank name</h6>
              </CardInfo>
              <CardInfo>
                <p>IBAN</p>
                <h6>6754324467</h6>
              </CardInfo>
              <CardInfo>
                <p>B/iC/Swiftcode</p>
                <h6>DABAIED2D</h6>
              </CardInfo>
            </AssetInformationCard>
          </AssetInformationSection>

          <AssetInformationSection>
            <SectionHeader>Fund Prospectus</SectionHeader>
            <AssetInformationCard>
              <CardInfo>
                <p>Fund prospectus</p>
                <h6>DABAIED2D</h6>
              </CardInfo>
            </AssetInformationCard>
          </AssetInformationSection>

          <AssetInformationSection>
            <SectionHeader>Fund Cover Image</SectionHeader>
            <AssetInformationCard>
              <CardInfo>
                <p>Fund cover image</p>
                <h6>DABAIED2D</h6>
              </CardInfo>
            </AssetInformationCard>
          </AssetInformationSection>

          <AssetInformationSection>
            <SolidBlueButton onClick={handleForward}>Continue</SolidBlueButton>
          </AssetInformationSection>
        </AssetInformationContent>
      </AssetInformationWrapper>
    </>
  );
};

export default ReviewAssetInformation;
