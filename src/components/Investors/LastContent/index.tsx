import { useNavigate } from "react-router-dom";
import { TextTitle, TextBody, HomeButton } from "./styles";

const LastContent = () => {
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
