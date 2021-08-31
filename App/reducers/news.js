import {
  initialStateNews,
  GET_NEWS, GET_NEWS_PENDING, GET_NEWS_ERROR,
} from '../constants/constants';

const newsReducer = (state = initialStateNews, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        pending: false,
        keyword: action.keyword,
        articles: action.articles
      };
    case GET_NEWS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_NEWS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default newsReducer;