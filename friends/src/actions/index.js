import axios from "axios";
export const LOGGING_IN = "LOGGING_IN";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGGING_IN });
  return axios
    .post("http://localhost:5000/api/login", creds)
    .then(res => localStorage.setItem("token", res.data.payload));
};

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: FETCH_DATA_FAILURE });
    });
};
 export const addFriend = friend => dispatch => {
   dispatch({ type: ADD_FRIEND });
   axios.post("http://localhost:5000/api/friends", friend)
   .then(res => dispatch({ type: ADD_SUCCESS, payload: res.data}))
   .catch(err => dispatch({ type: ADD_FAILURE, payload: err.data}))
 }