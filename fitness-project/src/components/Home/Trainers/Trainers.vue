<template>
    <section class="trainers" id="trainers">
        <h1 class="heading"> <span>expert trainers</span></h1>
        <div class="box-container">
            <div class="box">
                <img src="https://img.freepik.com/premium-photo/portrait-of-a-personal-trainer-in-the-gym-with-clipboards-in-his-hands_600776-26337.jpg" alt="">
                <div class="content">
                    <span>expert trainer</span>
                    <h3>john deo</h3>
                    <div class="share">
                        <a href="#" class="fa fa-facebook-f"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-pinterest"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                    </div>
                </div>
            </div>
            <div class="box">
                <img src="https://img.freepik.com/free-photo/male-boxer-posing-in-t-shirt-with-arms-crossed_23-2148426241.jpg" alt="">
                <div class="content">
                    <span>expert trainer</span>
                    <h3>leo hozier</h3>
                    <div class="share">
                        <a href="#" class="fa fa-facebook-f"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-pinterest"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                    </div>
                </div>
            </div>
            <div class="box">
                <img src="https://img.freepik.com/free-photo/side-view-smiley-man-at-gym_23-2150007196.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1698192000&semt=ais" alt="">
                <div class="content">
                    <span>expert trainer</span>
                    <h3>bon jovi</h3>
                    <div class="share">
                        <a href="#" class="fa fa-facebook-f"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-pinterest"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'TrainersBlock'
    })
</script>

<style lang="scss" scoped>
    @import '../../../assets/styles/base/mixins';
    .trainers .box-container{
        @include grid(29rem);
        .box{
            height: 40 rem;
            overflow: hidden;
            position: relative;
            &:hover .content{
                transform: translateY(0);
            }
            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
            .content{
                position: absolute;
                bottom: 0; left:0; right:0;
                background: #111;
                padding:2rem;
                transform: translateY(6.5rem) ;
                span{
                    font-size: 1.5rem;
                    color: #ff0000;
                }
                h3{
                    font-size: 2rem;
                    color:#fff;
                    padding-top: .5rem;
                }
                .share{
                    padding-top: 2rem;
                    margin-top: 1.5rem;
                    border-top: .1rem solid #aaa;
                    a{
                        font-size: 2rem;
                        color:#fff;
                        margin-right: 1.5rem;

                        &:hover{
                            color:#ff0000;
                        }
                    }
                }
            }
        }
    }
</style>