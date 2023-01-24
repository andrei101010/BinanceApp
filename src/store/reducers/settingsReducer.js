import {
  SET_BUY_CONDITION_PRICE,
  SET_BUY_CONDITION_GOES,
  SET_INDICATOR_LENGTH,
  SET_INDICATOR_PARAMS,
  SET_PAIR,
  SET_QUANTITY_PERCENTAGE,
  SET_QUANTITY_TYPE,
  SET_SELL_PRICE,
  SET_TIME_FRAME,
} from "../actions/types";

const initialState = {
  pair: "BTCUSDT",
  timeFrame: "1m",
  indicatorLength: null,
  indicatorParams: "Open",
  buyConditionGoes: "above",
  buyConditionPrice: "Open",
  sellPrice: null,
  quantityType: "amount",
  quantityPercentage: null,
  isDataLoading: false,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAIR:
      return {
        ...state,
        pair: action.payload,
      };
    case SET_TIME_FRAME:
      return {
        ...state,
        timeFrame: action.payload,
      };
    case SET_INDICATOR_LENGTH:
      return {
        ...state,
        indicatorLength: action.payload,
      };
    case SET_INDICATOR_PARAMS:
      return {
        ...state,
        indicatorParams: action.payload,
      };
    case SET_BUY_CONDITION_GOES:
      return {
        ...state,
        buyConditionGoes: action.payload,
      };
    case SET_BUY_CONDITION_PRICE:
      return {
        ...state,
        buyConditionPrice: action.payload,
      };
    case SET_SELL_PRICE:
      return {
        ...state,
        sellPrice: action.payload,
      };
    case SET_QUANTITY_TYPE:
      return {
        ...state,
        quantityType: action.payload,
      };
    case SET_QUANTITY_PERCENTAGE:
      return {
        ...state,
        quantityPercentage: action.payload,
      };
    default:
      return state;
  }
}
