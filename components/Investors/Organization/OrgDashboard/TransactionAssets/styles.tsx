import styled from "styled-components";

export const TransactionAssetsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 40px;
`;

export const TransactionAssetsCard = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 12px;
  background: var(--off-white, #f4f4f4);
  width: 100%;

  .description {
    display: flex;
    align-items: flex-start;
    gap: 22px;

    .name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;

      p {
        color: var(--black-80, #324a64);
        font-size: 16px;
        font-family: Outfit;
        font-weight: 500;
        line-height: 24px;
        margin: 0;
      }

      span {
        color: var(--black-40, #a0aaba);
        font-size: 12px;
        font-family: Outfit;
        font-weight: 500;
        letter-spacing: -0.1px;
        text-transform: uppercase;
        margin: 0;
      }
    }
  }

  .metrics {
    display: flex;
    align-items: center;
    gap: 56px;
    justify-content: space-between;
    width: 100%;

    .metrics-amount {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;

      .amount {
        color: var(--black-100, #011122);
        text-align: right;
        font-size: 16px;
        font-family: Outfit;
        font-weight: 500;
        line-height: 24px;
        margin: 0;
      }

      .percentage {
        color: var(--green-100, #5ac179);
        text-align: right;
        font-size: 16px;
        font-family: Outfit;
        font-weight: 500;
        line-height: 24px;
        margin: 0;
      }
    }
  }
`;
