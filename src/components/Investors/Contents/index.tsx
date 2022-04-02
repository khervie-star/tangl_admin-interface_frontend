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
import ContentTwelve from "../ContentTwelve";
import ContentTwo from "../ContentTwo";
import FunctionCard from "../FunctionCard";
import LastContent from "../LastContent";
import PageBar from "../PageBar";
import { PageBarTypes } from "../types";
import { ButtonWrap, ContentWrapper, Pad } from "./styles";

const Content = ({ page, setPage }: PageBarTypes) => {
  const handleClick = () => {
    if (page && setPage) {
      setPage(page - 1);
    }
  };
  return (
    <ContentWrapper>
      {page !== 13 && (
        <ButtonWrap>
          <BackButton onClick={handleClick} />
        </ButtonWrap>
      )}
      <Pad>
        {page !== 13 && <PageBar page={page} />}
        {page === 1 && <ContentOne page={page} setPage={setPage} />}
        {page === 2 && <ContentTwo page={page} setPage={setPage} />}
        {page === 3 && <ContentThree page={page} setPage={setPage} />}
        {page === 4 && <ContentFour page={page} setPage={setPage} />}
        {page === 5 && <ContentFive page={page} setPage={setPage} />}
        {page === 6 && <ContentSix page={page} setPage={setPage} />}
        {page === 7 && <ContentSeven page={page} setPage={setPage} />}
        {page === 8 && <ContentEight page={page} setPage={setPage} />}
        {page === 9 && <ContentNine page={page} setPage={setPage} />}
        {page === 10 && <ContentTen page={page} setPage={setPage} />}
        {page === 11 && <ContentEleven page={page} setPage={setPage} />}
        {page === 12 && <ContentTwelve page={page} setPage={setPage} />}
        
      </Pad>
      {page === 13 && <div><LastContent /></div>}
      {page && (page > 1 && page !== 13) && (
        <div>
          <FunctionCard page={page} />
        </div>
      )}
    </ContentWrapper>
  );
};

export default Content;
