import React from "react";
import {
  ActionButton,
  HeaderText,
  NewShareClassButton,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  Wrapper,
} from "./styles";
import { BackTextButton, GenButton } from "../../assets/buttons";
import { FlexBetween } from "../../assets/common";

const shareClasses = [
  {
    id: 1,
    name: "Class A",
    isin_code: "XS2347890XX",
    init_sub_cutoff: "20/03/2022",
  },
  {
    id: 2,
    name: "Class B",
    isin_code: "XS2347890XX",
    init_sub_cutoff: "20/03/2022",
  },
  {
    id: 3,
    name: "Class C",
    isin_code: "XS2347890XX",
    init_sub_cutoff: "20/03/2022",
  },
];

const ShareClassList = ({ handleForward, handleBack }: any) => {
  const handleOnClick = () => {
    handleForward();
  };
  return (
    <>
      <Wrapper>
        <HeaderText>Share Classes List</HeaderText>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Share class</TableHeader>
              <TableHeader>ISIN Code</TableHeader>
              <TableHeader>Initial subscription cut off day</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {shareClasses.map((shareClass, i) => (
              <TableRow key={shareClass.id}>
                <TableCell>{shareClass.name}</TableCell>
                <TableCell>{shareClass.isin_code}</TableCell>
                <TableCell>{shareClass.init_sub_cutoff}</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
        <NewShareClassButton>Create new share class</NewShareClassButton>
        <FlexBetween>
          <BackTextButton onClick={handleBack}>Back</BackTextButton>
          <GenButton onClick={handleOnClick}>Next: Review</GenButton>
        </FlexBetween>
      </Wrapper>
    </>
  );
};

export default ShareClassList;
