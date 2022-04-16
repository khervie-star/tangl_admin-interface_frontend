import { BackButton } from "../Assets/Buttons.tsx";
import { Display, Pad } from "../Assets/common";
import PageBar from "../PageBar";
import ContentOne from "./ContentOne";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import FunctionCard from "./FunctionCard";

const IndividualContent = () => {
  const { IndPage } = useSelector((store: RootState) => ({
    IndPage: store.Individual.page,
  }));

  return (
    <>
      <Display>
        <div>
          <BackButton />
        </div>
        <Pad>
          {IndPage !== 13 && <PageBar page={IndPage} />}
          {IndPage === 2 && <ContentOne page={IndPage} />}
        </Pad>
        {IndPage && IndPage > 1 && IndPage !== 13 && (
          <div>
            <FunctionCard page={IndPage} />
          </div>
        )}
      </Display>
    </>
  );
};

export default IndividualContent;
