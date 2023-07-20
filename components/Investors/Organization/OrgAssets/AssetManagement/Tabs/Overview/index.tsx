import React from "react";
import {
  ShareClassContainer,
  ShareClassHeader,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from "./styles";
import { GenButton } from "../../../assets/buttons";
import {
  TableSection,
  TableTitle,
  TableTitleText,
} from "../../../assets/common";

const shareClassList = [
  {
    id: 1,
    shareClass: "Class A",
    nav: "$6,987,098",
    fund: "35%",
  },
  {
    id: 2,
    shareClass: "Class C    ",
    nav: "$4,987,098",
    fund: "26%",
  },
  {
    id: 3,
    shareClass: "Class D",
    nav: "$87,098   ",
    fund: "26%",
  },
  {
    id: 4,
    shareClass: "Class B",
    nav: "$87,098",
    fund: "18%",
  },
];

const Overview = () => {
  return (
    <div>
      {/* Share Class */}
      <TableSection>
        <TableTitle>
          <TableTitleText>Share Classes Transactions</TableTitleText>
        </TableTitle>
      </TableSection>
    </div>
  );
};

export default Overview;
