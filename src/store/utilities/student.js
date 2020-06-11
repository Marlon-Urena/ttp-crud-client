/**
 *  ACTION TYPE
 *  Purpose: Gets used by the reducer to run a payload
 */
const FETCH_STUDENT = "FETCH_STUDENT";

/**
 * DUMMY DATA
 * Purpose: Used for mocking thunk
 */
const allStudents = [
  {
    id: "2223334444",
    name: "John Doe",
    email: "john@example.com",
    imageURL: "https://via.placeholder.com/150",
  },
  {
    id: "1111111111",
    name: "Jane Doe",
    email: "jane@example.com",
    imageURL: "https://via.placeholder.com/150",
  },
];

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
  const student = allStudents.find((s) => s.id === id);
  return dispatch(fetchStudent(student));
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
