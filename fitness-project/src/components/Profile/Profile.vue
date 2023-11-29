<template>
    <div style="background: #111;">
        <Header />
        <div class="profile-page">
            <div class="image">
                <img src="../../assets/icons/xui.png" alt="">
            </div>
            <div v-if="user" class="info">
                
                <h1>{{user.firstName}} {{ user.lastName }}</h1>
                <h1>{{user.email}}</h1>
                <h1>{{user.phone}}</h1>
                <h1></h1>
                
            </div>
            <div v-else>
                Loading user...
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import Header from '../Home/Header/HeaderLogoOnly.vue';
    import {mapActions} from 'vuex';
    import Footer from '../Home/Footer/Footer.vue';

    export default defineComponent({
        name: 'Profile',
        components: {Header, Footer},
        data() {
            return {
                search: '',
                user: null,
            }
        },
        methods: {
            ...mapActions('auth', [
                'GET_USER_BY_TOKEN',
            ]),
        },
        async created() {
            this.user = await this.GET_USER_BY_TOKEN();
            console.log(this.user)
        },
        
    })
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/base/mixins';
    .profile-page {
    display: flex;
    flex-direction: row;
    margin: 20rem auto; 
    padding: 2rem; 
    background: #333;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    left: 50%;
    top: 50%;
    border: 0.2rem solid #ff0000;
    border-radius: 1rem;
    width: 50%;
    color: #fff;

    .image {
        width: 25%;
            overflow: hidden;
            img {
                    display: block;
                    width: 70%;
                    height: auto;
                    object-fit: cover;
                }
            }


    }
    .info{
        flex: 1;
        padding: 1em;
        margin-left: 0.2rem;
    }
</style>