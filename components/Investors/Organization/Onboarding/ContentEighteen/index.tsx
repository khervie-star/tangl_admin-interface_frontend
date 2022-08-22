import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { ContinueButton } from "../../../Assets/Buttons";
import {
  Date,
  FormContainer,
  Input,
  CardLabel,
  Label,
  LabelComment,
  LabelFlex,
  Row,
  BorderedInput,
  BorderedTextField,
  TextBody,
  TextTitle,
} from "../../../Assets/common";
import { FundraisingFormTitle } from "./styles";
import { PageBarTypes } from "../../../types";

const ContentEighteen = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  return (
    <>
      <TextTitle>Fundraising Questionnaire</TextTitle>
      <FundraisingFormTitle>
        Section B - Startup Information
      </FundraisingFormTitle>
      <FormContainer>
        <CardLabel>
          <Row>
            <span>What does your startup do? (50 characters)</span>
          </Row>
        </CardLabel>
        <BorderedInput type="text" placeholder="Type or paste here" />

        <CardLabel>
          <Row>
            <span>
              What does your startup do? (Elevator pitch 250 characters)
            </span>
          </Row>
        </CardLabel>
        <BorderedTextField
          type="text"
          placeholder="Type or paste here"
          rows={4}
        />

        <CardLabel>
          <Row>
            <span>
              What does your startup do? (Elevator pitch 250 characters)
            </span>
          </Row>
        </CardLabel>
        <BorderedTextField
          type="text"
          placeholder="Type or paste here"
          rows={4}
        />
      </FormContainer>
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentEighteen;
