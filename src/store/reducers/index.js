import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";
import dataReducer from './dataReducer';

const reducers = combineReducers({ settings: settingsReducer, data: dataReducer });

export default reducers;
