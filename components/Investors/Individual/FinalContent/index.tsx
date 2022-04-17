import Router from "next/router";
import { DarkContinueButton } from "../../Assets/Buttons";
import { TextBody, TextTitle } from "../../Assets/common";
import { FinalWrapper } from "./styles";

const FinalContent = () => {
  const handleClick = () => {
    Router.replace("/");
  };

  return (
    <FinalWrapper>
      <TextTitle>Submitted!</TextTitle>
      <TextBody>
        Your application has been successfully submitted and is awaiting
        approval.
      </TextBody>
      <div>
        <DarkContinueButton onClick={handleClick}>
          Go to Dashboard
        </DarkContinueButton>
      </div>
    </FinalWrapper>
  );
};

export default FinalContent;
