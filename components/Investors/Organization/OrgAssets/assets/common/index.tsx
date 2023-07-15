import styled from "styled-components";
import { UploadIcon, ArrowDownIcon } from "../Icons";

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AssetTitle = styled.h1`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.4px;
  color: #324a64;
  margin: 0;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #a0aaba;
  padding: 8ppx 0;
  font-family: "Outfit";
  font-weight: 14px;
  line-height: 17.6px;
  color: #43566a;
  margin-top: 12px;
  ::placeholder {
    color: #a0aaba;
  }
  :focus {
    outline: 0;
  }
`;

export const Textfield = styled.textarea`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #a0aaba;
  padding: 8ppx 0;
  font-family: "Outfit";
  font-weight: 14px;
  line-height: 17.6px;
  margin-top: 12px;
  color: #43566a;
  ::placeholder {
    color: #a0aaba;
  }
  :focus {
    outline: 0;
  }
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #43566a;
`;

export const File = styled.div`
  border-radius: 8px;
  border: 1px solid var(--black-20, #e1e8f4);
  background: #fff;
  display: flex;
  padding: 8px 34px;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  input[type="file"] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
`;

export const FileType = styled.label`
  color: var(--black-40, #a0aaba);
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
`;

export const Select = styled.select`
  appearance: none;
  display: flex;
  padding: 18px 37px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--black-20, #e1e8f4);
  color: var(--black-40, #a0aaba);
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;

  background-image: url("data:image/svg+xml;charset=utf8," + encodeURIComponent(
      ArrowDownIcon
    ));
  background-repeat: no-repeat;
  background-position: ;
  background-size: 16px;

  option {
    color: var(--black-40, #a0aaba);
    font-family: Outfit;
  }
  :focus {
    outline: none;
  }
`;

export const LabeledInput = ({
  label,
  name,
  value,
  placeholder,
  onChange,
}: any) => {
  return (
    <div style={{ width: "100%" }}>
      <InputLabel>{label}</InputLabel>
      <Input
        placeholder={"Enter here"}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

export const LabeledTextfield = ({
  label,
  name,
  value,
  placeholder,
  onChange,
}: any) => {
  return (
    <div style={{ width: "100%" }}>
      <InputLabel>{label}</InputLabel>
      <Textfield
        placeholder={"Enter here"}
        onChange={onChange}
        value={value}
        name={name}
        rows={1}
      />
    </div>
  );
};

export const FilePicker = ({ onChange }: any) => {
  return (
    <File>
      <Col>
        <InputLabel>Choose file</InputLabel>
        <FileType>pdf,docx</FileType>
      </Col>
      <UploadIcon />
      <input type="file" onChange={onChange} accept="*.pdf, *.doc, *.docx" />
    </File>
  );
};
