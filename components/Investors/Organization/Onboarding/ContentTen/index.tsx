import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { DarkContinueButton } from "../../../Assets/Buttons";
import {
  FormContainer,
  TextTitle,
  ProofContainer,
  ActionWrap,
  ActionIconWrap,
  Row,
  LabelFlex,
  Label,
  Select,
  Input,
} from "../../../Assets/common";
import { EditIcon, RemoveIcon } from "../../../Assets/Icons";
import { PageBarTypes } from "../../../types";

const ContentTen = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  return (
    <>
      <TextTitle>Upload proof of address</TextTitle>
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
      </FormContainer>
      <FormContainer>
        <Row>
          <LabelFlex padding="0rem 1rem 0rem 0rem">
            <Label>Country</Label>
            <Select>
              <option>United Kingdom</option>
            </Select>
          </LabelFlex>
          <LabelFlex padding="0rem 0rem 0rem 1rem">
            <Label>State</Label>
            <Select>
              <option>London</option>
            </Select>
          </LabelFlex>
        </Row>
        <Label>Address</Label>
        <Input type="text" />
        <Row>
          <LabelFlex padding="0rem 1rem 0rem 0rem">
            <Label>City/Province</Label>
            <Input type={"text"} />
          </LabelFlex>
          <LabelFlex padding="0rem 0rem 0rem 1rem">
            <Label>ZipCode</Label>
            <Input type={"text"} />
          </LabelFlex>
        </Row>
      </FormContainer>
      <DarkContinueButton onClick={handleClick}>Complete</DarkContinueButton>
    </>
  );
};

export default ContentTen;
