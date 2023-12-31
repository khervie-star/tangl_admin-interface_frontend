import { useSelector } from "react-redux";
import { OutlinedBlueBtn } from "../../../Assets/Buttons";
import { BackTextButton } from "../assets/buttons";
import AssetFunctionCard from "./AssetFunctionCard";
import AssetInformation from "./AssetInformation";
import AssetType from "./AssetType";
import {
  CreateAssetBody,
  CreateAssetHeader,
  CreateAssetHeaderText,
  Display,
} from "./styles";
import { RootState } from "../../../../../store/reducers";
import { useAppDispatch } from "../../../../../hooks";
import {
  assetBackwardRoute,
  assetFowardRoute,
} from "../../../../../store/actions";
import ReviewAssetInformation from "./ReviewAssetInformation";
import CreateShareClass from "./CreateShareClass";
import ShareClassList from "./ShareClassList";
import Router from "next/router";
import ReviewShareClass from "./ReviewShareClass";
import ReviewAllAssetData from "./ReviewAssetData";

const CreateAssets = () => {
  const dispatch = useAppDispatch();

  const { assetPage } = useSelector((store: RootState) => ({
    assetPage: store.Asset.page,
  }));

  const handleBack = () => {
    dispatch(assetBackwardRoute(assetPage));
    if (window !== null) {
      window.scrollTo(0, 0);
    }
  };
  const handleForward = () => {
    dispatch(assetFowardRoute(assetPage));
    if (window !== null) {
      window.scrollTo(0, 0);
    }
  };
  const goToAssetsMainPage = () => {
    Router.back();
  };
  return (
    <>
      <Display>
        <div>
          <BackTextButton onClick={goToAssetsMainPage} disabled={false}>
            All Assets
          </BackTextButton>
        </div>
        <CreateAssetHeader>
          <CreateAssetHeaderText>New Asset</CreateAssetHeaderText>
          <OutlinedBlueBtn>Cancel</OutlinedBlueBtn>
        </CreateAssetHeader>
        <CreateAssetBody>
          {assetPage && assetPage === 1 && (
            <AssetType handleBack={handleBack} handleForward={handleForward} />
          )}
          {assetPage && assetPage === 2 && (
            <AssetInformation
              handleBack={handleBack}
              handleForward={handleForward}
            />
          )}
          {assetPage && assetPage === 3 && (
            <ReviewAssetInformation
              handleBack={handleBack}
              handleForward={handleForward}
            />
          )}

          {assetPage && assetPage === 4 && (
            <CreateShareClass
              handleBack={handleBack}
              handleForward={handleForward}
            />
          )}

          {assetPage && assetPage === 5 && (
            <ReviewShareClass
              handleBack={handleBack}
              handleForward={handleForward}
            />
          )}
          {assetPage && assetPage === 6 && (
            <ShareClassList
              handleBack={handleBack}
              handleForward={handleForward}
            />
          )}
          {assetPage && assetPage === 7 && (
            <ReviewAllAssetData
              handleBack={handleBack}
              handleForward={handleForward}
            />
          )}

          <AssetFunctionCard page={assetPage} />
        </CreateAssetBody>
      </Display>
    </>
  );
};

export default CreateAssets;
