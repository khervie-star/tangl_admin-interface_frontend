import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../../../hooks";
import { individualFowardRoute } from "../../../../../store/actions";
import { ContinueButton } from "../../../Assets/Buttons";
import {
  ActionIconWrap,
  ActionWrap,
  Date,
  FormContainer,
  Input,
  Label,
  LabelFlex,
  ProofContainer,
  Row,
  TextTitle,
} from "../../../Assets/common";
import { EditIcon, RemoveIcon } from "../../../Assets/Icons";
import { PageBarTypes } from "../../../types";

const ContentSeven = ({ page }: PageBarTypes) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (page) dispatch(individualFowardRoute(page));
  };

  return (
    <>
      <TextTitle>Upload Government Identification</TextTitle>
      <FormContainer>
        <ProofContainer>
          <h1>National Identification Card</h1>
          <ActionWrap>
            <span>IMG1572022.jpeg</span>
            <ActionIconWrap>
              <EditIcon />
              <RemoveIcon />
            </ActionIconWrap>
          </ActionWrap>
        </ProofContainer>
        <Row>
          <LabelFlex flexPercentage="50%" padding="0rem 1rem 0rem 0rem">
            <Label>ID Card number</Label>
            <Input type={"text"} padding="0.555rem 1rem" />
          </LabelFlex>
          <LabelFlex flexPercentage="50%" padding="0rem 0rem 0rem 1rem">
            <Label>Expiry</Label>
            <Date padding=".5rem 1rem" type="date" />
          </LabelFlex>
        </Row>
      </FormContainer>
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentSeven;
