import {
  GET_NEWS, GET_NEWS_PENDING, GET_NEWS_ERROR,
} from '../constants/constants';

export const getNews = (keyword, data) => ({
  type: GET_NEWS,
  keyword, 
  articles: data.articles,
});

export const getNewsPending = () => ({
  type: GET_NEWS_PENDING,
});

export const getNewsError = error => ({
  type: GET_NEWS_ERROR,
  error,
});