import { LOGGING_IN, FETCH_DATA_START, FETCH_DATA_SUCCESS } from "../actions";

const initialState = {
  friends: [],
  isLoggingIn: false,
  fetchingData: false,
  error: "",
  errorStatusCode: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        isLoggingIn: true
      };
    case FETCH_DATA_START: {
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    }
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        error: "",
        fetchingData: false,
        friends: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
