import axios from "axios";

/**
 * ACTION TYPE
 * Purpose: Gets used by the reducer to run a payload
 */
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
const STUDENT_ENROLLMENT = "STUDENT_ENROLLMENT";

/**
 * ACTION CREATORS
 * Purpose: Functions that send an action to the reducer.
 */
const fetchAllStudents = (students) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: students,
  };
};

const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};

const editStudent = (student) => {
  return {
    type: EDIT_STUDENT,
    payload: student,
  };
};

const deleteStudent = (id) => {
  return {
    type: DELETE_STUDENT,
    payload: id,
  };
};

const studentEnrollment = (student) => {
  return {
    type: STUDENT_ENROLLMENT,
    payload: student,
  };
};

/**
 * THUNK CREATORS
 * Purpose: Functions that require external resources are done here.
 * Called in AllStudentsContainer and passed into dispatch
 */
export const fetchAllStudentsThunk = () => (dispatch) => {
  return axios
    .get(`/api/students/`)
    .then((res) => res.data)
    .then((students) => dispatch(fetchAllStudents(students)))
    .catch((err) => console.log(err));
};

export const addStudentThunk = (student, ownProps) => (dispatch) => {
  return axios
    .post(`/api/students/`, student)
    .then((res) => res.data)
    .then((newStudent) => {
      dispatch(addStudent(newStudent));
      ownProps.history.push(`/students/${newStudent.id}`);
    })
    .catch((err) => console.log(err));
};

export const editStudentThunk = (id, student, ownProps) => (dispatch) => {
  return axios
    .put(`/api/students/${id}`, student)
    .then((res) => res.data)
    .then((updatedStudent) => {
      dispatch(editStudent(updatedStudent));
      ownProps.history.push(`/students/${updatedStudent.id}`);
    })
    .catch((err) => console.log(err));
};

export const deleteStudentThunk = (id, ownProps) => (dispatch) => {
  return axios
    .delete(`/api/students/${id}`)
    .then((res) => res.data)
    .then(() => {
      dispatch(deleteStudent(id));
      ownProps.history.push(`/students`);
    })
    .catch((err) => console.log(err));
};

export const studentEnrollmentThunk = (id, student) => (dispatch) => {
  return axios
    .put(`/api/students/${id}`, student)
    .then((res) => res.data)
    .then((student) => dispatch(studentEnrollment(student)))
    .catch((err) => console.log(err));
};

/**
 * REDUCER
 * Purpose: Take the action and matches with appropriate type and returns.
 * Extra Info: Used by the store in store/index.js
 */
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...state, action.payload];
    case EDIT_STUDENT:
      return [...state, action.payload];
    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.payload);
    case STUDENT_ENROLLMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
