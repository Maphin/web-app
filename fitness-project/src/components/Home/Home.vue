<template>
    <div class="main-page">
        <Header />
        <Swiper />
        <About />
        <Features />
        <Pricing />
        <Trainers />
        <Banner />
        <Reviews />
        <Blogs />
        <Footer />
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import Swiper from '../common/Swiper/Swiper.vue';
    import Blogs from './Blogs/Blogs.vue';
    import Reviews from './Reviews/Reviews.vue';
    import Banner from './Banner/Banner.vue';
    import Trainers from './Trainers/Trainers.vue';
    import Pricing from './Pricing/Pricing.vue';
    import Features from './Features/Features.vue';
    import About from './About/About.vue';
    import Header from './Header/Header.vue';
    import Footer from './Footer/Footer.vue';

    export default defineComponent({
        name: 'HomePage',
        components: { Swiper, Blogs, Reviews, Banner, Trainers, Pricing, Features, About, Header, Footer }
    })
</script>

<style lang="scss" scoped>
    .main-page {
        background: #000;
        text-transform: capitalize;
    }
</style>