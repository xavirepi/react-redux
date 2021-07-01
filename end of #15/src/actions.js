export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
export const GET_MOVIES = 'GET_MOVIES';

export function toggleMessage() {
  return {
    type: 'TOGGLE_MESSAGE',
  };
}

export function getMovies() {
  return async function (dispatch) {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
    const movies = await res.json();
    return dispatch({
      type: 'GET_MOVIES',
      data: movies.results,
    });
  };
}
