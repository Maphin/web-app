<template>
    <section class="features" id="features">
        <h1 class="features__title"><span>gym features</span></h1>
        <div class="features__container">
            <div class="box">
                <div class="image">
                    <img src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg" alt="features">
                </div>
                <div class="box__content">
                    <img src="../../../assets/icons/biceps.png" alt="icon1">
                    <h3>body building</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, porro.</p>
                    <a href="#" class="btn">read more</a>
                </div>
            </div>
            <div class="box box__second">
                <div class="image">
                    <img src="https://rare-gallery.com/uploads/posts/878456-ABS-Fitness-Gym-Workout-Two.jpg" alt="features">
                </div>
                <div class="box__content">
                    <img src="../../../assets/icons/woman.png" alt="icon2">
                    <h3>fitness</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, porro.</p>
                    <a href="#" class="btn">read more</a>
                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="https://c4.wallpaperflare.com/wallpaper/787/610/414/muscle-press-pose-athlete-workout-hd-wallpaper-preview.jpg" alt="features">
                </div>
                <div class="box__content">
                    <img src="../../../assets/icons/weightlifting.png" alt="icon3">
                    <h3>powerlifting</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, porro.</p>
                    <a href="#" class="btn">read more</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'FeaturesBlock'
    })
</script>

<style lang="scss" scoped>
    @import '../../../assets/styles/base/mixins';
    .features {
        &__title {
            text-align: center;
            margin-bottom: 2rem;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                height: .1rem;
                width: 100%;
                background: #aaa;
                z-index: -1;
            }
            span {
                font-size: 3rem;
                color: #fff;
                background: #000;
                padding: .5rem 1.5rem;
                border: .1rem solid #aaa;
            }
        }
        &__container {
            @include grid(32rem);
            gap: 0;
            .box {
                background: #111;
                &__second {
                    display: flex;
                    flex-flow: column-reverse;
                }
                &:hover .image img {
                    transform: scale(1.1);
                }
                .image {
                    height: 30rem;
                    width: 100%;
                    overflow: hidden;
                    img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }
                }
                &__content {
                    padding: 2rem;
                    text-align: center;

                    img {
                        height: 9rem;
                        margin-bottom: 1rem;
                        filter: invert(1);
                    }
                    h3 {
                        font-size: 2rem;
                        color: #ff0000;
                    }
                    p {
                        line-height: 2;
                        font-size: 1.5rem;
                        color: #aaa;
                        padding: 1rem 0;
                    }
                }
            }
        }
    }
</style>