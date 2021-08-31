/* eslint-disable consistent-return */
import 'regenerator-runtime/runtime';
import { BASE_URL_HISTORY } from '../constants/constants';
import * as fromhistory from '../actions/history';

const historyCall = (month, day) => async dispatch => {
  const Url = `${BASE_URL_HISTORY}`;

  try {
    dispatch(fromhistory.getSingleDatePending());

    const response = await fetch(`${Url}/${month}/${day}`, { mode: 'cors'});
    const data = await response.json();

    dispatch(fromhistory.getSingleDate(data));

    return data;

  } catch(error){
    dispatch(fromhistory.getSingleDateError(error));
  };
};

export default historyCall;