import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { DarkContinueButton } from "../../../Assets/Buttons";
import { CloudIcon, EditIcon, RemoveIcon } from "../../../Assets/Icons";
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
import { useRef, useState } from "react";
import { helper } from "../../../../../utils/helper";
import { CgNametag } from "react-icons/cg";
import { useAppDispatch } from "../../../../../hooks";

const ContentTwentyOne = ({ page }: PageBarTypes) => {
  const inputRef = useRef(null);
  const [pitchDeck, setPitchdeck] = useState<fileTypes>({});
  const [financials, setFinancialsFile] = useState<fileTypes>({});
  const [additionalDocuments, setAdditionalDocuments] = useState<fileTypes>({});

  const dispatch = useAppDispatch();

  type fileTypes = {
    name?: string;
    size?: any;
  };

  const handleClick = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  const handlePitchdeckChange = (event: any) => {
    setPitchdeck(event.currentTarget.files[0]);
  };

  const handleFinancialsChange = (event: any) => {
    setFinancialsFile(event.currentTarget.files[0]);
  };

  const handleAdditionalDocumentsChange = (event: any) => {
    setAdditionalDocuments(event.currentTarget.files[0]);
  };

  return (
    <>
      <TextTitle>Fundraising Questionnaire</TextTitle>

      <FundraisingFormTitle>Section E - Documents</FundraisingFormTitle>
      {pitchDeck ? (
        <>
          <Click>
            <ClickText>
              <h1> Pitchdeck</h1>
              <p>{pitchDeck.name}</p>
              <p>{helper.formatBytes(pitchDeck.size)}</p>
            </ClickText>

            <div>
              <File>
                <EditIcon />
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handlePitchdeckChange}
                />
              </File>
            </div>
            <div onClick={() => setPitchdeck({})}>
              <RemoveIcon />
            </div>
          </Click>
        </>
      ) : (
        <File>
          <Click>
            <ClickText>
              <h1>Upload Pitchdeck</h1>
              <p>pdf; not more than 5Mb in size</p>
            </ClickText>
            <div>
              <CloudIcon />
            </div>
          </Click>
          <input
            type="file"
            onChange={handlePitchdeckChange}
            accept="application/pdf"
          />
        </File>
      )}

      {financials ? (
        <>
          <Click>
            <ClickText>
              <h1> Financials</h1>
              <p>{financials.name}</p>
              <p>{helper.formatBytes(financials.size)}</p>
            </ClickText>

            <div>
              <File>
                <EditIcon />
                <input type="file" onChange={handleFinancialsChange} />
              </File>
            </div>
            <div onClick={() => setFinancialsFile({})}>
              <RemoveIcon />
            </div>
          </Click>
        </>
      ) : (
        <File>
          <Click>
            <ClickText>
              <h1>Upload Financials</h1>
              <p>jpeg, png, jpg; not more than 5Mb in size</p>
            </ClickText>
            <div>
              <CloudIcon />
            </div>
          </Click>
          <input
            type="file"
            onChange={handleFinancialsChange}
            accept="image/png, image/jpeg, image/jpg"
          />
        </File>
      )}

      {additionalDocuments ? (
        <>
          <Click>
            <ClickText>
              <h1> Additional Documents</h1>
              <p>{additionalDocuments.name}</p>
              <p>{helper.formatBytes(additionalDocuments.size)}</p>
            </ClickText>

            <div>
              <File>
                <EditIcon />
                <input type="file" onChange={handleAdditionalDocumentsChange} />
              </File>
            </div>
            <div onClick={() => setAdditionalDocuments({})}>
              <RemoveIcon />
            </div>
          </Click>
        </>
      ) : (
        <File>
          <Click>
            <ClickText>
              <h1>Upload Additional Documents</h1>
              <p>
                Merge multiple documents into a single pdf; not more than 5Mb in
                size
              </p>
            </ClickText>
            <div>
              <CloudIcon />
            </div>
          </Click>
          <input
            type="file"
            onChange={handleAdditionalDocumentsChange}
            accept="application/pdf"
          />
        </File>
      )}

      <DarkContinueButton onClick={handleClick}>
        Review Fundraising Questionnaire
      </DarkContinueButton>
    </>
  );
};

export default ContentTwentyOne;
