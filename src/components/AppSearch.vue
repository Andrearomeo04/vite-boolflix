<script>
import axios from 'axios';
import { store } from '../store.js';
import 'flag-icons/css/flag-icons.min.css';
export default {
    data () {
        return {
            store,
            searchQuery: '',
            languageFlag: {
                en: 'gb',
                it: 'it',
                fr: 'fr',
                es: 'es',
                ko: 'kr',
                zh: 'cn',
                fi: 'fi',
                pt: 'pt',
                ja: 'jp',
                ru: 'ru',
      }
        }
    },
    methods: {
    getMovies() {
        const APY_KEY ='62a5a8d13fbd9a5c7dcb2201ded87f1c'
        axios.get(store.movie_api, {
            params: {
                api_key: APY_KEY,
                query: this.searchQuery
            }
        }).then((response) => {
            store.movie_list = response.data.results
        })
    }
  }
}
</script>

<template>
    <div>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" v-model="searchQuery" aria-label="Search">
                <button class="btn btn-outline-success" type="submit" @click.prevent="getMovies">Search</button>
                </form>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-3 border-black">
                    <ul>
                        <li v-for="movie in store.movie_list" :key="movie.id">
                            <h1>{{ movie.title }}</h1>
                            <h2>{{ movie.original_title }}</h2>
                            <p>
                                <span v-if="languageFlag[movie.original_language]" 
                                :class="`fi fi-${languageFlag[movie.original_language]}`"></span>
                                <span v-else>{{ movie.original_language }}</span>
                            </p>
                            <p>{{ movie.vote_average }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    
</style>