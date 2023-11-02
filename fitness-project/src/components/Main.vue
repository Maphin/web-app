<template>
    <div class="main_wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import './Main.css';

    export default defineComponent({
        name: 'MainView',
    });
</script>

<style>

</style>