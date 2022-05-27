import * as actionTypes from "./serachPanel-types";

export const addToCarrentsList = (items) => {
  return {
    type: actionTypes.ADD_TO_CURRNETS_LIST,
    payload: {
      items: items,
    },
  };
};

export const changeTheme = () => {
  return {
    type: actionTypes.CHANGE_THEME,
  };
};


