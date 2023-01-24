import { 
  SET_PAIR,
  SET_TIME_FRAME,
  SET_INDICATOR_LENGTH,
  SET_INDICATOR_PARAMS,
  SET_BUY_CONDITION_GOES,
  SET_BUY_CONDITION_PRICE,
  SET_SELL_PRICE,
  SET_QUANTITY_TYPE,
  SET_QUANTITY_PERCENTAGE,
 } from "./types";

export const setPair = (pair) => (dispatch) => {
  dispatch({ type: SET_PAIR, payload: pair });
};

export const setTimeFrame = (timeFrame) => (dispatch) => {
  dispatch({ type: SET_TIME_FRAME, payload: timeFrame });
};

export const setIndicatorLength = (indicatorLength) => (dispatch) => {
  dispatch({ type: SET_INDICATOR_LENGTH, payload: indicatorLength });
};

export const setIndicatorParams = (indicatorParams) => (dispatch) => {
  dispatch({ type: SET_INDICATOR_PARAMS, payload: indicatorParams });
};

export const setBuyConditionGoes = (aboveOrBelow) => (dispatch) => {
  dispatch({ type: SET_BUY_CONDITION_GOES, payload: aboveOrBelow });
};

export const setBuyConditionPrice = (priceType) => (dispatch) => {
  dispatch({ type: SET_BUY_CONDITION_PRICE, payload: priceType });
};

export const setSellPrice = (sellPrice) => (dispatch) => {
  dispatch({ type: SET_SELL_PRICE, payload: sellPrice });
};

export const setQuantityType = (quantityType) => (dispatch) => {
  dispatch({ type: SET_QUANTITY_TYPE, payload: quantityType });
};

export const setQuantityPercentage = (quantityPercentage) => (dispatch) => {
  dispatch({ type: SET_QUANTITY_PERCENTAGE, payload: quantityPercentage });
};