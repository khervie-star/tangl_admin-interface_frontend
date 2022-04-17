import { useDispatch, useSelector } from "react-redux";
import { setOrganization } from "../../../../store/actions/session";
import { RootState } from "../../../../store/reducers";
import { ContinueButton } from "../../Assets/Buttons";
import { Card, Grid, TextBody, TextTitle } from "../../Assets/common";
import { PageBarTypes } from "../../types";

const selectCards = [
  {
    key: 1,
    content: "Startup",
    cardType: "STARTUP",
  },
  {
    key: 2,
    content: "Real Estate Firm",
    cardType: "REALFIRM",
  },
  {
    key: 3,
    content: "Private Equity Firm",
    cardType: "PRIFIRM",
  },
  {
    key: 4,
    content: "Venture Capital Firm",
    cardType: "VENTFIRM",
  },
];

const ContentOne = ({ page }: PageBarTypes) => {
  const { InvType } = useSelector((store: RootState) => ({
    InvType: store.OrganizationType.selectedType,
  }));

  const dispatch = useDispatch();
  const handleSelect = (cardType: string) => {
    dispatch(setOrganization(cardType));
  };
  return (
    <>
      <TextTitle>Choose Admin Type</TextTitle>
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
      <ContinueButton>Continue</ContinueButton>
    </>
  );
};

export default ContentOne;
