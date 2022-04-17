import {
  Click,
  ClickText,
  File,
  InputConatainer,
  RadioContainer,
  Title,
} from "./styles";
import { useState } from "react";
import { PageBarTypes } from "../../types";
import { useDispatch } from "react-redux";
import { individualFowardRoute } from "../../../../store/actions";
import { TextTitle } from "../../Assets/common";
import { CloudIcon } from "../../Assets/Icons";
import { ContinueButton } from "../../Assets/Buttons";

const ContentSix = ({ page }: PageBarTypes) => {
  const [imgFile, setImageFile] = useState("");

  const dispatch = useDispatch();
  const handleClick = () => {
    if (page) dispatch(individualFowardRoute(page));
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

export default ContentSix;
