import { LOGGING_IN } from "../actions";

const initialState = {
  friends: [],
  isLoggingIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        isLoggingIn: true
      };
    default:
      return state;
  }
};

export default reducer;
