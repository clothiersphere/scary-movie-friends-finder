import * as actionTypes from '../constants/actionTypes';

const initialState = [];

function getMovies(state, action) {
  const { movies } = action;
  return [...state, ...movies];
}

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.MOVIES_GET:
      return getMovies(newState, action);
    default:
      return state;
  }
}
