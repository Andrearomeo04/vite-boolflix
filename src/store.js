import { reactive } from 'vue'

export const store = reactive({
    movie_api: 'https://api.themoviedb.org/3/search/movie',
    movie_list: []
})