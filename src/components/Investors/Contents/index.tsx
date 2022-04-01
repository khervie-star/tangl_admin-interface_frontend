import { BackButton } from "../Assets/Buttons";
import ContentEight from "../ContentEight";
import ContentEleven from "../ContentEleven";
import ContentFive from "../ContentFive";
import ContentFour from "../ContentFour";
import ContentNine from "../ContentNine";
import ContentOne from "../ContentOne";
import ContentSeven from "../ContentSeven";
import ContentSix from "../ContentSix";
import ContentTen from "../ContentTen";
import ContentThree from "../ContentThree";
import ContentTwo from "../ContentTwo";
import FunctionCard from "../FunctionCard";
import PageBar from "../PageBar";
import { PageBarTypes } from "../types";
import { ButtonWrap, ContentWrapper, Pad } from "./styles";

const Content = ({ page, setPage }: PageBarTypes) => {
  const handleClick = () => {
    if (page && setPage) {
      setPage(page-1);
    }
  };
  return (
    <ContentWrapper>
      <ButtonWrap>
        <BackButton onClick={handleClick} />
      </ButtonWrap>
      <Pad>
        <PageBar page={page} />
        {page === 1 && <ContentOne page={page} setPage={setPage} />}
        {page === 2 && <ContentTwo page={page} setPage={setPage}/>}
        {page === 3 && <ContentThree page={page} setPage={setPage}/>}
        {page === 4 && <ContentFour page={page} setPage={setPage}/>}
        {page === 5 && <ContentFive page={page} setPage={setPage}/>}
        {page === 6 && <ContentSix page={page} setPage={setPage}/>}
        {page === 7 && <ContentSeven page={page} setPage={setPage}/>}
        {page === 8 && <ContentEight page={page} setPage={setPage}/>}
        {page === 9 && <ContentNine page={page} setPage={setPage}/>}
        {page === 10 && <ContentTen page={page} setPage={setPage}/>}
        {page === 11 && <ContentEleven page={page} setPage={setPage}/>}
      </Pad>
      {page && page > 1 && <FunctionCard page={page}/>}
    </ContentWrapper>
  );
};

export default Content;
