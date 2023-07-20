import styled from "styled-components";

export const InvestorChartWrapper = styled.div`
  display: inline-flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid var(--black-20, #e1e8f4);
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 40px;
`;

export const InvestorChartHeaders = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;

export const InvestorChartHeaderDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  p {
    color: var(--black-70, #43566a);
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.1px;
    margin: 0;
    padding: 0;
  }
  h6 {
    color: var(--black-100, #011122);
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
    letter-spacing: -0.4px;
    margin: 0;
    padding: 0;
  }
`;

export const ChartContainer = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto;
`;

export const ChartTimeFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  p {
    color: var(--black-40, #a0aaba);
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.1px;
  }
`;
