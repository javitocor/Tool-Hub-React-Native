import {
  initialStateHistory,
  GET_SINGLE_DATE, GET_SINGLE_DATE_PENDING, GET_SINGLE_DATE_ERROR,
} from '../constants/constants';

const historyReducer = (state = initialStateHistory, action) => {
  switch (action.type) {
    case GET_SINGLE_DATE:
      return {
        ...state,
        pending: false,
        day: action.day,
        events: action.events,
        deaths: action.deaths,
        births: action.births,
      };
    case GET_SINGLE_DATE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_SINGLE_DATE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default historyReducer;