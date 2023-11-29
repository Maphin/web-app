<template>
    <section class="plans" id="plans">
        <div class="plan basic">
            <h3>{{ subscription.title }}</h3>
            <div class="plan">
                <span>$</span>
                {{ subscription.price }}
                <span v-if="subscription.type === 0">{{subscription.period}}/mo</span>
                <span v-else>{{subscription.period}}/tr</span>
            </div>
            <div class="list">
                <p> <i class="fa fa-check"></i> Unlimited weekly visits. </p>
                <p> <i class="fa fa-check"></i> 8 group classes/month. </p>
                <p> <i class="fa fa-check"></i> 2 personal trainer sessions. </p>
                <p> <i class="fa fa-check"></i> Sauna & steam room access. </p>
                <p> <i class="fa fa-check"></i> 1 diet consultant session. </p>
            </div> 
            <button @click="addToCart" class="btn-main">get started</button>
        </div>

        <!-- <div class="plan">
            <h3>Premium Plan</h3>
            <div class="plan"><span>$</span>40<span>/mo</span></div>
        <div class="list">
            <p> <i class="fa fa-check"></i> Unlimited access 24/7. </p>
            <p> <i class="fa fa-check"></i> Unlimited group classes. </p>
            <p> <i class="fa fa-check"></i> 5 personal trainer sessions. </p>
            <p> <i class="fa fa-check"></i> Unlimited spa access. </p>
            <p> <i class="fa fa-check"></i> Unlimited diet consultations. </p>
        </div> 
            <a href="#" class="btn">get started</a>
        </div>

        <div class="plan basic">
            <h3>Fitness-Start</h3>
            <div class="plan"><span>$</span>15<span>/mo</span></div>
        <div class="list">
            <p> <i class="fa fa-check"></i> 12 visits/month. </p>
            <p> <i class="fa fa-check"></i> 4 group classes/month. </p>
            <p> <i class="fa fa-check"></i> 1 personal trainer session. </p>
            <p> <i class="fa fa-check"></i> Weekend spa access. </p>
            <p> <i class="fa fa-check"></i> 2 yoga/meditation sessions. </p>
        </div> 
            <a href="#" class="btn">get started</a>
        </div>

        <div class="plan">
            <h3>Corporate Plan </h3>
            <div class="plan"><span>$</span>90<span>/mo</span></div>
        <div class="list">
            <p> <i class="fa fa-check"></i> Unlimited for 5 staff. </p>
            <p> <i class="fa fa-check"></i> Unlimited group classes. </p>
            <p> <i class="fa fa-check"></i> 3 trainer sessions/staff. </p>
            <p> <i class="fa fa-check"></i> Unlimited spa for members. </p>
            <p> <i class="fa fa-check"></i> Monthly group diet session. </p>
        </div> 
            <a href="#" class="btn">get started</a>
        </div>

        <div class="plan basic">
            <h3>Healthy Lifestyle </h3>
            <div class="plan"><span>$</span>17<span>/mo</span></div>
        <div class="list">
            <p> <i class="fa fa-check"></i> 15 visits per month. </p>
            <p> <i class="fa fa-check"></i> 6 group classes/month. </p>
            <p> <i class="fa fa-check"></i> 2 personal trainer sessions. </p>
            <p> <i class="fa fa-check"></i> Weekday spa access. </p>
            <p> <i class="fa fa-check"></i> Monthly nutrition plan. </p>
        </div> 
            <a href="#" class="btn">get started</a>
        </div>

        <div class="plan">
            <h3>Weekend Plan</h3>
            <div class="plan"><span>$</span>13<span>/mo</span></div>
        <div class="list">
            <p> <i class="fa fa-check"></i> Weekend only access. </p>
            <p> <i class="fa fa-check"></i> 4 group classes/month. </p>
            <p> <i class="fa fa-check"></i> No personal trainer. </p>
            <p> <i class="fa fa-check"></i> Weekend spa access. </p>
            <p> <i class="fa fa-check"></i> 2 yoga/meditation sessions. </p>
        </div> 
            <a href="#" class="btn">get started</a>
        </div> -->
    </section>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'PlanItem',
        props: {
            subscription: {
                type: Object
            }
        },
        methods: {
            addToCart() {
                this.$emit('addToCart', this.subscription);
            },
        },
    })
</script>

<style lang="scss" scoped>
    .plans{
        .plan{
            text-align: center;
            padding:2rem;
            flex-wrap: wrap;
            &.basic{
                background:liner-gradient(130deg, transparent 90%);
                background: #111;
            }
            h3{
                font-size: 2.5rem;
                margin:1rem 0;
                color:#fff;
            }
            .plan{
                font-size: 5rem;
                font-weight: bolder;
                color:#ff0000;

                span{
                    color:#fff;
                    font-size: 2rem;
                }
            }
            .list{
                padding:1rem 0;
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
    }

</style>