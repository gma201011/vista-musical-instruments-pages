import axios, { AxiosResponse } from 'axios';

export const getCreators = async () => {
  try {
    return await axios.get('./data/creator.json').then((res: AxiosResponse) => res.data);
  } catch (error) {
    console.log(error);
  }
}

export const getArtists = async () => {
  try {
    return await axios.get('./data/artistList.json').then((res: AxiosResponse) => res.data.artist);
  } catch (error) {
    console.log(error);
  }
}