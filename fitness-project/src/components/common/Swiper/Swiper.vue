<template>
    <div class="swiper" id="swiper">
        <swiper-container
            :slides-per-view="1"
            :space-between="20"
            :effect="fade"
            :grabCursor="true"
            :centered-slides="true"
            :pagination="{
                hideOnClick: true
            }"
            :loop="true"
        >
            <swiper-slide>
                <div class="swiper-slide slide">
                    <div class="slide__content">
                        <span>be strong, be fit</span>
                        <h3>Make yourself stronger than your excuses.</h3>
                        <!-- <a href="#" class="btn-main">get started</a> -->
                        <RouterLink :to="{name: 'tariff'}">
                            <button class="btn-main">
                                Get Started
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-slide slide slide2">
                    <div class="slide__content">
                        <span>be strong, be fit</span>
                        <h3>Make yourself stronger than your excuses.</h3>
                        <RouterLink :to="{name: 'tariff'}">
                            <button class="btn-main">
                                Get Started
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-slide slide slide3">
                    <div class="slide__content">
                        <span>be strong, be fit</span>
                        <h3>Make yourself stronger than your excuses.</h3>
                        <RouterLink :to="{name: 'tariff'}">
                            <button class="btn-main">
                                Get Started
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import 'swiper/css';
    import { register } from 'swiper/element/bundle';
    register();

    export default defineComponent({
        name: 'SwiperSlider'
    })
</script>

<style lang="scss" scoped>
    .swiper {
        padding: 0;
        margin-top: 1.5rem;
    }
    .slide {
        background: url('https://wallpapercave.com/wp/wp8997383.jpg') center (center/cover) no-repeat;
        min-height: 70vh;
        padding: 2rem 9%;
        display: flex;
        align-items: center;
        &__content {
            width: 60rem;
            span {
                font-size: 2rem;
                color: #ff0000;
                display: block;
            }
            h3 {
                font-size: 5rem;
                color: #fff;
                padding: 1rem 0;
            }
        }
    }
    .slide2 {
        background: url('https://i.pinimg.com/originals/33/41/b6/3341b652cae46cc6f6f09b284ecbe941.jpg') center (center/cover) no-repeat;
    }
    .slide3 {
        background: url('https://images2.alphacoders.com/696/thumb-1920-696022.jpg') center (center/cover) no-repeat;
    }
</style>