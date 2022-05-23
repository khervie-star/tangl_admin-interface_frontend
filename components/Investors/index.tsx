import { ContinueButton } from "./Assets/Buttons";
import { Card, Grid, TextBody, TextTitle } from "./Assets/common";
import { useDispatch, useSelector } from "react-redux";
import { setInvestor } from "../../store/actions/session";
import { RootState } from "../../store/reducers";
import Router from "next/router";

const selectCards = [
  {
    key: 1,
    content: "Investor (High-net-worth)",
    cardType: "IND",
  },
  {
    key: 2,
    content: "Create Admin Account",
    cardType: "ORG",
  },
];

const InvestorSelect = () => {
  const { InvType } = useSelector((store: RootState) => ({
    InvType: store.InvestorType.selectedType,
  }));

  const dispatch = useDispatch();
  const handleSelect = (cardType: string) => {
    dispatch(setInvestor(cardType));
  };

  const handleClick = () => {
    InvType && InvType === "IND"
      ? Router.push("/Investor/Individual/Onboarding")
      : Router.push("/Investor/Organization/Onboarding");
  };

  return (
    <>
      <TextTitle>Welcome to the registration platform</TextTitle>
      <TextBody>
        To begin with, kindly choose how you want to register.
      </TextBody>
      <Grid>
        {selectCards.map((card) => {
          return (
            <Card
              key={card.key}
              active={InvType === card.cardType && true}
              onClick={() => handleSelect(card.cardType)}
            >
              <p>{card.content}</p>
            </Card>
          );
        })}
      </Grid>
      <ContinueButton onClick={handleClick} disabled={!InvType && true}>
        Continue
      </ContinueButton>
    </>
  );
};

export default InvestorSelect;
