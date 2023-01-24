import { IS_DATA_LOADING, DATA_LOADED } from "../actions/types";

const initialState = {
  isLoading: false,
  data: [],
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case IS_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DATA_LOADED:
        return {
            ...state,
            isLoading: false,
            data: action.payload
        }
    default:
      return state;
  }
};
