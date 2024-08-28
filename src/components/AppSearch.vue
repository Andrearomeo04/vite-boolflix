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
            },
            imageUrl:'https://image.tmdb.org/t/p/',
            imageSize:'w342'
        }
    },
    computed: {
        combinedList() {
            return [...store.movie_list, ...store.tv_series_list]
        }
    },
    methods: {
    getMoviesAndSeries() {
        const APY_KEY ='62a5a8d13fbd9a5c7dcb2201ded87f1c'
        axios.get(store.movie_api, {
            params: {
                api_key: APY_KEY,
                query: this.searchQuery
            }
        }).then((response) => {
            store.movie_list = response.data.results
        })

        axios.get(store.tv_series_api, {
            params: {
                api_key: APY_KEY,
                query: this.searchQuery
            }
        }).then((response) => {
            store.tv_series_list = response.data.results
        })
    },
    getUrl(posterPath) {
        return posterPath ? `${this.imageUrl}${this.imageSize}${posterPath}` : '';
    },
    stars(vote) {
        return Math.ceil(vote / 2)
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
                <button class="btn btn-outline-success" type="submit" @click.prevent="getMoviesAndSeries">Search</button>
                </form>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-3 border border-black">
                    <ul>
                        <li v-for="item in combinedList" :key="item.id">
                            <h1>{{ item.title || item.name}}</h1>
                            <h2>{{ item.original_title || item.original_name}}</h2>
                            <p>
                                <span v-if="languageFlag[item.original_language]" 
                                :class="`fi fi-${languageFlag[item.original_language]}`"></span>
                                <span v-else>{{ item.original_language }}</span>
                            </p>
                            <p>
                                <span v-for="n in 5" :key="n">
                                    <i v-if="n <= stars(item.vote_average)" class="fas fa-star"></i>
                                    <i v-else class="far fa-star"></i>
                                </span>
                            </p>
                            <img :src="item.poster_path ? getUrl(item.poster_path) : 'https://placehold.co/342x513?text=Unavailable+Image&font=roboto'" :alt="item.title || item.name">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/generals.scss'
</style>