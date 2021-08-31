import {
  initialStateWords,
  GET_SINGLE_WORD, GET_SINGLE_WORD_PENDING, GET_SINGLE_WORD_ERROR,
} from '../constants/constants';

const wordReducer = (state = initialStateWords, action) => {
  switch (action.type) {
    case GET_SINGLE_WORD:
      return {
        ...state,
        pending: false,
        word: action.word,
        definitions: action.definitions,
        synonyms: action.synonyms,
        antonyms: action.antonyms,
      };
    case GET_SINGLE_WORD_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_SINGLE_WORD_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default wordReducer;