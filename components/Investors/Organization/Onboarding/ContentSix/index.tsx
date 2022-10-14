import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { ContinueButton } from "../../../Assets/Buttons";
import {
  CardLabel,
  Date,
  FormContainer,
  Input,
  Label,
  LabelComment,
  LabelFlex,
  Row,
  Select,
  TextBody,
  TextTitle,
} from "../../../Assets/common";
import { PageBarTypes } from "../../../types";

const ContentSix = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  return (
    <>
      <TextTitle>KYC</TextTitle>
      <TextBody>Kindly fill in your personal information below.</TextBody>
      <FormContainer>
        <Label>
          <Row>
            <CardLabel>First name</CardLabel>
            <LabelComment>{"*as shown on ID"}</LabelComment>
          </Row>
        </Label>
        <Input type="text" />
        <Label>
          <Row>
            <CardLabel>Last name</CardLabel>
            <LabelComment>{"*as shown on ID"}</LabelComment>
          </Row>
        </Label>
        <Input type="text" />
        <Row>
          <LabelFlex flexPercentage="50%" padding="0rem 1rem 0rem 0rem">
            <CardLabel>Date of Birth</CardLabel>
            <Date padding=".5rem 1rem" type="date" />
          </LabelFlex>
          <LabelFlex flexPercentage="50%" padding="0rem 0rem 0rem 1rem">
            <CardLabel>Nationality</CardLabel>
            <Select smaller>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Nigeria</option>
            </Select>
          </LabelFlex>
        </Row>
      </FormContainer>
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentSix;
