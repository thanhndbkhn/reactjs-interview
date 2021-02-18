import { REQUEST, FAILURE, SUCCESS } from 'app/shared/reducers/action-type.util';
import axios from 'axios';
import { DATA_DUMY } from './constant';

/**
 * Enum action PurchaseData NTT
 */
export enum PurchaseDataNTTAction {
  None,
  Request,
  Error,
  Success
}

/**
 * Action type when call API
 */
export const ACTION_TYPES = {
  PURCHASE_GET_CUSTOMERS: 'purchaseDataNTT/LOCAL_MENU_SIDEBAR',
  PURCHASE_UPDATE_CONDTION_SEARCH: 'purchaseDataNTT/PURCHASE_UPDATE_CONDTION_SEARCH',
  PURCHASE_GET_DATA_CONDITION: 'purchaseDataNTT/PURCHASE_GET_DATA_CONDITION',
};

const initialState = {
  dataCustomer: null,
  dataConditionSearch: null,
  searchCondition: {
    regions: [],
    prefectures: [],
    municipalitys: [],
    townAreas: []
  }
}


// API base URL
const customersPurchaseDataUrl = '/';

/**
 * ListState Customers
 */
export type PurchaseDataNTTState = Readonly<typeof initialState>;

export default (state: PurchaseDataNTTState = initialState, action): PurchaseDataNTTState => {
  switch (action.type) {
    case ACTION_TYPES.PURCHASE_UPDATE_CONDTION_SEARCH: {
      const res = action.payload;
      return {
        ...state, searchCondition: { ...res }
      }
    }

    case ACTION_TYPES.PURCHASE_GET_CUSTOMERS:
      break;
    
    case ACTION_TYPES.PURCHASE_GET_DATA_CONDITION:
      return {
        ...state,
        dataConditionSearch: DATA_DUMY
      }
      break;
    default:
      return state;
  }
}

export const getCustomers = (regions, prefectures, municipalityCheck, municipalitys) => ({
  type: ACTION_TYPES.PURCHASE_GET_CUSTOMERS,
});

const getListDataCondition = () => ({
  type: ACTION_TYPES.PURCHASE_GET_DATA_CONDITION,
})

export const updateStateSearch = (regions, prefectures, municipalitys, townAreas) => ({
  type: ACTION_TYPES.PURCHASE_UPDATE_CONDTION_SEARCH,
  payload: {
    regions,
    prefectures,
    municipalitys,
    townAreas
  }
});

export const handleSearchCustomers = (regions, prefectures, municipalitys, townAreas) => async (dispatch, getState) => {
  // await dispatch(getCustomers(regionCheck, prefectureCheck, municipalityCheck, townAreaCheck));
  await dispatch(updateStateSearch(regions, prefectures, municipalitys, townAreas));
}

export const handleGetListDataCondition = () => async (dispatch, getState) => {
  await dispatch(getListDataCondition());
}