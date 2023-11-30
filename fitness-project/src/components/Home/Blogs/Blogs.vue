<template>
    <section class="blogs" id="blogs">
        <div class="slide">
            <div class="blogs-s">
                <div class="wrapper">
                    <div class="image">
                        <img src="https://cdn.oxygenmag.com/wp-content/uploads/2021/12/Deadlift.jpg?width=1200" alt="photo"> 
                    </div>
                    <div class="content">
                        <div class="link"> <a href="#">by user</a> <span>|</span> <a href="#">21st october, 2023</a> </div>
                        <h3>fitness is not about being better than someone else</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit mollitia totam nemo. Facilis commodi qui doloribus id possimus, placeat earum repudiandae vero nihil illo.</p>
                        <a href="#" class="btn-main">read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'BlogsBlock'
    })
</script>

<style lang="scss" scoped>
    .blogs {
        .slide {
            background: #111;
            margin-bottom: 7rem;

            &:hover .image img {
                transform: scale(1.1);
            }

            .image {
                height: 25rem;
                width: 100%;
                overflow: hidden;

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
            .content {
                padding:2rem;
                .link {
                    padding-bottom: 1rem;
                    font-size: 1.5rem;
                    a {
                        color: #ff0000;

                        &:hover{
                            color: #fff;
                        }
                    }
                    span{
                        color:#fff;
                        padding:0 1rem;
                    }
                }
                h3 {
                    font-size: 2rem;
                    color: #fff;
                    line-height: 1.5;
                }
                p {
                    font-size:1.3rem;
                    color: #aaa;
                    line-height:2;
                    padding: 1rem 0;
                }
            }
        }
}
</style>