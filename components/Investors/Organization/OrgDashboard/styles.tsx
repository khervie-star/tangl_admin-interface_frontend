import styled from "styled-components";

export const DashboardWrapper = styled.div`
  padding: 3em;
`;

export const DashboardGridContainer = styled.div`
  display: grid;
  grid-template-columns: 9fr 3fr;
  grid-gap: 40px;
  margin-bottom: 48px;
`;

export const AssetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

export const AssetsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`;

export const AssetsHeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  h4 {
    margin: 0;
    padding: 0;
    color: var(--black-80, #324a64);
    font-size: 32px;
    font-family: Outfit;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: -0.4px;
  }
  p {
    margin: 0;
    padding: 0;
    color: var(--black-80, #324a64);
    font-size: 18px;
    font-family: Outfit;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -0.1px;
  }
`;

export const CreateNewAssetWrapper = styled.div`
  display: flex;
  height: 160px;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 10px;
  border: 1px dashed var(--black-40, #a0aaba);
  background: #fff;
  p {
    display: flex;
    width: 310px;
    flex-direction: column;
    justify-content: center;
    color: var(--black-40, #a0aaba);
    text-align: center;
    font-size: 18px;
    font-family: Outfit;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -0.1px;
  }
`;

export const MyWalletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

export const MyWalletHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  margin-top: 40px;
`;

export const MyWalletHeaderText = styled.div`
  color: var(--black-80, #324a64);
  font-size: 24px;
  font-family: Outfit;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.2px;
`;

export const EmptyWalletWrapper = styled.div`
  display: flex;
  padding: 32px 55px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px dashed var(--black-40, #a0aaba);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  p {
    display: flex;
    width: 310px;
    flex-direction: column;
    justify-content: center;
    color: var(--black-40, #a0aaba);
    text-align: center;
    font-size: 18px;
    font-family: Outfit;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -0.1px;
  }
`;

// Trending Section
export const TrendingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

export const TrendingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`;

export const TrendingHeaderText = styled.div`
  color: var(--black-80, #324a64);
  font-size: 28px;
  font-family: Outfit;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.4px;
`;

export const TrendingCardsGrid = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 35px;
  align-self: stretch;
`;

export const TrendingCard = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 12px;
  background: var(--off-white, #f4f4f4);

  .asset-name {
    color: var(--black-80, #324a64);
    font-size: 14px;
    font-family: Outfit;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.1px;
    margin-top: 16px;
  }
  .asset-short {
    color: var(--black-40, #a0aaba);
    font-size: 12px;
    font-family: Outfit;
    font-weight: 500;
    letter-spacing: -0.1px;
    text-transform: uppercase;
  }
  .amount {
    color: var(--black-80, #324a64);
    font-size: 24px;
    font-family: Outfit;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.4px;
  }
  .apy {
    color: var(--black-40, #a0aaba);
    text-align: right;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.1px;
    span {
      color: var(--green-100, #5ac179);
      text-align: right;
      font-size: 14px;
      font-family: Outfit;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.1px;
    }
  }
`;

// Summary Section
export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

export const SummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`;

export const SummaryHeaderText = styled.div`
  color: var(--black-80, #324a64);
  font-size: 24px;
  font-family: Outfit;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.2px;
`;

export const EmptySummaryWrapper = styled.div`
  display: flex;
  padding: 32px 55px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px dashed var(--black-40, #a0aaba);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  p {
    display: flex;
    width: 310px;
    flex-direction: column;
    justify-content: center;
    color: var(--black-40, #a0aaba);
    text-align: center;
    font-size: 18px;
    font-family: Outfit;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -0.1px;
  }
`;

// Transaction Section
export const TransactionsTableWrapper = styled.div`
  display: flex;
  margin: 48px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  align-self: stretch;
  width: 100%;
`;

export const TransactionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

export const TransactionHeaderText = styled.h5`
  color: var(--black-80, #324a64);

  font-size: 28px;
  font-family: Outfit;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.4px;
  margin: 0;
  padding: 0;
`;

export const TransactionsActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const EmptyTransactionsWrapper = styled.div`
  display: flex;
  height: 49px;
  padding: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 10px;
  border: 1px dashed var(--black-40, #a0aaba);
  background: #fff;
  p {
    color: var(--black-40, #a0aaba);
    text-align: center;

    font-size: 18px;
    font-family: Outfit;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -0.1px;
  }
`;
