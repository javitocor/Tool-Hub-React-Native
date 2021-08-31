import { combineReducers } from 'redux';
import newsReducer from './news';
import wordReducer from './words';
import historyReducer from './history';

const rootReducer = combineReducers({
  news: newsReducer,
  words: wordReducer,
  history: historyReducer,
});

export default rootReducer;