<template>
    <div class="full-height">
        <Header />
        <div class="profile-page">
            <div class="image">
                <img src="../../assets/icons/user.png" alt="avatar">
            </div>
            <div v-if="user" class="info">
                <h1><span>Full Name: </span> {{user.firstName + ' ' + user.lastName}}</h1>
                <h1><span>Email: </span>{{user.email}}</h1>
                <h1><span>Phone: </span>{{user.phone}}</h1>
                <h1><span>Curent Subscription: </span>{{user.subscription_title}}</h1>
            </div>
            <div v-if="isFetching" class="flex justify-center items-center">
                <img src="../../assets/img/preloader.gif" alt="Loading...">
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
                user: null,
                isFetching: true
            }
        },
        methods: {
            ...mapActions('auth', [
                'GET_USER_BY_TOKEN',
            ]),
        },
        async created() {
            try {
                this.user = await this.GET_USER_BY_TOKEN();
            } finally {
                this.isFetching = false;
            }
            
        },
        
    })
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/base/mixins';
    .full-height {
        background: url('../../assets/img/background.jfif') center (center/cover) no-repeat;
        min-height: 100vh;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .profile-page {
        display: flex;
        flex-direction: row;
        margin: 20rem auto; 
        padding: 2rem; 
        background: #111;
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
        padding: 1rem;
        margin-left: 0.2rem;
        h1 {
            margin-bottom: .5rem;
            span {
                font-weight: 100;
                color: #fff;
            }
        }
    }
</style>