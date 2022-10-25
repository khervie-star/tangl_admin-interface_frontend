import { useDispatch } from "react-redux";
import { Click, ClickText, File } from "./styles";
import { organizationFowardRoute } from "../../../../../store/actions";
import { ContinueButton } from "../../../Assets/Buttons";
import {
  FormContainer,
  Input,
  Label,
  LabelFlex,
  Row,
  Select,
  TextTitle,
} from "../../../Assets/common";
import { PageBarTypes } from "../../../types";
import { useState } from "react";
import { CloudIcon } from "../../../Assets/Icons";
import { useAppDispatch } from "../../../../../hooks";

const ContentNine = ({ page }: PageBarTypes) => {
  const dispatch = useAppDispatch();
  const [imgFile, setImageFile] = useState("");

  const handleClick = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  const handleChange = (event: any) => {
    setImageFile(event.currentTarget.files[0].name);
  };

  return (
    <>
      <TextTitle>Upload proof of address</TextTitle>
      <File>
        <Click>
          <ClickText>
            <h1>Upload ID image</h1>
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
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentNine;
