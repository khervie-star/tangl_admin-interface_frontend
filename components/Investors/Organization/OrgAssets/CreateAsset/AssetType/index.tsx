import React from "react";
import {
  AssetTypeCard,
  AssetTypeContent,
  AssetTypeHeaderText,
  AssetTypeItem,
  AssetTypeName,
  AssetTypeDescription,
  AssetTypeWrapper,
} from "./styles";
import { SolidBlueButton } from "../../../OrgDashboard/assets/buttons";

const assetTypes = [
  {
    id: 1,
    name: "Closed end fund",
    description:
      "This is a collective investment model based on issuing a fixed number of shares which are not redeemable from the fund",
  },
  {
    id: 2,
    name: "Open ended fund -ETF",
    description:
      "This allows ongoing new contributions and withdrawals from investors of the pool. Open-end shares are priced at their portfolio's net asset value (NAV) at the end of each day.",
  },
  {
    id: 3,
    name: "Real Estate Bond",
    description:
      "Aka Property Investment bonds, are a means for developers to raise money from investors in the form of a loan. With the intention to fund a project(s) during the earlier stages of development.",
  },
];

const AssetType = ({ handleBack, handleForward }: any) => {
  const handleAssetType = () => {
    handleForward();
  };
  return (
    <>
      <AssetTypeWrapper>
        <AssetTypeHeaderText>Step 1: Select asset type</AssetTypeHeaderText>
        <AssetTypeContent>
          {assetTypes.map((assetType, i) => (
            <AssetTypeCard key={i}>
              <AssetTypeItem>
                <AssetTypeName>{assetType.name}</AssetTypeName>
                <AssetTypeDescription>
                  {assetType.description}
                </AssetTypeDescription>
              </AssetTypeItem>
              <SolidBlueButton onClick={handleAssetType}>
                Create
              </SolidBlueButton>
            </AssetTypeCard>
          ))}
        </AssetTypeContent>
      </AssetTypeWrapper>
    </>
  );
};

export default AssetType;
