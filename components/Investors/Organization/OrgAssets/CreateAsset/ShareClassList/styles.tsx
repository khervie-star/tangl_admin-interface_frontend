import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const HeaderText = styled.h5`
  color: var(--black-40, #a0aaba);
  font-family: Outfit;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.4px;
  margin: 0;
  padding: 0;
  //   margin-bottom: 40px;
`;

export const ShareClassTable = styled.div``;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #a0aaba;
`;

export const TableHeader = styled.th`
  background-color: transparent;
  border: 1px solid #a0aaba;
  padding: 12px 20px;
  color: var(--black-40, #a0aaba);
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const TableCell = styled.td`
  padding: 12px 20px;
  border: 1px solid #a0aaba;
  color: var(--black-70, #43566a);
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.1px;
`;

export const TableRow = styled.tr``;

export const ActionButton = styled.div`
  color: var(--blue-100, #007afb);
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.1px;
  cursor: pointer;
`;

export const NewShareClassButton = styled.button`
  border-radius: 4px;
  border: 1px solid var(--black-70, #43566a);
  background: transparent;

  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: var(--black-80, #324a64);
  text-align: center;

  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.1px;

  font-feature-settings: "liga" off;
  color: #ffffff;
  border: 0;
  cursor: pointer;

  margin: 40px 0;
`;
