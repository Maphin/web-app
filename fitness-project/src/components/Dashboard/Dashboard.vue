<template>   
    <div>     
        <Header />
        <div class="entities">
        <RouterLink to="/dashboard/users">Users</RouterLink>
        <RouterLink to="/dashboard/subscriptions">Subscriptions</RouterLink>
        <RouterLink to="/dashboard/orders">Orders</RouterLink>
        <RouterLink to="/dashboard/visits">Visits</RouterLink>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import Header from '@/components/Home/Header/HeaderLogoOnly.vue';

    export default defineComponent({
        name: 'DashBoard',
        components: {Header},
        
    })
</script>

<style lang="scss" scoped>
    .entities {
    margin: 15rem auto; 
    padding: 2rem; 
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30rem;
    left: 50%;
    top: 50%;
    border: 0.2rem solid #ff0000;
    border-radius: 1rem;
    width: 40rem;
    &:hover{
    box-shadow: 0 0 6rem #ff0000;
    }
    a {
        color: #fff;
        margin: 1rem 0; 
        padding: 0.8rem 1.2rem; 
        font-size: 3rem; 
        text-decoration: none;
        border-radius: 4px;

        &:hover {
            background-color: #ff0000;
            color: #fff;
        }
    }
}
</style>