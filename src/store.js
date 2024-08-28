import { reactive } from 'vue'

export const store = reactive({
    movie_api: 'https://api.themoviedb.org/3/search/movie',
    tv_series_api:'https://api.themoviedb.org/3/search/tv',
    movie_list: [],
    tv_series_list: []
})