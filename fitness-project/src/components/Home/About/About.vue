<template>
    <section class="about" id="about">
        <div class="image">
            <img src="https://e1.pxfuel.com/desktop-wallpaper/36/516/desktop-wallpaper-women-sport-bodybuilder-muscles-tattoo-fitness-model-back-bodybuilding-gym-clothes-joint-muscular-hand-male-muscle-neck-arm-shoulder-chest-computer-abdomen-human-body-trunk-physical.jpg" alt="about_img">
        </div>
        <div class="about__content">
            <span>about us</span>
            <h3 class="about__content__title">Every day is a chance to become better</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit mollitia totam nemo. Facilis commodi qui doloribus id possimus, placeat earum repudiandae vero nihil illo. Quia fugit esse eveniet dolore!
            Harum quas delectus inventore dolorem distinctio? Sapiente deleniti veritatis, quo sed nam et nobis vitae totam mollitia est exercitationem maiores dignissimos. Odit, cum adipisci aliquam deserunt sed placeat accusamus veniam.</p>
            <div class="box-container">
                <div class="box">
                    <h3><i class="fa fa-check"></i>body and mind</h3>
                    <p>some lorem text will be here!</p>
                </div>
                <div class="box">
                    <h3><i class="fa fa-check"></i>healthy life</h3>
                    <p>some lorem text will be here!</p>
                </div>
                <div class="box">
                    <h3><i class="fa fa-check"></i>strategies</h3>
                    <p>some lorem text will be here!</p>
                </div>
                <div class="box">
                    <h3><i class="fa fa-check"></i>workout</h3>
                    <p>some lorem text will be here!</p>
                </div>
            </div>
            <a href="#" class="btn">read more</a>
        </div>
    </section>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'AboutBlock'
    })
</script>

<style lang="scss" scoped>
    .about {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8rem;
        .image {
            flex: 1 1 42rem;
            position: relative;
            &::before, &::after {
                content: '';
                position: absolute;
                z-index: -1;
                background: #ff0000;
                height: 15rem;
                width: 15rem;
            }
            &::before {
                top: 0;
                left: 0;
            }
            &::after {
                bottom: 0;
                right: 0;
            }
            img {
                width: 100%;
                padding: 2rem;
            }
        }
        &__content {
            flex: 1 1 42rem;
            span {
                font-size: 2rem;
                color: #ff0000;
            }
            p {
                font-size: 1.5rem;
                color: #aaa;
                padding: 1rem 0;
                line-height: 2;
            }
            &__title {
                font-size: 4rem;
                color: #fff;
                margin-top: .5rem;
            }
            .box-container {
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;
                margin-top: 1rem;
                .box {
                    flex: 1 1 20rem;
                    h3 {
                        font-size: 2rem;
                        color: #fff;
                        i {
                            padding-right: 1.5rem;
                            color: #ff0000;
                        }
                    }
                }
            }
        }
    }
</style>