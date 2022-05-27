import * as actionTypes from "./serachPanel-types";

const INITIAL_STATE = {
  currentList: [],
  isDarkMode: true,
};

const searchPanelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CURRNETS_LIST:
      // Great Item data from products array

      action.payload.items.filter(currItem => {
        state.currentList = state.currentList.filter(item => item.id !== currItem.id);
        state.currentList.push(currItem);
      })

      // console.log(state.currentList.length);
      // while(state.currentList.lenght > 2){
      //   state.currentList.pop();
      //   console.log(state.currentList);
      //   console.log(state.currentList);
      // }
      if (state.currentList.length > 3) {
        state.currentList = state.currentList.slice(-3);
      }

      return state;
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;

  }
};

export default searchPanelReducer;
