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
                axios.get(store.movie_api).then((result) => {
                    
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
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>


<style lang="scss" scoped>
    
</style>