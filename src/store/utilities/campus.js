import axios from "axios";

// Action Types
const FETCH_CAMPUS = "FETCH_CAMPUS";
const RESET = "RESET";

// Action Creators
const fetchCampus = (campus) => {
  return {
    type: FETCH_CAMPUS,
    payload: campus,
  };
};

export const reset = () => {
  return {
    type: RESET,
    payload: {},
  };
};

// Thunk Creators
export const fetchCampusThunk = (id) => (dispatch) => {
  console.log("fetchCampus run");
  return axios
    .get(`/api/campuses/${id}`)
    .then((res) => res.data)
    .then((campus) => dispatch(fetchCampus(campus)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    case RESET:
      return undefined;
    default:
      return state;
  }
};

export default reducer;
