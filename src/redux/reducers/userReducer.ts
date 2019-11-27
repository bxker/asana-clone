import axios from "axios";
// import { client_id } from "../../secret";

//initial state
const initialState: Object = {
  user_id: null,
  username: "",
  email: "",
  profile_pic: ""
};

//const strings
const GET_SESSION = "GET_SESSION";
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

//functions
export function getSession() {
  return {
    type: GET_SESSION,
    payload: axios.get(`/auth/user`)
  };
}

export function registerUser(newUser: any) {
  return {
    type: REGISTER_USER,
    payload: axios.post("/auth/register", newUser)
  };
}

export function loginUser(user: any) {
  return {
    type: LOGIN_USER,
    payload: axios.post("/auth/login", user)
  };
}

export function logoutUser() {
  axios.post("/auth/logout");
  return {
    type: LOGOUT_USER
  };
}



//reducer
export default function reducer(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_SESSION}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.username,
        email: payload.data.email,
        profile_pic: payload.data.profile_pic
      };
    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.username,
        email: payload.data.email,
        profile_pic: payload.data.profile_pic
      };
    case `${LOGIN_USER}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.username,
        email: payload.data.email,
        profile_pic: payload.data.profile_pic
      };
    case LOGOUT_USER:
      return {
        user_id: null,
        username: "",
        email: "",
        profile_pic: ""
      };
    default:
      return state;
  }
}