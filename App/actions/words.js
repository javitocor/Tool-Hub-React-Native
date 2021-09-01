import {
  GET_SINGLE_WORD, GET_SINGLE_WORD_PENDING, GET_SINGLE_WORD_ERROR,
} from '../constants/constants';

export const getSingleWord = (word, data) => ({
  type: GET_SINGLE_WORD,
  word,
  definitions: data[0].meanings,
  synonyms: data.synonyms,
  antonyms: data.antonyms,
});

export const getSingleWordPending = () => ({
  type: GET_SINGLE_WORD_PENDING,
});

export const getSingleWordError = error => ({
  type: GET_SINGLE_WORD_ERROR,
  error,
});