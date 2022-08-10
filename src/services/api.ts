import axios from 'axios';

import { IGetQuizListApiType } from 'types/types';

const BASE_URL = `https://opentdb.com/api.php`;

export const getQuizListApi = (params: IGetQuizListApiType) => {
  return axios.get(`${BASE_URL}?`, {
    params: {
      ...params,
    },
  });
};

export const getTestApi = () => {
  return axios.get('/data/quiz.json');
};
