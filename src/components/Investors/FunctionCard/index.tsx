import { TickIcon } from "../Assets/Icons";
import { PageBarTypes } from "../types";
import { CardWrap, Current, Function, HeadWrap } from "./styles";

const FunctionCard = ({page}: PageBarTypes) => {
  return (
    <CardWrap>
      <Function>
        <HeadWrap>
          <span>Registration</span>
          <Current active={page && page > 5 ? false : true}>Current</Current>
          <TickIcon active={page && page > 5 ? true : false}/>
        </HeadWrap>
        <HeadWrap>
          <span>KYC</span>
          <Current active={page && page > 5 && page < 11 ? true : false}>Current</Current>
          <TickIcon active={page && page > 5 && page < 11 ? false : true}/>
        </HeadWrap>
        <HeadWrap>
          <span>Security</span>
          <Current active={page && page > 10 ? true : false}>Current</Current>
          <TickIcon active={page && page > 10 ? false : true}/>
        </HeadWrap>
      </Function>
    </CardWrap>
  );
};

export default FunctionCard;
