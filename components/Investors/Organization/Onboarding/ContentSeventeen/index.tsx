import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { ContinueButton } from "../../../Assets/Buttons";
import {
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
import { FundraisingFormTitle } from "./styles";
import { PageBarTypes } from "../../../types";
import { useAppDispatch } from "../../../../../hooks";

const ContentSix = ({ page }: PageBarTypes) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  return (
    <>
      <TextTitle>Fundraising Questionnaire</TextTitle>
      <FundraisingFormTitle>Section A - Basic Data</FundraisingFormTitle>
      <FormContainer>
        <Row>
          <LabelFlex flexPercentage="50%" padding="0rem 1rem 0rem 0rem">
            <Label>First name</Label>
            <Input type="text" />
          </LabelFlex>
          <LabelFlex flexPercentage="50%" padding="0rem 0rem 0rem 1rem">
            <Label>Last name</Label>
            <Input type="text" />
          </LabelFlex>
        </Row>
        <Label>
          <Row>
            <span>Company name</span>
          </Row>
        </Label>
        <Input type="text" />
        <Label>
          <Row>
            <span>Email address</span>
          </Row>
        </Label>
        <Input type="text" />
        <Label>
          <Row>
            <span>Website link</span>
          </Row>
        </Label>
        <Input type="text" />

        <Label>
          <Row>
            <span>Your Role at above company</span>
          </Row>
        </Label>
        <Input type="text" />
        <Row>
          <LabelFlex flexPercentage="50%" padding="0rem 0rem 0rem 0rem">
            <Label>Country of residence</Label>
            <Select>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Nigeria</option>
            </Select>
          </LabelFlex>
          <LabelFlex flexPercentage="50%" padding="0rem 0rem 0rem 1rem">
            <Label>City of residence</Label>
            <Select>
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
