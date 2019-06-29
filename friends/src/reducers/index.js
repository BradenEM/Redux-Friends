import { LOGGING_IN,
FETCH_DATA_START,
FETCH_DATA_SUCCESS,
ADD_FRIEND,
ADD_SUCCESS,
ADD_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  isLoggingIn: false,
  fetchingData: false,
  error: "",
  errorStatusCode: null,
  addingFriend: false,
  isLoggedIn: false
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
        fetchingData: true,
        isLoggingIn: false,
        isLoggedIn: true
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
    case ADD_FRIEND: {
      return {
        ...state,
        addingFriend: true,
        error: ''
      }
    }
    case ADD_SUCCESS: {
      return {
        ...state,
        friends: action.payload,
        isLoggingIn: false,
        error: ''
      }
    }
    case ADD_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false
      }
    }
    default:
      return state;
  }
};

export default reducer;
