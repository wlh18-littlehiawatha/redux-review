const initialState = {
  title: '',
  poster: '',
  westenscale: null,
  movies: [],
}

const SET_MOVIE_INFO = 'SET_MOVIE_INFO'
const UPDATE_MOVIE_LIST = 'UPDATE_MOVIE_LIST'

export const setMovieInfo = (title, poster, westenscale) => {
  return {
    type: SET_MOVIE_INFO,
    payload: { title, poster, westenscale },
  }
}

export const updateMovieList = newMovie => {
  return {
    type: UPDATE_MOVIE_LIST,
    payload: newMovie,
  }
}

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE_INFO:
      return { ...state, ...action.payload }
    case UPDATE_MOVIE_LIST:
      return {
        ...state,
        title: '',
        poster: '',
        westenscale: null,
        movies: [...state.movies, action.payload],
      }
    default:
      return state
  }
}

export default moviesReducer
