<template>
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
                    <input type="submit" value="subscribe" class="btn-main">
                    <div class="pulse">
                        <i class="fa fa-bell"></i>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <div class="footer__reputation">created by <span> @dmaphin & @natal1SH</span> | all rights reserved 2023 </div>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'FooterBlock'
    })
</script>

<style lang="scss" scoped>
    @import '../../../assets/styles/base/mixins';
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