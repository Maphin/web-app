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
                        placeholder="Search by Customer's Name">
            </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              Order ID
            </th>
            <th scope="col">
              Customer
            </th>
            <th scope="col">
              Subscription
            </th>
            <th scope="col">
              Start date
            </th>
            <th scope="col">
              End Date
            </th>
            <th scope="col">
              Trainings Left
            </th>
            <th scope="col">
              Order details
            </th>
          </tr>
        </thead>
        <tbody class="table__body">
          <tr v-for="(order, index) in filteredOrders" :key="order.id">
            <td>
              <div>{{ order.id }}</div>
            </td>
            <td>
              <div>{{ order.user_name }}</div>
            </td>
            <td>
              <div>{{ order.subscription_title }}</div>
            </td>
            <td>
              <div>{{ formatDate(order.dateStart) }}</div>
            </td>
            <td>
              <div v-if="order.dateEnd">{{ formatDate(order.dateEnd)}}</div>
              <div v-else> — </div>
            </td>
            <td>
              <div>{{ order.trainingsLeft }}</div>
            </td>
            <td>
                <button class="actions actions__edit"
                        @click="showDetails(order.id)">
                    View details
                </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Paginator :paginatorName="'orders'"/>

      <OrderDetailsModal
            v-if="showDetailsModal"
            @closeDetails="closeDetailsModal"
            :showDetails="showDetailsModal"
            :order_data="order_data"
        />
    </div>
  </template>

<script>
    import { defineComponent } from 'vue';
    import { mapGetters, mapActions } from 'vuex';
    import Header from '@/components/Home/Header/HeaderLogoOnly.vue';
    import OrderDetailsModal from './Modals/OrderDetailsModal.vue';
    import Paginator from '../../common/Paginator/Paginator.vue';
    import { formatDate } from '../../common/FormatDate/formatDate.js';

    export default defineComponent ({
        name: 'DashboardOrders',
        components: {Header, OrderDetailsModal, Paginator},
        data() {
            return {
                search: '',
                showConfirmationModal: false,
                showDetailsModal: false,
                currentOrderId: '',
                order_data: {},
            }
        },
        computed: {
            ...mapGetters('orders',[
                'ORDERS'
            ]),
            filteredOrders() {
                return this.ORDERS.filter(order => order.user_name.toLowerCase().includes(this.search.toLowerCase()));
            },
        },
        methods: {
            ...mapActions('orders',[
                'GET_ONE_ORDER'
            ]),
            async showDetails(orderId) {
                this.currentOrderId = orderId;
                try {
                    const order = await this.GET_ONE_ORDER({id: this.currentOrderId});
                    if (order) {
                        this.showDetailsModal = true;
                        this.order_data = order;
                    }
                } catch (e) {
                    console.log(e)
                }
            },
            closeDetailsModal() {
                this.showDetailsModal = false;
            },
            formatDate(date) {
                return formatDate(date);
            }
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
                margin-left: .3rem;
                width: 50%;
                padding: 10px;
                box-sizing: border-box;
                border: 2px solid #ddd;
                border-radius: 25px;
                outline: none;
                font-size: 16px;
                background: #fff url('https://img.icons8.com/ios-filled/50/000000/search.png') no-repeat 95% 50%;
                background-size: 20px;
                transition: border-color 0.3s;
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
        margin-bottom: 4rem;

        th {
            font-size: 1.75rem;
            padding: 0.75rem 1.5rem;
            line-height: 1rem;
            font-weight: 500;
            letter-spacing: 0.05em;
            text-align: center;
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
                text-align: center;

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
