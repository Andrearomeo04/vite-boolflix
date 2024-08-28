<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    data () {
        return {
            store,
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
        }).then(response => {
            this.response.data.results
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
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>


<style lang="scss" scoped>
    
</style>