<template>
    <section class="review">

        <div class="information">
            <span>testimonials</span>
            <h3>what our clients says</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit mollitia totam nemo. Facilis commodi qui doloribus id possimus, placeat earum repudiandae vero nihil illo. Quia fugit esse eveniet dolore!
            Harum quas delectus inventore</p>
            <a href="#" class="btn">read more</a>
        </div>

        <div class="review-slider">
            <div class="wrapper">
                <div class="slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit mollitia totam nemo. Facilis commodi qui doloribus id possimus, placeat earum repudiandae vero nihil illo</p>
                    <div class="user">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/320px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="">
                        <div class="info">
                            <h3>john deo</h3>
                            <span>designer</span>
                        </div>
                        <i class="fa fa-quote-left"></i>
                    </div>
                </div>

                <div class="slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit mollitia totam nemo. Facilis commodi qui doloribus id possimus, placeat earum repudiandae vero nihil illo</p>
                    <div class="user">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/%D0%94%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0_%D1%81_%D0%B6%D0%B5%D0%BC%D1%87%D1%83%D0%B6%D0%BD%D0%BE%D0%B9_%D1%81%D0%B5%D1%80%D1%91%D0%B6%D0%BA%D0%BE%D0%B9.jpg/1200px-%D0%94%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0_%D1%81_%D0%B6%D0%B5%D0%BC%D1%87%D1%83%D0%B6%D0%BD%D0%BE%D0%B9_%D1%81%D0%B5%D1%80%D1%91%D0%B6%D0%BA%D0%BE%D0%B9.jpg" alt="">
                        <div class="info">
                            <h3>john deo</h3>
                            <span>designer</span>
                        </div>
                        <i class="fa fa-quote-left"></i>
                    </div>
                </div>

                <div class="slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit mollitia totam nemo. Facilis commodi qui doloribus id possimus, placeat earum repudiandae vero nihil illo</p>
                    <div class="user">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Valentin_Serov_-_%D0%94%D0%B5%D0%B2%D0%BE%D1%87%D0%BA%D0%B0_%D1%81_%D0%BF%D0%B5%D1%80%D1%81%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8._%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%92.%D0%A1.%D0%9C%D0%B0%D0%BC%D0%BE%D0%BD%D1%82%D0%BE%D0%B2%D0%BE%D0%B9_-_Google_Art_Project.jpg/640px-Valentin_Serov_-_%D0%94%D0%B5%D0%B2%D0%BE%D1%87%D0%BA%D0%B0_%D1%81_%D0%BF%D0%B5%D1%80%D1%81%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8._%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%92.%D0%A1.%D0%9C%D0%B0%D0%BC%D0%BE%D0%BD%D1%82%D0%BE%D0%B2%D0%BE%D0%B9_-_Google_Art_Project.jpg" alt="">
                        <div class="info">
                            <h3>john deo</h3>
                            <span>designer</span>
                        </div>
                        <i class="fa fa-quote-left"></i>
                    </div>
                </div>
                <div class="slide slide">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit mollitia totam nemo. Facilis commodi qui doloribus id possimus, placeat earum repudiandae vero nihil illo</p>
                    <div class="user">
                        <img src="https://tsdea.archives.gov.ua/img/shevchenko200/foto/foto%203.jpg" alt="">
                        <div class="info">
                            <h3>john deo</h3>
                            <span>designer</span>
                        </div>
                        <i class="fa fa-quote-left"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ReviewsBlock'
    })
</script>

<style lang="scss" scoped>
    .review{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;

        .information{
            flex:1 1 35rem;
        
            span{
                font-size: 2rem;
                color:#ff0000;
            }

            h3{
                font-size: 3rem;    
                color:#fff;
                padding-top: 1rem;
            }

            p{
                font-size: 1.5rem;
                line-height:2;
                color:#aaa;
                padding:1rem 0;
            }
        }

        .review-slider{
            flex:1 1 60rem;

            .slide{
                background: linear-gradient(130deg, #111 93%, transparent 90%);
                padding: 2rem 3rem;

                p{
                    font-size: 1.5rem;
                    line-height: 2;
                    color: #aaa;
                }

                .user{
                    display: flex;
                    align-items: center;

                    img{
                        height: 5rem; 
                        width: 5rem;
                        object-fit: cover;
                        border-radius: 50%;
                        margin-right: 1rem;
                    }

                    h3{
                        font-size: 2rem;
                        color: #fff;
                    }

                    span{
                        color:#ff0000;
                        font-size: 1.5rem;
                    }

                    i{
                        font-size:5rem;
                        margin-left: auto;
                        margin-right: 2rem;
                        color:#ff0000;
                    }
                }
            }
        }
    }
</style>