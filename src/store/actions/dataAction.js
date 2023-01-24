import { IS_DATA_LOADING, DATA_LOADED } from "./types";
import axios from 'axios';

export const loadData = (params) => (dispatch) => {
    dispatch({type: IS_DATA_LOADING, payload: ''});

    axios.get(`https://api.binance.com/api/v3/klines?symbol=${params.pair}&interval=${params.timeFrame}&limit=100`)
        .then(res => res.data)
        .then(data => {
            dispatch({type: DATA_LOADED, payload: data});
        })
  };