<template>
    <div class="main-page">
        <header class="header">
            <div class="header__logo">
                <h1><span>Fit</span>Gym</h1>
            </div>
            <nav class="header__navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#trainers">Trainers</a>
                <a href="#blogs">Blogs</a>
            </nav>
        </header>

        <section class="home" id="home">
            <div class="swiper home__slider">
                <Swiper />
            </div>
        </section>

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

        <section class="features" id="features">
            <h1 class="features__title"><span>gym features</span></h1>
            <div class="features__container">
                <div class="box">
                    <div class="image">
                        <img src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg" alt="features">
                    </div>
                    <div class="box__content">
                        <img src="../../assets/icons/biceps.png" alt="icon1">
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
                        <img src="../../assets/icons/woman.png" alt="icon2">
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
                        <img src="../../assets/icons/weightlifting.png" alt="icon3">
                        <h3>powerlifting</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, porro.</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="footer">
            <div class="footer__container">
                <div class="footer__box">
                    <h3>quick links</h3>
                    <a class="footer__links" href="#home">Home</a>
                    <a class="footer__links" href="#about">About</a>
                    <a class="footer__links" href="#features">Features</a>
                    <a class="footer__links" href="#pricing">Pricing</a>
                    <a class="footer__links" href="#trainers">Trainers</a>
                    <a class="footer__links" href="#blogs">Blogs</a>
                </div>
                <div class="footer__box">
                    <h3>opening hours</h3>
                    <p> Monday : <i> 7:00am - 10:00pm </i></p>
                    <p> Tuesday : <i> 7:00am - 10:00pm </i></p>
                    <p> Wednesday : <i> 7:00am - 10:00pm </i></p>
                    <p> Thursday : <i> 7:00am - 10:00pm </i></p>
                    <p> Friday : <i> 7:00am - 10:00pm </i></p>
                    <p> Saturday : <i> 7:00am - 10:00pm </i></p>
                    <p> Sunday : <i> 9:00am - 8:00pm </i></p>
                </div>
                <div class="footer__box">
                    <h3>contact info</h3>
                    <a href="tel:+38 (066) 664-47-31" class="phones"><i class="fa fa-phone"></i>+38 (066) 664-47-31</a>
                    <a href="tel:+38 (098) 397-99-60" class="phones"><i class="fa fa-phone"></i>+38 (098) 397-99-60</a>
                    <p><i class="fa fa-envelope"></i>Fitgym@gmail.com</p>
                    <p><i class="fa fa-map"></i>Kyiv, Ukraine - 14032</p>
                    <div class="footer__socials">
                        <a href="#" class="fa fa-facebook-f"></a>
                        <a href="#" class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-telegram"></a>
                        <a href="#" class="fa fa-twitter"></a>
                    </div>
                </div>
                <div class="footer__box">
                    <h3>newsletter</h3>
                    <p>subscribe for latest promos</p>
                    <form action="" class="feed-form">
                        <input type="email" name="" class="email" placeholder="enter your email">
                        <input type="submit" value="subscribe" class="btn">
                        <div class="pulse">
                            <i class="fa fa-bell"></i>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <div class="footer__reputation">created by <span> @dmaphin & @natal1SH</span> | all rights reserved 2023 </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import Swiper from '../common/Swiper/Swiper.vue';

    export default defineComponent({
        name: 'HomePage',
        components: { Swiper },
        data() {
            return {}
        },
        methods: {}
    })
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/base/mixins';
    .main-page {
        background: #000;
        text-transform: capitalize;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.2% 9%;
        z-index: 10000;
        &__logo {
            font-weight: bolder;
            color: #fff;
            font-size: 2.5rem;
            span {
                color: #ff0000;
            }
        }
        &__navbar a {
            display: inline-block;
            padding: 1.5rem 2rem;
            font-size: 1.7rem;
            color: #fff;
            &:hover {
                background-color: #ff0000;
            }
        }
    }
    .home {
        padding: 0;
        margin-top: 1.5rem;
    }
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
    .footer {
        &__container {
            @include grid(25rem);
        }
        &__box {
            h3 {
                font-size: 2.2rem;
                color: #fff;
                padding: 1rem 0;
            }
            p, .phones {
                font-size: 1.5rem;
                color: #aaa;
                padding: 1rem 0;
                text-transform: none;
                i {
                    color: #ff0000;
                    padding-right: .5rem;
                }
            }
            .feed-form {
                .email {
                    margin-bottom: 1rem;
                    width: 100%;
                    background: #111;
                    padding: 1.2rem;
                    font-size: 1.5rem;
                    color: #fff;
                    text-transform: none;
                }
            }
            .phones {
                display: block;
            }
        }
        &__links {
            font-size: 1.5rem;
            display: block;
            color: #aaa;
            padding: 1rem 0;
            &:hover {
                color: #ff0000;
            }
        }
        &__socials {
            padding: 1rem 0;

            a {
                height: 4.5rem;
                width: 4.5rem;
                line-height: 4.5rem;
                text-align: center;
                font-size: 1.7rem;
                color: #fff;
                background: #111;
                border-radius: 50%;
                margin-right: .5rem;
                &:hover {
                    background: #ff0000;
                }
            }
        }
        &__reputation {
            font-size: 2rem;
            text-align: center;
            padding: 2rem;
            color: #fff;
            background: #111;
            line-height: 1.5;
            span {
                color: #ff0000;
                text-transform: none;
            }
        }
    }
    .pulse{
        height: 4.5rem;
        width: 4.5rem;
        background: linear-gradient(
            #8a82fb,
            #407ed7
        );
        position: absolute;
        left: 74%;
        margin: 1.2rem auto;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-size: 1.7rem;
        color: #ffffff;
    }
    .pulse:before,
    .pulse:after{
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #8a82fb;
        border-radius: 50%;
        z-index: -1;
        opacity: 0.7;
    }
    .pulse:before{
        animation: pulse 2s ease-out infinite;
    }
    .pulse:after{
        animation: pulse 2s 1s ease-out infinite;
    }
    @keyframes pulse{
        100%{
            transform: scale(1.5);
            opacity: 0;
        }
    }
</style>