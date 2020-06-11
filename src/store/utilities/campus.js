import axios from "axios";

const allCampuses = [
  {
    id: "3434454",
    name: "Brooklyn College",
    address: "Brooklyn",
    imageUrl: "",
    description: "A college in Brooklyn",
  },
  {
    id: "3434455",
    name: "CSI",
    address: "Staten Island",
    imageUrl: "",
    description: "A college in Staten Island",
  },
  {
    id: "3434457",
    name: "John Jay",
    address: "New York",
    imageUrl: "",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "3434458",
    name: "College1",
    address: "Lorensum",
    imageUrl: "",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "3434459",
    name: "College2",
    address: "Lorensum",
    imageUrl: "",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "3434460",
    name: "College3",
    address: "Lorensum",
    imageUrl: "",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "3434461",
    name: "College4",
    address: "Lorensum",
    imageUrl: "",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "3434462",
    name: "College5",
    address: "Lorensum",
    imageUrl: "",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

// Action Types
const FETCH_CAMPUS = "FETCH_CAMPUS";

// Action Creators

const fetchCampus = (campus) => {
  return {
    type: FETCH_CAMPUS,
    payload: campus,
  };
};

// Thunk Creators
export const fetchCampusThunk = (id) => (dispatch) => {
  // return axios
  //   .get(`/api/campuses/${id}`)
  //   .then((res) => res.data)
  //   .then((campus) => dispatch(fetchCampus(campus)))
  //   .catch((err) => console.log(err));

  const campus = allCampuses.find((c) => c.id === id);
  return dispatch(fetchCampus(campus));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
