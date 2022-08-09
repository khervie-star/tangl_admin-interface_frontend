import { useDispatch, useSelector } from "react-redux";
import {
  individualFowardRoute,
  organizationBackwardRoute,
  organizationFowardRoute,
} from "../../../../../store/actions";
import { setOrganization } from "../../../../../store/actions/session";
import { RootState } from "../../../../../store/reducers";
import { ContinueButton } from "../../../Assets/Buttons";
import {
  CheckboxContainer,
  TextTitle,
  Row,
  LabelFlex,
} from "../../../Assets/common";

import { PageBarTypes } from "../../../types";
import { CardLabel, SelectInvestmentNature } from "./styles";

const investmentVehicleCards = [
  {
    key: 1,
    content: "Money Market securities",
    cardType: "MMSEC",
  },
  {
    key: 2,
    content: "Not  rated",
    cardType: "NRATED",
  },
  {
    key: 3,
    content: "Bonds",
    cardType: "BONDS",
  },
  {
    key: 4,
    content: "Forex market",
    cardType: "FXMRKT",
  },
  {
    key: 5,
    content: "Convertible bonds",
    cardType: "CNVBONDS",
  },
  {
    key: 6,
    content: "Swaps",
    cardType: "SWAPS",
  },
  {
    key: 7,
    content: "Listed shares",
    cardType: "LSTSHRS",
  },
  {
    key: 8,
    content: "IFT",
    cardType: "IFT",
  },
  {
    key: 9,
    content: "Unlisted shares",
    cardType: "UNLSTSHRS",
  },
  {
    key: 10,
    content: "Other derivative product",
    cardType: "OTHDRVPRDT",
  },
  {
    key: 11,
    content: "UCITS",
    cardType: "UCITS",
  },
  {
    key: 12,
    content: "Other",
    cardType: "OTHR",
  },
  {
    key: 13,
    content: "FIA",
    cardType: "FIA",
  },
];

const ContentFourteen = ({ page }: PageBarTypes) => {
  const dispatch = useDispatch();
  const handleSelect = (cardType: string) => {
    dispatch(setOrganization(cardType));
  };
  const handleSubmit = () => {
    if (page) dispatch(organizationFowardRoute(page));
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextTitle>Investment Nature</TextTitle>
      <SelectInvestmentNature>
        <CardLabel>What Investment vehicle do you already use?</CardLabel>
        <Row flexWrap="wrap">
          {investmentVehicleCards.map((card) => {
            return (
              <LabelFlex
                flexPercentage="50%"
                padding="0rem 1rem 0rem 0rem"
                key={card.key}
              >
                <CheckboxContainer key={card.key}>
                  <input type="checkbox" name="select" value={card.cardType} />
                  <label>{card.content}</label>
                </CheckboxContainer>
              </LabelFlex>
            );
          })}
        </Row>
      </SelectInvestmentNature>
      <ContinueButton>Continue</ContinueButton>
    </form>
  );
};

export default ContentFourteen;
