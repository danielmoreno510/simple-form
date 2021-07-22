import produce from "immer";

import {
  FETCH_CREATE_USER,
  PUT_CREATE_USER,
} from "../actions/types";

export const initialState = {
  isFetchingCreateUser: false,
  createUserMessage: ''
};

const productReducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_CREATE_USER:
        draft.isFetchingCreateUser = true
        draft.createUserMessage= ''
        break;
      case PUT_CREATE_USER:
        draft.isFetchingCreateUser = false
        draft.createUserMessage = action.createUserMessage
        break;
      default:
        break;
    }
  });

export default productReducer;