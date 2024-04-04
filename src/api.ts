const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_PATH = process.env.REACT_APP_BASE_PATH;

export const getNowPlayingMovies = () => {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (res) => res.json()
  );
};
