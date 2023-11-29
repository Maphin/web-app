<template>
    <div>
        <Header />

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
                        placeholder="Search by Title">
                <router-link to="/dashboard/addSubscription">
                    <button class="actions actions__add">
                        Add new Subscription
                    </button>
                </router-link>
            </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              №
            </th>
            <th scope="col">
              Title
            </th>
            <th scope="col">
              Description
            </th>
            <th scope="col">
              Type
            </th>
            <th scope="col">
              Period
            </th>
            <th scope="col">
              Price
            </th>
            <th scope="col">
              Edit
            </th>
            <th scope="col">
              Delete
            </th>
          </tr>
        </thead>
        <tbody class="table__body">
          <tr v-for="(subscription, index) in filteredSubscriptions" :key="subscription.id">
            <td>
              <div>{{ index + 1 }}</div>
            </td>
            <td>
              <div>{{ subscription.title }}</div>
            </td>
            <td>
              <div>{{ subscription.description }}</div>
            </td>
            <td>
              <div v-if="subscription.type === 0">Months</div>
              <div v-else>Trainings</div>
            </td>
            <td>
              <div>{{ subscription.period }}</div>
            </td>
            <td>
              <div>{{ subscription.price }}</div>
            </td>
            <td>
              <RouterLink :to="{name: 'dashboardUpdateSubscription', params:{id: subscription.id}}">
                    <button class="actions actions__edit">
                        Edit
                    </button>
                </RouterLink>
            </td>
            <td>
                <button class="actions actions__delete" 
                        @click="confirmDelete(subscription.id)">
                    Delete
                </button>
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
    import Header from '@/components/Home/Header/HeaderLogoOnly.vue';

    export default defineComponent({
        name: 'DashboardSubscriptions',
        components: {Header},
        data() {
            return {
                search: ''
            }
        },
        computed: {
            ...mapGetters('subscriptions', [
                'SUBSCRIPTIONS'
            ]),
            filteredSubscriptions() {
                return this.SUBSCRIPTIONS.filter(subscription => subscription.title.toLowerCase().includes(this.search.toLowerCase()));
            },
        },
        methods: {
          ...mapActions('subscriptions', [
                'GET_SUBSCRIPTIONS_FROM_API',
                'DELETE_SUBSCRIPTION',
            ]),
            confirmDelete(id) {
                if (window.confirm("Are you sure you want to delete the subscription?")) {
                    this.deleteSubscription(id);
                }
            },
            async deleteSubscription(id) {
                const res = await this.DELETE_SUBSCRIPTION(id);
                if (res.data) {
                    this.$router.push({name: 'dashboardSubscriptions'});
                }
            }
        },
        async mounted() {
            await this.GET_SUBSCRIPTIONS_FROM_API({ currentPage: 1, pageSize: 10 });
        }
    })
</script>

<style lang="scss" scoped>
    .container {
        font-size: 1.5rem;
        padding: 2rem 0.5rem;
        margin-left: 0.5rem;
    }

    .backwards {
        margin-bottom: 1rem;
        color: #6B7280;
        cursor: pointer;

        &:hover {
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
            display: flex;
            input {
                margin-right: 2rem;
                font-size: 1.2rem;
                padding-left: .5rem;
            }
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
            border-radius: 0.25rem;
            border: 1px solid #D1D5DB;
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
        border-top: 1px solid #E5E7EB;
        min-width: 100%;

        th {
            font-size: 1.75rem;
            padding: 0.75rem 1.5rem;
            line-height: 1rem;
            font-weight: 500;
            letter-spacing: 0.05em;
            text-align: left;
            color: #6B7280;
            text-transform: uppercase;
        }

        &__body {
            font-size: 1.2rem;
            border-top: 1px solid #E5E7EB;
            background-color: #ffffff;

            tr:nth-child(even) {
                background-color: #f9f9f9;
            }

            td {
                padding: 1rem 1.5rem;
                white-space: nowrap;

                &:hover {
                    background-color: #f0f0f0;
                }

                div {
                    line-height: 1.25rem;
                    color: #111827;
                }
            }
        }
    }
    .actions {
        padding: 0, 1.25rem, 0, 1.25rem;
        width: 80%;
        border-radius: 0.5rem; 
        border-width: 1px; 
        border-color: #6366F1;
        color: #4338CA;  
        height: 3rem; 
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms; 
        transition-duration: 150ms;
        cursor: pointer;
        &__edit {
            border-color: #6366F1;
            color: #4338CA;  
            &:hover {
                color: #E0E7FF; 
                background-color: #6366F1; 
            }
        }
        &__delete {
            border-color:red;
            color: black;  
            &:hover {
                color: #E0E7FF; 
                background-color: red; 
            }
        }
        &__add {
            height: 3.5rem;
            width: 120%;
            border-color: green;
            color: black;  
            &:hover {
                background-color: green; 
            }
        } 
    }
</style>
