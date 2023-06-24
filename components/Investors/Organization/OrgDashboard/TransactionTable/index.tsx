import React from "react";
import {
  Table,
  TableCell,
  TableCellStatus,
  TableContainer,
  TableHeader,
  TableRow,
} from "./styles";
import { TextButton } from "../assets/buttons";

const transactions = [
  {
    id: 1,
    description: "Renaissance Technology",
    date: "12/06/2022",
    status: "Success",
    amount: "$7,908.875",
  },
  {
    id: 2,
    description: "Rosadex Real Estates",
    date: "12/06/2022",
    status: "Pending",
    amount: "$7,908.875",
  },
  {
    id: 3,
    description: "Hexagon Rice Ltd",
    date: "12/06/2022",
    status: "Success",
    amount: "$7,908.875",
  },
  {
    id: 4,
    description: "Platinum Investments",
    date: "12/06/2022",
    status: "Pending",
    amount: "$7,908.875",
  },
  {
    id: 5,
    description: "Oni & Sons",
    date: "12/06/2022",
    status: "Success",
    amount: "$7,908.875",
  },
  {
    id: 6,
    description: "Megan Good Technologies",
    date: "12/06/2022",
    status: "Declined",
    amount: "$7,908.875",
  },
];

const DashboardTransactionTable = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Description</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {transactions.map((transaction, i) => (
            <TableRow key={i}>
                  <TableCell>{transaction.description}s</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>
                <TableCellStatus status={transaction.status}>
                  {transaction.status}
                </TableCellStatus>
              </TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                <TextButton>View</TextButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTransactionTable;
