<template>
    <div class="entities">
        <RouterLink to="/dashboard/users">Users</RouterLink>
        <RouterLink to="/dashboard/subscriptions">Subscriptions</RouterLink>
        <RouterLink to="/dashboard/orders">Orders</RouterLink>
        <RouterLink to="/dashboard/visits">Visits</RouterLink>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'DashBoard',

    })
</script>

<style lang="scss" scoped>
    .entities {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-between;
        color: gray;
        font-size: x-large;
    }
</style>