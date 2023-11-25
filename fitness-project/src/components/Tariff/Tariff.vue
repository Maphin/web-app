<template>
    <div class="tariff-page">
        <Header />
        <Plans />
        <Footer />
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import Header from '../Home/Header/Header.vue';
    import Plans from './Plans/Plans.vue';
    import Footer from '../Home/Footer/Footer.vue';

    

    export default defineComponent({
        name: 'TariffPage',
        components: {Header, Footer, Plans},
        data() {
            return {}
        },
        methods: {}
    })
    
</script>

<style lang="scss" scoped>

.tariff-page {
        background: #000;
        text-transform: capitalize;
    }
</style>