<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/header.vue'
    export default {
        components:{
            appHeader : Header
        },
        created() {
            this.$store.dispatch('initstocks');
        }
    }
</script>

<style>
body{
    padding:30px;
}
</style>
