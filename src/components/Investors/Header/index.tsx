import { BackButton } from "../Assets/Buttons";
import ContentOne from "../ContentOne";
import PageBar from "../PageBar";
import { PageBarTypes } from "../types";
import { ButtonWrap, HeaderWrapper, Pad } from "./styles";

const Header = ({ page, setPage }: PageBarTypes) => {
  const handleClick = () => {
    if (page && setPage) {
      setPage(page-1);
    }
  };
  return (
    <HeaderWrapper>
      <ButtonWrap>
        <BackButton onClick={handleClick} />
      </ButtonWrap>
      <Pad>
        <PageBar page={page} />
        {page === 1 && <ContentOne page={page} setPage={setPage} />}
      </Pad>
    </HeaderWrapper>
  );
};

export default Header;
