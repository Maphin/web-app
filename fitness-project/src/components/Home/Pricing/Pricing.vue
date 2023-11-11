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
            <a href="#" class="btn">all pricing</a>
        </div>

        <div class="plan basic">
            <h3>basic plan</h3>
            <div class="price"><span>$</span>30<span>/mo</span></div>
        <div class="list">
            <p> <i class="fa fa-check"></i> personal training </p>
            <p> <i class="fa fa-check"></i> cardio exercise </p>
            <p> <i class="fa fa-check"></i> weight lifting </p>
            <p> <i class="fa fa-check"></i> diet plans </p>
            <p> <i class="fa fa-check"></i> overall results </p>
        </div> 
            <a href="#" class="btn">get started</a>
        </div>

        <div class="plan">
            <h3>premium plan</h3>
            <div class="price"><span>$</span>30<span>/mo</span></div>
        <div class="list">
            <p> <i class="fa fa-check"></i> personal training </p>
            <p> <i class="fa fa-check"></i> cardio exercise </p>
            <p> <i class="fa fa-check"></i> weight lifting </p>
            <p> <i class="fa fa-check"></i> diet plans </p>
            <p> <i class="fa fa-check"></i> overall results </p>
        </div> 
            <a href="#" class="btn">get started</a>
        </div>
    </section>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'PricingBlock'
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
        .price{
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