import { ContinueButton } from "../Assets/Buttons";
import { PageBarTypes } from "../types";
import { Card, Grid, TextBody, TextTitle } from "./styles";

const ContentOne = ({ page, setPage }: PageBarTypes) => {
  const handleClick = () => {
    if (page && setPage) {
      setPage(++page);
    }
  };

  return (
    <>
      <TextTitle>Welcome to the registration platform</TextTitle>
      <TextBody>
        To begin with, kindly choose how you want to register.
      </TextBody>
      <Grid>
        <Card>
          <p>Investor (High-net-worth)</p>
        </Card>
        <Card>
          <p>Startup</p>
        </Card>
        <Card>
          <p>Real Estate Firm</p>
        </Card>
        <Card>
          <p>Special Purpose Investment vehicle</p>
        </Card>
        <Card>
          <p>Private Equity Firm</p>
        </Card>
        <Card>
          <p>Venture Capital Firm</p>
        </Card>
      </Grid>
      <ContinueButton onClick={handleClick}>Continue</ContinueButton>
    </>
  );
};
export default ContentOne;
