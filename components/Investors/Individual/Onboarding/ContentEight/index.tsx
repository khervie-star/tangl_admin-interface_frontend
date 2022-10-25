import { useDispatch } from "react-redux";
import { Click, ClickText, File } from "./styles";
import { individualFowardRoute } from "../../../../../store/actions";
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

const ContentEight = ({ page }: PageBarTypes) => {
  const dispatch = useAppDispatch();
  const [imgFile, setImageFile] = useState("");

  const handleClick = () => {
    if (page) dispatch(individualFowardRoute(page));
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
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentEight;
