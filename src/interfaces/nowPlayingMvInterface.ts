export interface INowPlayingMovies {
  date: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovieInfo[];
  total_pages: number;
  total_results: number;
}

export interface IMovieInfo {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// 현재 상영중인 영화 슬라이더
export interface INowPlayingMovieProps {
  nowPlayingMovies: IMovieInfo[];
}
