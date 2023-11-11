<template>
    <section class="banner">
        <span>join us now</span>
        <h3>get upto 50% discount</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, porro.</p>
        <a href="#" class="btn">get discount</a>
    </section>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'BannerBlock'
    })
</script>

<style lang="scss" scoped>
    .banner{
        background: url(https://mlngnuzii6cm.i.optimole.com/w:1583/h:709/q:mauto/ig:avif/f:best/https://stadiumfitness.com.au/wp-content/uploads/2019/05/slider1.jpg) center (center/cover) no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        text-align: center;

        span{
            font-size: 2rem;
            color:#ff0000;
        }

        h3{
            padding-top: 1rem;
            color:#fff;
            text-transform: uppercase;
            font-size: 3.5rem;
        }

        p{
            margin:1rem auto;
            max-width: 60rem;
            font-size: 1.5rem;
            color: #aaa;
            line-height: 2;
        }
    }
</style>