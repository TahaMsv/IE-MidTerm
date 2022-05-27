import * as actionTypes from "./serachPanel-types";

const INITIAL_STATE = {
  currentList: [],
  isDarkMode: true,
};

const searchPanelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CURRNETS_LIST:  // سیو کردن ایتم ها در ریداکس

      action.payload.items.filter(currItem => {  // اد کردن داده ها. و در صورتی که تکراری است قبلی آن را حذف میکنیم
        state.currentList = state.currentList.filter(item => item.id !== currItem.id);
        state.currentList.push(currItem);
      })
      if (state.currentList.length > 3) {
        state.currentList = state.currentList.slice(-3);
      }

      return state;
    case actionTypes.CHANGE_THEME:// عوض کردن تم برنامه
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;

  }
};

export default searchPanelReducer;
