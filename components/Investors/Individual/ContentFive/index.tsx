import { useDispatch } from "react-redux";
import { individualFowardRoute } from "../../../../store/actions";
import { ContinueButton } from "../../Assets/Buttons";
import { FormContainer, Input, Label, LabelComment, LabelFlex, Row, Select, TextBody, TextTitle } from "../../Assets/common";
import { PageBarTypes } from "../../types";

const ContentFive = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (page) dispatch(individualFowardRoute(page));
  };

  return (
    <>
      <TextTitle>KYC</TextTitle>
      <TextBody>Kindly fill in your personal information below.</TextBody>
      <FormContainer>
        <Label>
          <Row>
            <span>First name</span>
            <LabelComment>{"*as shown on ID"}</LabelComment>
          </Row>
        </Label>
        <Input type="text"/>
        <Label>
          <Row>
            <span>Last name</span>
            <LabelComment>{"*as shown on ID"}</LabelComment>
          </Row>
        </Label>
        <Input type="text"/>
        <Row>
          <LabelFlex padding="0rem 1rem 0rem 0rem">
            <Label>Date of Birth</Label>
            <Input type="Date"/>
          </LabelFlex>
          <LabelFlex padding="0rem 0rem 0rem 1rem">
            <Label>Nationality</Label>
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

export default ContentFive;
