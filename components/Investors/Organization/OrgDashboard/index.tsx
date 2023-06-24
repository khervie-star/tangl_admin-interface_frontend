import React, { useState } from "react";
import {
  AssetsHeader,
  AssetsHeaderTexts,
  AssetsWrapper,
  CreateNewAssetWrapper,
  DashboardGridContainer,
  DashboardWrapper,
  EmptySummaryWrapper,
  EmptyTransactionsWrapper,
  EmptyWalletWrapper,
  MyWalletHeader,
  MyWalletHeaderText,
  MyWalletWrapper,
  SummaryHeader,
  SummaryHeaderText,
  SummaryWrapper,
  TransactionHeader,
  TransactionHeaderText,
  TransactionsActionButtons,
  TransactionsTableWrapper,
  TrendingCard,
  TrendingCardsGrid,
  TrendingHeader,
  TrendingHeaderText,
  TrendingWrapper,
} from "./styles";
import { SolidBlueButton, TextButton } from "./assets/buttons";
import { ChevronDownIcon, PlusIcon } from "./assets/icons";
import mdg from "./assets/images/mdg.png";
import ynt from "./assets/images/ymt.png";
import ipsum from "./assets/images/ipsum.png";
import Image from "next/image";
import DashboardTransactionTable from "./TransactionTable";
import TransactionAssets from "./TransactionAssets";

const trendingCards = [
  {
    id: 1,
    name: "Meadow Group",
    short: "MDG",
    amount: "$678,076",
    apy: "+9%",
    image: mdg,
  },
  {
    id: 2,
    name: "Ying Tech Fund",
    short: "YNT",
    amount: "$18,076",
    apy: "+20%",
    image: ynt,
  },
  {
    id: 3,
    name: "Emmax Tech Solutions",
    short: "IPSUM",
    amount: "$63,081",
    apy: "+20%",
    image: ipsum,
  },
];

const Dashboard = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <DashboardWrapper>
      <DashboardGridContainer>
        <AssetsWrapper>
          <AssetsHeader>
            <AssetsHeaderTexts>
              <h4>Assets</h4>
              <p>View your assets</p>
            </AssetsHeaderTexts>
            <SolidBlueButton onClick={() => setShowFull(!showFull)}>
              New Asset
            </SolidBlueButton>
          </AssetsHeader>
          {showFull ? (
            <TransactionAssets />
          ) : (
            <CreateNewAssetWrapper>
              <PlusIcon />
              <p>
                You have not created any asset yet. Tap to create asset now.
              </p>
            </CreateNewAssetWrapper>
          )}
        </AssetsWrapper>
        <MyWalletWrapper>
          <MyWalletHeader>
            <MyWalletHeaderText>My wallet</MyWalletHeaderText>
            <TextButton>See all</TextButton>
          </MyWalletHeader>
          <CreateNewAssetWrapper>
            <PlusIcon />
            <p>You have not created any asset yet. Tap to create asset now.</p>
          </CreateNewAssetWrapper>
        </MyWalletWrapper>
      </DashboardGridContainer>
      <DashboardGridContainer>
        <TrendingWrapper>
          <TrendingHeader>
            <TrendingHeaderText>Trending</TrendingHeaderText>
            <TextButton>See all</TextButton>
          </TrendingHeader>
          <TrendingCardsGrid>
            {trendingCards.map((asset, i) => (
              <TrendingCard key={asset.id}>
                <Image src={asset.image} alt="" width={40} height={40} />
                <div className="asset-name">{asset.name}</div>
                <div className="asset-short">{asset.short}</div>
                <div className="amount">{asset.amount}</div>
                <div className="apy">
                  <span>{asset.apy}</span> this week
                </div>
              </TrendingCard>
            ))}
          </TrendingCardsGrid>
        </TrendingWrapper>
        <SummaryWrapper>
          <SummaryHeader>
            <SummaryHeaderText>Summary</SummaryHeaderText>
          </SummaryHeader>
          <EmptySummaryWrapper>
            <PlusIcon />
            <p>You have not created any asset yet. Tap to create asset now.</p>
          </EmptySummaryWrapper>
        </SummaryWrapper>
      </DashboardGridContainer>
      <TransactionsTableWrapper>
        <TransactionHeader>
          <TransactionHeaderText>Your transactions</TransactionHeaderText>
          <TransactionsActionButtons>
            <TextButton>
              Sort
              <ChevronDownIcon />
            </TextButton>
            <SolidBlueButton onClick={() => setShowFull(!showFull)}>
              See All
            </SolidBlueButton>
          </TransactionsActionButtons>
        </TransactionHeader>
        {showFull ? (
          <DashboardTransactionTable />
        ) : (
          <EmptyTransactionsWrapper>
            <PlusIcon />
            <p>You have not created any asset yet. Tap to create new asset</p>
          </EmptyTransactionsWrapper>
        )}
      </TransactionsTableWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
