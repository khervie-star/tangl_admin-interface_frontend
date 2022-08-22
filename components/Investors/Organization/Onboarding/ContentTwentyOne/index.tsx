import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { DarkContinueButton } from "../../../Assets/Buttons";
import { CloudIcon } from "../../../Assets/Icons";
import {
  Date,
  FormContainer,
  Input,
  Label,
  LabelComment,
  LabelFlex,
  Row,
  Select,
  TextBody,
  TextTitle,
} from "../../../Assets/common";
import { PageBarTypes } from "../../../types";
import { FundraisingFormTitle, Click, ClickText, File, Title } from "./styles";
import { useState } from "react";

const ContentTwentyOne = ({ page }: PageBarTypes) => {
  const [pitchDeck, setPitchDeck] = useState("");
  const [financials, setFinancialsFile] = useState("");
  const [additionalDocuments, setAdditionalDocuments] = useState("");

  const dispatch = useDispatch();
  const handleClick = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  const handlePitchDeckChange = (event: any) => {
    setPitchDeck(event.currentTarget.files[0].name);
  };

  const handleFinancialsChange = (event: any) => {
    setFinancialsFile(event.currentTarget.files[0].name);
  };

  const handleAdditionalDocumentsChange = (event: any) => {
    setAdditionalDocuments(event.currentTarget.files[0].name);
  };

  return (
    <>
      <TextTitle>Fundraising Questionnaire</TextTitle>

      <FundraisingFormTitle>Section E - Documents</FundraisingFormTitle>

      <File>
        <Click>
          <ClickText>
            <h1>Upload Pitchdeck</h1>
            {pitchDeck ? (
              <p>{pitchDeck}</p>
            ) : (
              <p>pdf; not more than 5Mb in size</p>
            )}
          </ClickText>
          <div>
            <CloudIcon />
          </div>
        </Click>
        <input type="file" onChange={handlePitchDeckChange} />
      </File>

      <File>
        <Click>
          <ClickText>
            <h1>Upload Financials</h1>
            {financials ? (
              <p>{financials}</p>
            ) : (
              <p>jpeg, png, jpg; not more than 5Mb in size</p>
            )}
          </ClickText>
          <div>
            <CloudIcon />
          </div>
        </Click>
        <input type="file" onChange={handleFinancialsChange} />
      </File>

      <File>
        <Click>
          <ClickText>
            <h1>Upload Additional Documents</h1>
            {additionalDocuments ? (
              <p>{additionalDocuments}</p>
            ) : (
              <p>
                Merge multiple documents into a single pdf; not more than 5Mb in
                size
              </p>
            )}
          </ClickText>
          <div>
            <CloudIcon />
          </div>
        </Click>
        <input type="file" onChange={handleAdditionalDocumentsChange} />
      </File>

      <DarkContinueButton onClick={handleClick}>
        Review Fundraising Questionnaire
      </DarkContinueButton>
    </>
  );
};

export default ContentTwentyOne;
