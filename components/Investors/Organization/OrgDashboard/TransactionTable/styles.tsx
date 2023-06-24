import styled, { css } from "styled-components";

export type StatusType = {
  status: string;
};

export const TableContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid var(--black-20, #e1e8f4);
  background: #fff;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
  color: var(--black-70, #43566a);
  font-size: 18px;
  font-family: Outfit;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.1px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 0;
  color: var(--black-70, #43566a);
  font-size: 16px;
  font-family: Outfit;
  font-weight: 500;
  line-height: 24px;
`;

export const TableCellStatus = styled.td`
  color: var(--green-100, #5ac179);
  font-size: 16px;
  font-family: Outfit;
  font-weight: 500;
  ${({ status }: StatusType) =>
    status === "Success" &&
    css`
      color: #5ac179;
    `}
  ${({ status }: StatusType) =>
    status === "Pending" &&
    css`
      color: #ffb524;
    `}
      ${({ status }: StatusType) =>
    status === "Declined" &&
    css`
      color: #cd8585;
    `}
`;
