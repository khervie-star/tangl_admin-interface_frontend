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
  CardLabel,
} from "../../../Assets/common";
import { PageBarTypes } from "../../../types";
import { useDispatch } from "react-redux";
import { organizationFowardRoute } from "../../../../../store/actions";
import { ContinueButton } from "../../../Assets/Buttons";
import { CloudIcon, EditIcon, RemoveIcon } from "../../../Assets/Icons";
import { Click, ClickText, File } from "../ContentSeven/styles";
import { helper } from "../../../../../utils/helper";
import Image from "next/image";
import { useAppDispatch } from "../../../../../hooks";

const ContentTwelve = ({ page }: PageBarTypes) => {
  const [businessRegImgFile, setImageFile] = useState<fileTypes>({});

  const dispatch = useAppDispatch();

  type fileTypes = {
    name?: string;
    size?: any;
  };

  const handleClick = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };

  const handleChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };

  const deleteImage = () => {
    setImageFile({});
  };

  const editImage = () => {
    null;
  };

  return (
    <>
      <TextTitle>Upload proof of business registration</TextTitle>
      {businessRegImgFile ? (
        <>
          <Click>
            <ClickText>
              <p>{businessRegImgFile.name}</p>
              <p>{helper.formatBytes(businessRegImgFile.size)}</p>
            </ClickText>
            <div>
              {/* <Image
                src={URL.createObjectURL(businessRegImgFile)}
                alt=""
                width={"107px"}
                height="70px"
              /> */}
            </div>
            <div onClick={editImage}>
              <File>
                <EditIcon />
                <input type="file" onChange={handleChange} />
              </File>
            </div>
            <div onClick={deleteImage}>
              <RemoveIcon />
            </div>
          </Click>
        </>
      ) : (
        <>
          <File>
            <Click>
              <ClickText>
                <h1>Upload photo</h1>
                {businessRegImgFile ? (
                  <p>{businessRegImgFile}</p>
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
        </>
      )}
      <FormContainer>
        <Label>
          <Row>
            <CardLabel>Registration Number</CardLabel>
          </Row>
        </Label>
        <Input type="text" />
        <Row>
          <LabelFlex flexPercentage="50%" padding="0rem 0rem 0rem 0rem">
            <CardLabel>Country of Business Registration</CardLabel>
            <Select smaller>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Nigeria</option>
            </Select>
          </LabelFlex>
          <LabelFlex flexPercentage="50%" padding="0rem 0rem 0rem 1rem">
            <CardLabel>State of Business Registration</CardLabel>
            <Select smaller>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Nigeria</option>
            </Select>
          </LabelFlex>
        </Row>
        <CardLabel>
          <Row>
            <span>Office Address</span>
          </Row>
        </CardLabel>
        <Input type="text" />
        <Row>
          <LabelFlex flexPercentage="50%" padding="0rem 0rem 0rem 0rem">
            <CardLabel>
              <Row>
                <span>City/Province</span>
              </Row>
            </CardLabel>
            <Input type="text" placeholder="Enter here" />
          </LabelFlex>
          <LabelFlex flexPercentage="50%" padding="0rem 0rem 0rem 1rem">
            <CardLabel>
              <Row>
                <span>Zip Code</span>
              </Row>
            </CardLabel>
            <Input type="text" placeholder="xxxx" />
          </LabelFlex>
        </Row>
      </FormContainer>
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};

export default ContentTwelve;
