<template>
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
        <div class="header__navbar">
            <RouterLink to="/login">Log In</RouterLink>
        </div>
    </header>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'HeaderBlock'
    })
</script>

<style lang="scss" scoped>
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
</style>