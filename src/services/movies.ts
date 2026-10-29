import type { GetMoviesParams, GetMoviesResponse } from '../types/movies';
import { VITE_TMDB_TOKEN } from '../vite.env.d';
import { serverApi } from './serverConfig';

export const getMovies = async (params: GetMoviesParams) => {
  const res = await serverApi.get<GetMoviesResponse>('/3/search/movie', {
    params,
    headers: {
      Authorization: `Bearer ${VITE_TMDB_TOKEN}`,
    },
  });
  return res.data;
};
