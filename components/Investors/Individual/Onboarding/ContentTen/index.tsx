import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../../../hooks";
import { individualFowardRoute } from "../../../../../store/actions";
import { ContinueButton, DarkContinueButton } from "../../../Assets/Buttons";
import { TextTitle } from "../../../Assets/common";
import { PageBarTypes } from "../../../types";
import { InputConatainer, RadioContainer, Title } from "./styles";


const ContentTen = ({ page }: PageBarTypes) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (page) dispatch(individualFowardRoute(page));
  };

  return (
    <>
      <TextTitle>Third-party Authentication </TextTitle>
      <InputConatainer>
          <Title>Choose third party authentication app</Title>
          <RadioContainer>
            <input type="radio" name="select" value={"nationalID"} />
            <label>Google Authentication App</label>
          </RadioContainer>
          <RadioContainer>
            <input type="radio" name="select" value={"driversLicense"} />
            <label>Authy</label>
          </RadioContainer>
          <RadioContainer>
            <input type="radio" name="select" value={"thirdOption"} />
            <label>None</label>
          </RadioContainer>
       </InputConatainer>
      <ContinueButton onClick={handleClick}>Skip</ContinueButton>
    </>
  );
};

export default ContentTen;
