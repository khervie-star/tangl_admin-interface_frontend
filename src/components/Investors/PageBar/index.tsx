import { PageBarTypes } from "../types";
import { FlowBar, FlowCircle, FlowWrap } from "./styles";


const PageBar = ({page}: PageBarTypes) => {
  return (
    <>
      {page && page < 6 ? (
        <FlowWrap>
          <FlowCircle active={page > 0 ? true : false} page={page}></FlowCircle>
          <FlowBar active={page > 1 ? true : false} page={page}></FlowBar>
          <FlowCircle active={page > 1 ? true : false} page={page}></FlowCircle>
          <FlowBar active={page > 2 ? true : false} page={page}></FlowBar>
          <FlowCircle active={page > 2 ? true : false} page={page}></FlowCircle>
          <FlowBar active={page > 3 ? true : false} page={page}></FlowBar>
          <FlowCircle active={page > 3 ? true : false} page={page}></FlowCircle>
        </FlowWrap>
      ) : page && (
        <FlowWrap>
          <FlowCircle
            active={page > 5 ? true : false}
            page={page}
            pending
          ></FlowCircle>
          <FlowBar active={page > 7 ? true : false} page={page}></FlowBar>
          <FlowCircle active={page > 8 ? true : false} page={page}></FlowCircle>
          <FlowBar active={page > 9 ? true : false} page={page}></FlowBar>
          <FlowCircle active={page > 9 ? true : false} page={page}></FlowCircle>
        </FlowWrap>
      )}
    </>
  );
};

export default PageBar;
