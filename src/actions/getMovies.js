import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

function displayMovies(movies) {
  return {
    type: actionTypes.MOVIES_GET,
    movies,
  };
}

export function getMovies() {
  return function (dispatch) {
    const request = axios({
      method: 'GET',
      url: 'http://localhost:8080/api/getMovies',
    });
    return request
      .then((response) => {
        dispatch(displayMovies(response.data));
      });
  };
}