/**
 * ACTION TYPE
 * Purpose: Gets used by the reducer to run a payload
 */
const FETCH_ALL_STUDENTS = 'FETCH_ALL_STUDENTS';

/**
* DUMMY DATA
* Purpose: Used for mocking thunk
*/
const allStudents = [
    {
        id: "2223334444",
        name: 'John Doe',
        email: 'john@example.com',
        imageURL: 'https://via.placeholder.com/150',
    },
    {
        id: "1111111111",
        name: 'Jane Doe',
        email: 'jane@example.com',
        imageURL: 'https://via.placeholder.com/150',
    },
];


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

/**
 * THUNK CREATORS
 * Purpose: Functions that require external resources are done here.
 * Called in AllStudentsContainer and passed into dispatch
 */
export const fetchAllStudentsThunk = () => (dispatch) => {
    return dispatch(fetchAllStudents(allStudents));
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
        default:
            return state;
    }
};

export default reducer;
