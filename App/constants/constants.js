export const BASE_URL_WORDS = 'https://wordsapiv1.p.mashape.com/words/';
export const BASE_URL_HISTORY = 'http://history.muffinlabs.com/date/';
export const BASE_URL_NEWS = 'https://newsapi.org/v2/top-headlines?';

export const initialStateHistory = {
  error: null,
  pending: false,
  events: [],
  births:[],
  deaths:[],
};

export const GET_SINGLE_DATE = 'GET_SINGLE_DATE';
export const GET_SINGLE_DATE_PENDING = 'GET_SINGLE_DATE_PENDING';
export const GET_SINGLE_DATE_ERROR = 'GET_SINGLE_DATE_ERROR';

export const initialStateWords = {
  error: null,
  pending: false,
  word: '',
  definitions: [],
  synonyms: [],
  antonyms: [],
};

export const GET_SINGLE_WORD = 'GET_SINGLE_WORD';
export const GET_SINGLE_WORD_PENDING = 'GET_SINGLE_WORD_PENDING';
export const GET_SINGLE_WORD_ERROR = 'GET_SINGLE_WORD_ERROR';

export const initialStateNews = {
  error: null,
  pending: false,
  keyword: '',
  articles: [],
};

export const GET_NEWS = 'GET_NEWS';
export const GET_NEWS_PENDING = 'GET_NEWS_PENDING';
export const GET_NEWS_ERROR = 'GET_NEWS_ERROR';