import {
  GET_SINGLE_DATE, GET_SINGLE_DATE_PENDING, GET_SINGLE_DATE_ERROR,
} from '../constants/constants';

export const getSingleDate = results => ({
  type: GET_SINGLE_DATE,
  events: results.data.Events,
  deaths: results.data.Deaths,
  births: results.data.Births,
});

export const getSingleDatePending = () => ({
  type: GET_SINGLE_DATE_PENDING,
});

export const getSingleDateError = error => ({
  type: GET_SINGLE_DATE_ERROR,
  error,
});