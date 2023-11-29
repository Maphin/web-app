<template>
    <header class="header">
        <div class="header__logo">
            <RouterLink to="/"><h1><span>Fit</span>Gym</h1></RouterLink>
        </div>
        <div class="header__navbar">
            <RouterLink class="header__navbar" @click="logout" to="/">Logout</RouterLink>
        </div>
    </header>
</template>

<script>
    import { defineComponent } from 'vue';
    import { mapGetters, mapActions } from 'vuex';
    export default defineComponent({
        name: 'HeaderBlock',
        computed: {
            ...mapGetters('auth', [
                'GET_USER_ROLE'
            ]),
            checkUserRole() {
                return this.GET_USER_ROLE;
            }
        },
        methods: {
            ...mapActions('auth', [
                'onLogout',
            ]),
            logout() {
                this.onLogout();
                this.$router.push({name: 'home'});
            }
        }
    })
</script>

<style lang="scss" scoped>
    .header {
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.2% 9%;
        z-index: 10000;
        &__logo {
            font-weight: bolder;

            font-size: 2.5rem;
            a {
                color: #fff;
                span {
                    color: #ff0000;
                }
            }
        }&__navbar a {
            display: inline-block;
            padding: 1.5rem 2rem;
            font-size: 1.7rem;
            color: #fff;
            &:hover {
                background-color: #ff0000;
            }
        }
    }
</style>