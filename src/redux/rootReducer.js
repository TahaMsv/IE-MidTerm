import { combineReducers } from "redux";

import searchPanelReducer from "./searchPanel/searchPanel-reducer";

const rootReducer = combineReducers({
  shop: searchPanelReducer,
});

export default rootReducer;
