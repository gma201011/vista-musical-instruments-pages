import axios, { AxiosResponse } from 'axios';

export const getCreators = async () => {
  try {
    return await axios.get('./data/creator.json').then((res: AxiosResponse) => res.data);
  } catch (error) {
    console.log(error);
  }
}