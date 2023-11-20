<template>
    <div>
        <!-- <Header /> -->

        <div class="container">
            <router-link :to="{ name: 'dashboard' }" class="backwards">
                Back to Dashboard
            </router-link>
        </div>

        <div class="search">
            <div class="search__wrapper">
                <label for="search" class="search__label">Search</label>
                <input type="text"
                        id="search"
                        v-model="search"
                        class="search__input"
                        placeholder="Search by Full Name">
            </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              First name
            </th>
            <th scope="col">
              Last name
            </th>
            <th scope="col">
              Email
            </th>
            <th scope="col">
              Date of birth
            </th>
            <th scope="col">
              Phone
            </th>
          </tr>
        </thead>
        <tbody class="table__body">
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>
              <div>{{ user.firstName }}</div>
            </td>
            <td>
              <div>{{ user.lastName }}</div>
            </td>
            <td>
              <div>{{ user.email }}</div>
            </td>
            <td>
              <div>{{ user.birthDate }}</div>
            </td>
            <td>
              <div>{{ user.phone }}</div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <Paginator :paginatorName="'users'"/> -->
    </div>
  </template>

<script>
    import { defineComponent } from 'vue';
    import { mapGetters, mapActions } from 'vuex';

    export default defineComponent({
        name: 'DashboardUsers',
        components: {},
        data() {
            return {
                search: ''
            }
        },
        computed: {
            ...mapGetters('users', [
                'USERS'
            ]),
            filteredUsers() {
                return this.USERS.filter(user => user.firstName.toLowerCase().includes(this.search.toLowerCase()));
            },
        },
        methods: {
          ...mapActions('users', [
                'GET_USERS_FROM_API',
            ])
        },
        mounted() {
            this.GET_USERS_FROM_API({ currentPage: 1, pageSize: 10 });
        }
    })
</script>

<style lang="scss" scoped>
    .container {
        font-size: 1.5rem;
        padding-top: 2rem;
        padding-bottom: 2rem; 
        margin-left: 0.5rem;
    }
    .backwards {
        margin-bottom: 1rem; 
        color: #6B7280; 
        cursor: pointer; 
        :hover {
            color: #374151; 
        }
    }
    .search {
        display: flex; 
        margin-left: 0.5rem; 
        margin-bottom: 1rem; 
        flex-direction: row; 
        justify-content: space-between; 
        align-items: center;
        &__wrapper {
            width: 33.333333%; 
        }
        &__label {
            font-size: 1.5rem;
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0; 
        }
        &__input {
            font-size: 1.5rem;
            display: block;
            border-radius: 0.375rem; 
            border-color: #D1D5DB; 
            width: 100%; 
            height: 2.6rem; 
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); 
            @media (min-width: 640px) { 
                font-size: 1rem;
                line-height: 1.25rem; 
            }
        } 
    }
    .table {
        border-top-width: 1px; 
        border-color: #E5E7EB; 
        min-width: 100%;
        th {
            font-size: 1.5rem;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem; 
            padding-left: 1.5rem;
            padding-right: 1.5rem; 
            line-height: 1rem; 
            font-weight: 500; 
            letter-spacing: 0.05em; 
            text-align: left; 
            color: #6B7280; 
            text-transform: uppercase; 
        }
        &__body  {
            font-size: 1.2rem;
            border-top-width: 1px; 
            border-color: #E5E7EB; 
            background-color: #ffffff;
            td {
                padding-top: 1rem;
                padding-bottom: 1rem; 
                padding-left: 1.5rem;
                padding-right: 1.5rem; 
                white-space: nowrap;
                div {
                    line-height: 1.25rem; 
                    color: #111827; 
                } 
            } 
        }
    }
</style>