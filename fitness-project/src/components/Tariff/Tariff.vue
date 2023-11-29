<template>
    <div class="tariff-page">
        <Header />
        <div class="plans">
            <PlanItem 
                v-for="subscription in SUBSCRIPTIONS"
                :key="subscription.id"
                :subscription="subscription"
                @addToCart="addToCart" />
        </div>
        <Footer />
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import Header from '../Home/Header/HeaderLogoOnly.vue';
    import PlanItem from './PlanItem/PlanItem.vue';
    import Footer from '../Home/Footer/Footer.vue';
    import { mapActions, mapGetters } from 'vuex';
    

    export default defineComponent({
        name: 'TariffPage',
        components: {Header, Footer, PlanItem},
        data() {
            return {}
        },
        computed: {
            ...mapGetters('subscriptions',[
                'SUBSCRIPTIONS'
            ])
        },
        methods: {
            ...mapActions('subscriptions',[
                'GET_SUBSCRIPTIONS_FROM_API'
            ]),
            ...mapActions('cart',[
                'ADD_TO_CART'
            ]),
            addToCart(subscription) {
                this.ADD_TO_CART(subscription);
                this.$router.push({name: 'checkout'});
            },
        },
        async mounted() {
            await this.GET_SUBSCRIPTIONS_FROM_API({ currentPage: 1, pageSize: 10 });
        }
    })
    
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/base/mixins';
    .tariff-page {
        background: #000;
        text-transform: capitalize;
    }
    .plans {
        @include grid(32rem);
        margin: .5rem;
        margin-bottom: 5rem
    }
</style>