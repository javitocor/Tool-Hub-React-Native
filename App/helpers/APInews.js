/* eslint-disable consistent-return */
import Constants from 'expo-constants';
import 'regenerator-runtime/runtime';
import { BASE_URL_NEWS } from '../constants/constants';
import * as fromnews from '../actions/news';

const newsCall = (category, param) => async dispatch => {
  const Url = `${BASE_URL_NEWS}`;

  try {
    dispatch(fromnews.getNewsPending());

    const response = await fetch(`${Url}category=${category}&q=${param}&apiKey=${Constants.manifest.extra.APIKEY}&pageSize=25`, { mode: 'cors'});
    const data = await response.json();

    dispatch(fromnews.getNews(param, data));

    return data;

  } catch(error){
    dispatch(fromnews.getNewsError(error));
  };
};

export default newsCall;

