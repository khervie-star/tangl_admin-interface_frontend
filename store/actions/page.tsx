import { Dispatch } from "redux";
import {
  SET_INDIVIDUAL_PAGE,
  SET_ORGANIZATION_PAGE,
  SET_ASSET_PAGE,
} from "../actionTypes";

export const setIndividualPage = (individualPage: any) => ({
  type: SET_INDIVIDUAL_PAGE,
  individualPage,
});

export const setOrganizationPage = (organizationPage: any) => ({
  type: SET_ORGANIZATION_PAGE,
  organizationPage,
});

export const setAssetPage = (assetPage: any) => ({
  type: SET_ASSET_PAGE,
  assetPage,
});

export const individualFowardRoute = (IndPage: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setIndividualPage(++IndPage));
    } catch (err: any) {
      console.log(err);
    }
  };
};

export const individualBackwardRoute = (IndPage: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setIndividualPage(IndPage - 1));
    } catch (err: any) {
      console.log(err);
    }
  };
};

export const organizationFowardRoute = (OrgPage: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setOrganizationPage(++OrgPage));
    } catch (err: any) {
      console.log(err);
    }
  };
};

export const organizationBackwardRoute = (OrgPage: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setOrganizationPage(OrgPage - 1));
    } catch (err: any) {
      console.log(err);
    }
  };
};

export const assetFowardRoute = (assetPage: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setAssetPage(++assetPage));
    } catch (err: any) {
      console.log(err);
    }
  };
};

export const assetBackwardRoute = (assetPage: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setAssetPage(assetPage - 1));
    } catch (err: any) {
      console.log(err);
    }
  };
};
