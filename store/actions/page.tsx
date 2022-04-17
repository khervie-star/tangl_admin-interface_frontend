import { Dispatch } from "redux";
import { SET_INDIVIDUAL_PAGE, SET_ORGANIZATION_PAGE } from "../actionTypes";


export const setIndividualPage = (individualPage: any) => ({
    type: SET_INDIVIDUAL_PAGE,
    individualPage
})

export const setOrganizationPage = (OrganizationPage: any) => ({
    type: SET_ORGANIZATION_PAGE,
    OrganizationPage
})

export const individualFowardRoute = (IndPage: number) => {
    return async (dispatch: Dispatch) => {
        try{
            dispatch(setIndividualPage(++IndPage))
        }catch(err: any){
            console.log(err)
           
        }
    }
}

export const individualBackwardRoute = (IndPage: number) => {
    return async (dispatch: Dispatch) => {
        try{
            dispatch(setIndividualPage(IndPage-1))
        }catch(err: any){
            console.log(err)
           
        }
    }
}

export const organizationFowardRoute = (OrgPage: number) => {
    return async (dispatch: Dispatch) => {
        try{
            dispatch(setOrganizationPage(++OrgPage))
        }catch(err: any){
            console.log(err)
           
        }
    }
}

export const organizationBackwardRoute = (OrgPage: number) => {
    return async (dispatch: Dispatch) => {
        try{
            dispatch(setOrganizationPage(OrgPage-1))
        }catch(err: any){
            console.log(err)
           
        }
    }
}
