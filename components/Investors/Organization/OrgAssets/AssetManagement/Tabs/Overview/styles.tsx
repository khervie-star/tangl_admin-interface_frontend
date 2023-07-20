import styled from "styled-components";

export const ShareClassContainer = styled.div`
  border-radius: 10px;
  border: 1px solid var(--black-20, #e1e8f4);
  display: inline-flex;
  padding: 0px 1px 32px 1px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const ShareClassHeader = styled.div`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  background: var(--off-white-98, #fafafa);
  box-shadow: 2px 2px 4px 0px rgba(160, 170, 186, 0.15);

//   display: flex;
//   padding: 13px 31px 13px 32px;
//   align-items: flex-start;
  gap: 10px;

  color: var(--black-70, #43566a);
  font-family: Outfit;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.2px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e1e8f4;
  tbody {
    border-radius: 10px;
  }
`;

export const TableHeader = styled.th`
  color: var(--black-80, #324a64);
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.1px;
  padding: 20px 0;
`;

export const TableCell = styled.td`
  padding: 12px 20px;
  border: 1px solid #e1e8f4;
  color: var(--black-70, #43566a);
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const TableRow = styled.tr`
  width: 100%;
`;
