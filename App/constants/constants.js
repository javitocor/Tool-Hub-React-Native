export const BASE_URL_WORDS = 'https://wordsapiv1.p.mashape.com/words/';
export const BASE_URL_HISTORY = 'http://history.muffinlabs.com/date/';
export const BASE_URL_NEWS = 'https://newsapi.org/v2/top-headlines?';

export const initialStateHistory = {
  error: null,
  pending: false,
  day: '',
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

export const MONTHS = [{label:'January', value:'1'}, {label:'February', value:'2'}, {label:'March', value:'3'}, {label:'April', value:'4'}, {label:'May', value:'5'}, {label:'June', value:'6'}, {label:'July', value:'7'}, {label:'August', value:'8'}, {label:'September', value:'9'}, {label:'October', value:'10'}, {label:'November', value:'11'}, {label:'December', value:'12'}]
export const INFO = [{label:'All', value:'All'}, {label:'Events', value:'Events'}, {label:'Births', value:'Births'}, {label:'Deaths', value:'Deaths'},];

export const RESOURCES = [{label:'Definitions', value:'definitions'}, {label:'Synonyms', value:'synonims'}, {label:'Antonyms', value:'antonyms'}];
