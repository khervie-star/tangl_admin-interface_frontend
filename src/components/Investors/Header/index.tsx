import { BackButton } from "../Assets/Buttons";
import ContentOne from "../ContentOne";
import PageBar from "../PageBar";
import { PageBarTypes } from "../types";
import { ButtonWrap, HeaderWrapper, Pad } from "./styles";

const Header = ({ page, setPage }: PageBarTypes) => {
  return (
    <HeaderWrapper>
      <ButtonWrap>
        <BackButton />
      </ButtonWrap>
      <Pad>
        <PageBar page={page} />
        {page === 1 && <ContentOne page={page} setPage={setPage} />}
      </Pad>
    </HeaderWrapper>
  );
};

export default Header;
