<template>
    <div class="plans" id="plans">
        <div :class="{ 'plan': index % 2 !== 0, 'plan basic': index % 2 === 0 || index == undefined }">
            <h3>{{ subscription.title }}</h3>
            <div class="plan">
                <span>$</span>
                {{ subscription.price }}
                <span v-if="subscription.type === 0">{{subscription.period}}/mo</span>
                <span v-else>{{subscription.period}}/tr</span>
            </div>
            <div class="list"
                v-for="description in parseDescription" :key="description">
                <p> <i class="fa fa-check"></i> {{ description }} </p>
            </div> 
            <button v-if="!isCheckout" @click="addToCart" class="btn-main">get started</button>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'PlanItem',
        props: {
            subscription: {
                type: Object
            },
            index: {
                type: Number
            },
            isCheckout: {
                type: Boolean
            }
        },
        computed: {
            parseDescription() {
                if (this.subscription !== null) {
                    return this.subscription.description.split(';');
                }
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
        padding: 1rem 5%;
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