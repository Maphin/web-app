<template>
  <div>
    <Register />
  </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import Register from './components/Register/Register.vue'

    export default defineComponent({
        name: 'App',
        components: {
            Register
        }
    })
</script>

<style>
* {
	font-family: 'Nutino', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    transition: all .2s linear;
}
html {
    font-size: 65%;
    scroll-behavior: smooth;
    overflow-x: hidden;
}
body {
	overflow-x: hidden;
}
section {
    padding: 5rem 9%;
}
</style>
