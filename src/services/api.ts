import axios from 'axios';
import { IGetQuizListApiType } from 'types/types';

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
const BASE_URL = `https://opentdb.com/api.php`;

export const getQuizListApi = (params: IGetQuizListApiType) => {
  return axios.get(`${BASE_URL}?`, {
    params: {
      ...params,
    },
  });
};
