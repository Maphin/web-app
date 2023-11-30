<template>
    <section class="pricing" id="pricing">
        <div class="information">
            <span>pricing plan</span>
            <h3>affordable pricing plan for your</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, porro.</p>
            <p> <i class="fa fa-check"></i> cardio exercise </p>
            <p> <i class="fa fa-check"></i> weight lifting </p>
            <p> <i class="fa fa-check"></i> diet plans </p>
            <p> <i class="fa fa-check"></i> overall results </p>
            <RouterLink class="btn-main" to="/tariff">All pricing</RouterLink>
        </div>

        <PlanItem
                v-for="(subscription, index) in SUBSCRIPTIONS"
                :key="subscription.id"
                :subscription="subscription"
                :index="index"
                @addToCart="addToCart" />
    </section>
</template>

<script>
    import { defineComponent } from 'vue';
    import { mapGetters, mapActions } from 'vuex';
    import PlanItem from '@/components/Tariff/PlanItem/PlanItem.vue';

    export default defineComponent({
        name: 'PricingBlock',
        components: { PlanItem },
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
            await this.GET_SUBSCRIPTIONS_FROM_API({ currentPage: 1, pageSize: 2 });
        }
    })
</script>

<style lang="scss" scoped>
    @import '../../../assets/styles/base/mixins';
    .pricing{
        @include grid(32rem);
        .information{
            span{
                font-size: 2rem;
                color:#ff0000;
            }
            h3{
                font-size: 4rem;
                padding-top: .5rem;
                color:#fff;
            }
            p{
                line-height: 2;
                font-size: 1.4rem;
                color: #aaa;
                padding: 1rem 0;
                i{
                    padding-right: 1rem;
                    color: #ff0000;
                }
            }
        }
    }

</style>