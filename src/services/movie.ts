import type { GetMoviesParams, GetMoviesResponse } from '../types/movie';
import { VITE_TMDB_TOKEN } from '../vite.env';
import { serverApi } from './movieService';

export const getMovies = async (params: GetMoviesParams) => {
  const res = await serverApi.get<GetMoviesResponse>('/3/search/movie', {
    params,
    headers: {
      Authorization: `Bearer ${VITE_TMDB_TOKEN}`,
    },
  });
  return res.data;
};
