import React, { useState } from "react";
import { AssetHeaderText, FlexBetween } from "../../assets/common";
import {
  CardInfo,
  Section,
  SectionCard,
  SectionHeader,
  Wrapper,
} from "./styles";
import fundCoverImage from "../../assets/Images/Fund_Cover_Image.png";
import Image from "next/image";
import { BackTextButton, GenButton } from "../../assets/buttons";
import ModalComponent from "../../assets/common/ConfirmModal";
import Router from "next/router";
import { setAssetPage } from "../../../../../../store/actions";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const ReviewAllAssetData = ({ handleBack, handleForward }: any) => {
  const [confirmModal, setConfirmModal] = useState(false);
  const dispatch = useDispatch();
  const handleCreateClass = () => {
    console.log("create class");
    Router.push("/Investor/Organization/Assets");
    dispatch(setAssetPage(1));
  };
  const handleOpenModal = () => {
    setConfirmModal(true);
  };
  const handleCloseModal = () => {
    setConfirmModal(false);
  };
  return (
    <div>
      <Wrapper>
        <AssetHeaderText>
          <h6>Review</h6>
          <p>
            Review the information below to ensure it is correct prior to
            creating the Asset
          </p>
        </AssetHeaderText>

        {/* GeneralIno */}
        <Section>
          <SectionHeader>General</SectionHeader>
          <SectionCard>
            <CardInfo>
              <p>Asset Name</p>
              <h6>Global growt fund</h6>
            </CardInfo>
            <CardInfo>
              <p>Asset Symbol</p>
              <h6>GGF1</h6>
            </CardInfo>
            <CardInfo>
              <p>Asset Description</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lacus magna nibh justo, leo. Justo habitant et at bibendum.
              </p>
            </CardInfo>
          </SectionCard>
        </Section>

        {/* Bank Info */}
        <Section>
          <SectionHeader>Bank Information</SectionHeader>
          <SectionCard>
            <CardInfo>
              <p>Bank Name</p>
              <h6>Example Bank name</h6>
            </CardInfo>
            <CardInfo>
              <p>IBAN</p>
              <h6>6754324467</h6>
            </CardInfo>
            <CardInfo>
              <p>B/iC/Swiftcode</p>
              <h6>DABAIED2D</h6>
            </CardInfo>
          </SectionCard>
        </Section>

        {/* Fund Propspectus */}
        <Section>
          <SectionHeader>Fund Prospectus</SectionHeader>
          <SectionCard>
            <CardInfo>
              <p>Fund prospectus</p>
              <h6 className="fileName">Legal_agreement_doc.pdf</h6>
            </CardInfo>
          </SectionCard>
        </Section>

        {/* Fund Cover Image */}
        <Section>
          <SectionHeader>Fund Cover Image</SectionHeader>
          <SectionCard>
            <CardInfo>
              <p>Fund cover image</p>
              <Image src={fundCoverImage} alt="" />
            </CardInfo>
          </SectionCard>
        </Section>

        <FlexBetween>
          <BackTextButton onClick={handleBack}>Back</BackTextButton>
          <GenButton onClick={handleOpenModal}>Create Share Class</GenButton>
        </FlexBetween>
      </Wrapper>
      <ModalComponent
        title="Create Asset"
        content="Are you sure you want to create this asset, by continuing  any selected investors will be able to view and purchase this asset.

Upon creating this asset, the asset will be deployed on the blockchain, this can take up to 10 mins"
        isOpen={confirmModal}
        onClose={handleCloseModal}
        onConfirm={handleCreateClass}
        onCancel={handleCloseModal}
      />
    </div>
  );
};

export default ReviewAllAssetData;
