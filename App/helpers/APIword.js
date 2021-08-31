/* eslint-disable consistent-return */
import 'regenerator-runtime/runtime';
import { BASE_URL_WORDS } from '../constants/constants';
import * as fromwords from '../actions/words';

const wordCall = (resource, word) => async dispatch => {
  const Url = `${BASE_URL_WORDS}`;

  try {
    dispatch(fromwords.getSingleWordPending());

    const response = await fetch(`${Url}/${word}/${resource}`, { mode: 'cors'});
    const data = await response.json();

    dispatch(fromwords.getSingleWord(word, data));

    return data;

  } catch(error){
    dispatch(fromwords.getSingleWordError(error));
  };
};

export default wordCall;