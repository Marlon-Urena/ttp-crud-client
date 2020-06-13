import axios from "axios";

/**
 *  ACTION TYPE
 *  Purpose: Gets used by the reducer to run a payload
 */
const FETCH_STUDENT = "FETCH_STUDENT";

/**
 * ACTION CREATORS
 * Purpose: Functions that send an action to the reducer.
 */
const fetchStudent = (student) => {
  return {
    type: FETCH_STUDENT,
    payload: student,
  };
};

/**
 * THUNK CREATORS
 * Purpose: Functions that require external resources are done here.
 * Called in StudentsContainer and passed into dispatch
 */
export const fetchStudentThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/students/${id}`)
    .then((res) => res.data)
    .then((student) => dispatch(fetchStudent(student)))
    .catch((err) => console.log(err));
};
/**
 * REDUCER
 * Purpose: Take the action and matches with appropriate type and returns.
 * Extra Info: Used by the store in store/index.js
 */
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
