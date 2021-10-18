import {
  SET_HISTORY_LOADING,
  SET_HISTORY_DATA,
  SET_HISTORY_ERROR,
  SET_ANTRIAN,
  SET_ANTRIAN_LOADING,
} from "../keys";

const initialState = {
  loading: false,
  error: "",
  histories: [],
  antrian: [],
  antrianLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_HISTORY_LOADING:
      return { ...state, loading: action.payload };
    case SET_ANTRIAN_LOADING:
      return { ...state, antrianLoading: action.payload };
    case SET_HISTORY_DATA:
      return { ...state, histories: action.payload };
    case SET_HISTORY_ERROR:
      return { ...state, error: action.payload };
    case SET_ANTRIAN:
      let newAntrian = initialState.antrian.filter((el) => {
        return el.bookingId !== action.bookingId;
      });
      newAntrian.push(action.payload);
      return { ...state, antrian: newAntrian };
    default:
      return state;
  }
}

export default reducer;
