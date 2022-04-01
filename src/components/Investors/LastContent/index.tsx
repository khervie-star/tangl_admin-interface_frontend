import { useNavigate } from "react-router-dom";
import { PageBarTypes } from "../types";
import { TextTitle, TextBody, HomeButton } from "./styles";

const LastContent = ({ page, setPage }: PageBarTypes) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/", { replace: true })
    }
    

  return (
    <>
      <TextTitle>Submitted!</TextTitle>
      <TextBody>
        Your application has been successfully submitted and is awaiting
        approval.
      </TextBody>
      <HomeButton onClick={handleClick}>Go to Dashboard</HomeButton>
    </>
  );
};

export default LastContent;
