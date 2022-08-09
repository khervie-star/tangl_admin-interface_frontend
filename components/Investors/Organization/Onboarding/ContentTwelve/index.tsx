import { InputConatainer, RadioContainer, Title } from "./styles";
import { useState } from "react";
import {
  FormContainer,
  Input,
  Label,
  LabelComment,
  LabelFlex,
  Row,
  Select,
  TextTitle,
  Date,
} from "../../../Assets/common";
import { PageBarTypes } from "../../../types";
import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { ContinueButton } from "../../../Assets/Buttons";
import { CloudIcon, EditIcon, RemoveIcon } from "../../../Assets/Icons";
import { Click, ClickText, File } from "../ContentSeven/styles";

const ContentTwelve = ({ page }: PageBarTypes) => {
  const [imgFile, setImageFile] = useState("");

  const dispatch = useDispatch();
  const handleClick = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  const handleChange = (event: any) => {
    setImageFile(event.currentTarget.files[0].name);
  };

  return (
    <>
      <TextTitle>Upload proof of business registration</TextTitle>
      <File>
        <Click>
          <ClickText>
            <h1>Upload photo</h1>
            {imgFile ? (
              <p>{imgFile}</p>
            ) : (
              <p>jpeg, png, jpg not more than 1M in size</p>
            )}
          </ClickText>
          <div>
            <CloudIcon />
          </div>
        </Click>
        <input type="file" onChange={handleChange} />
      </File>
      <FormContainer>
        <Label>
          <Row>
            <span>Registration Number</span>
          </Row>
        </Label>
        <Input type="text" />
        <Row>
          <LabelFlex flexPercentage="50%" padding="0rem 0rem 0rem 0rem">
            <Label>Country of Business Registration</Label>
            <Select>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Nigeria</option>
            </Select>
          </LabelFlex>
          <LabelFlex flexPercentage="50%" padding="0rem 0rem 0rem 1rem">
            <Label>State of Business Registration</Label>
            <Select>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Nigeria</option>
            </Select>
          </LabelFlex>
        </Row>
        <Label>
          <Row>
            <span>Office Address</span>
          </Row>
        </Label>
        <Input type="text" />
        <Row>
          <LabelFlex flexPercentage="50%" padding="0rem 0rem 0rem 0rem">
            <Label>
              <Row>
                <span>City/Province</span>
              </Row>
            </Label>
            <Input type="text" />
          </LabelFlex>
          <LabelFlex flexPercentage="50%" padding="0rem 0rem 0rem 1rem">
            <Label>
              <Row>
                <span>Zip Code</span>
              </Row>
            </Label>
            <Input type="text" />
          </LabelFlex>
        </Row>
      </FormContainer>
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentTwelve;
