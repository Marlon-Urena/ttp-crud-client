import axios from "axios";

// ACTION TYPES;
const FETCH_ALL_CAMPUSES = "FETCH_ALL_CAMPUSES";
const ADD_CAMPUS = "ADD_CAMPUS";
const EDIT_CAMPUS = "EDIT_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";
const FETCH_CAMPUS_STUDENTS = "FETCH_CAMPUS_STUDENTS";

//   - [ ] Write a `campuses` model with the following information:
//   - [ ] name - not empty or null
//   - [ ] imageUrl - with a default value
//   - [ ] address - not empty or null
//   - [ ] description - extremely large text

// ACTION CREATORS;
const fetchAllCampuses = (campuses) => {
  return {
    type: FETCH_ALL_CAMPUSES,
    payload: campuses,
  };
};

const addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    payload: campus,
  };
};

const editCampus = (campus) => {
  return {
    type: EDIT_CAMPUS,
    payload: campus,
  };
};

const deleteCampus = (id) => {
  return {
    type: DELETE_CAMPUS,
    payload: id,
  };
};

const fetchCampusStudents = (students) => {
  return {
    type: FETCH_CAMPUS_STUDENTS,
    payload: students,
  };
};

// THUNK CREATORS;
export const fetchAllCampusesThunk = () => (dispatch) => {
  return axios
    .get("/api/campuses")
    .then((res) => res.data)
    .then((campuses) => dispatch(fetchAllCampuses(campuses)))
    .catch((err) => console.log(err));
};

export const addCampusThunk = (campus, ownProps) => (dispatch) => {
  return axios
    .post("/api/campuses", campus)
    .then((res) => res.data)
    .then((newCampus) => {
      dispatch(addCampus(newCampus));
      ownProps.history.push(`/students/${newCampus.id}`);
    })
    .catch((err) => console.log(err));
};

export const editCampusThunk = (id, campus) => (dispatch) => {
  return axios
    .put(`/api/campuses/${id}`, campus)
    .then((res) => res.data)
    .then((updatedCampus) => dispatch(editCampus(updatedCampus)))
    .catch((err) => console.log(err));
};

export const deleteCampusThunk = (id) => (dispatch) => {
  return axios
    .delete(`/api/campuses/${id}`)
    .then((res) => res.data)
    .then(() => dispatch(deleteCampus(id)))
    .catch((err) => console.log(err));
};

export const fetchCampusStudentsThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/campuses/${id}/students`)
    .then((res) => res.data)
    .then((students) => dispatch(fetchCampusStudents(students)))
    .catch((err) => console.log(err));
};

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CAMPUSES:
      return action.payload;
    case ADD_CAMPUS:
      return [...state, action.payload];
    case EDIT_CAMPUS:
      return [...state, action.payload];
    case DELETE_CAMPUS:
      console.log(action.payload);
      return state.filter((campus) => campus.id !== action.payload);
    case FETCH_CAMPUS_STUDENTS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
