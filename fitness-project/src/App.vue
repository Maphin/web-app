<template>
    <div class="app">
      <MainView />
    </div>
  </template>
  
  <script>
    import { defineComponent } from 'vue';
    import MainView from './components/Main.vue'

    export default defineComponent({
        name: 'App',
        components: {
            MainView
        }
    });
  </script>
  
  <style>
  
  </style>
