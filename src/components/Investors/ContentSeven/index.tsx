import { ContinueButton } from "../Assets/Buttons";
import {
  Click,
  ClickText,
  File,
  ImgSelect,
  InputConatainer,
  RadioContainer,
  TextTitle,
  Title,
} from "./styles";
import { PageBarTypes } from "../types";
import { CloudIcon } from "../Assets/Icons";
import { useState } from "react";

const ContentSeven = ({ page, setPage }: PageBarTypes) => {
  const [imgFile, setImageFile] = useState("");

  const handleClick = () => {
    if (page && setPage) {
      setPage(++page);
    }
  };

  const handleChange = (event: any) => {
    setImageFile(event.currentTarget.files[0].name);
  };

  return (
    <>
      <TextTitle>Upload Government Identification</TextTitle>
      <form onSubmit={handleClick}>
        <InputConatainer>
          <Title>Type of ID</Title>
          <RadioContainer>
            <input type="radio" value={"nationalID"} />
            <label>National Identification Card</label>
          </RadioContainer>
          <RadioContainer>
            <input type="radio" value={"driversLicense"} />
            <label>Driver’s license</label>
          </RadioContainer>
          <RadioContainer>
            <input type="radio" value={"thirdOption"} />
            <label>Third option</label>
          </RadioContainer>
        </InputConatainer>
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
        <ContinueButton>Continue</ContinueButton>
      </form>
    </>
  );
};

export default ContentSeven;
