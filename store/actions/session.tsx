import { Dispatch } from "redux";
import { SET_INVESTOR_TYPE, SET_ORGANIZATION_TYPE } from "../actionTypes";


export const setInvestorType = (investorType: any) => ({
    type: SET_INVESTOR_TYPE,
    investorType
})

export const setOrganizationType = (organizationType: any) => ({
    type: SET_ORGANIZATION_TYPE,
    organizationType
})


export const setInvestor = (InvType: string) => {
    return async (dispatch: Dispatch) => {
        try{
            dispatch(setInvestorType(InvType))
        }catch(err: any){
            console.log(err)
           
        }
    }
}

export const setOrganization = (OrgType: string) => {
    return async (dispatch: Dispatch) => {
        try{
            dispatch(setOrganizationType(OrgType))
        }catch(err: any){
            console.log(err)
           
        }
    }
}

