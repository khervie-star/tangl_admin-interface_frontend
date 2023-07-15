import { TickIcon } from "../../../../Assets/Icons";
import { PageBarTypes } from "../../../../types";
import {
  Function,
  CardWrap,
  Current,
  HeadWrap,
  Text,
  DropList,
} from "./styles";

const AssetFunctionCard = ({ page }: PageBarTypes) => {
  return (
    <CardWrap>
      <Function>
        <HeadWrap
          active={page && page == 1 ? true : false}
          completed={page && page > 1 ? true : false}>
          <span>Asset Type</span>
          <Current active={page && page == 1 ? true : false}>Current</Current>
          <TickIcon
            active={page && page > 1 ? true : false}
            display={page && page > 1 ? true : false}
          />
        </HeadWrap>
        <HeadWrap
          active={page && page >= 2 && page <= 3 ? true : false}
          completed={page && page > 3 ? true : false}>
          <span>Asset Information</span>
          <Current active={page && page >= 2 && page <= 3 ? true : false}>
            Current
          </Current>
          <TickIcon
            active={page && page > 3 ? true : false}
            display={page && (page < 2 || page > 3) ? true : false}
          />
        </HeadWrap>
        <HeadWrap
          active={page && page >= 4 && page <= 5 ? true : false}
          completed={page && page > 5 ? true : false}>
          <span>Share Class</span>
          <Current active={page && page >= 4 && page <= 5 ? true : false}>
            Current
          </Current>
          <TickIcon
            active={page && page > 5 ? true : false}
            display={page && (page < 4 || page > 5) ? true : false}
          />
        </HeadWrap>
        <HeadWrap
          active={page && page == 6 ? true : false}
          completed={page && page > 6 ? true : false}>
          <span>Asset Type</span>
          <Current active={page && page == 6 ? true : false}>Current</Current>
          <TickIcon
            active={page && page > 6 ? true : false}
            display={page && page > 6 ? true : false}
          />
        </HeadWrap>
      </Function>
    </CardWrap>
  );
};

export default AssetFunctionCard;
