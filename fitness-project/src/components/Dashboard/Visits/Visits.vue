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
                        placeholder="Search by Customer's Name" />
            </div>
            <form class="date-filter-form" @submit.prevent="filterVisits">
            <div class="form-group">
                <label for="start-date">Start Date</label>
                <input id="start-date" v-model="filter.startDate" type="date" />
            </div>

            <div class="form-group">
                <label for="end-date">End Date</label>
                <input id="end-date" v-model="filter.endDate" type="date" />
            </div>

            <button type="submit">Filter</button>
        </form>
        </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              №
            </th>
            <th scope="col">
              Customer
            </th>
            <th scope="col">
              Subscription
            </th>
            <th scope="col">
              Visit Date
            </th>
          </tr>
        </thead>
        <tbody class="table__body">
          <tr v-for="(visit, index) in filteredVisits" :key="visit.id">
            <td>
              <div>{{ index + 1 }}</div>
            </td>
            <td>
              <div>{{ visit.user_name }}</div>
            </td>
            <td>
              <div>{{ visit.subscription_title }}</div>
            </td>
            <td>
              <div>{{ formatDate(visit.visit_date)}}</div>
            </td>
          </tr>
        </tbody>
      </table>
      <Paginator :paginatorName="'visits'"/>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import { mapGetters, mapActions } from 'vuex';
    import Header from '@/components/Home/Header/HeaderLogoOnly.vue';
    import Paginator from '../../common/Paginator/Paginator.vue';
    import { formatDate } from '../../common/FormatDate/formatDate.js';
    import { DEFAULT_PAGE_SIZE } from '../../../config';

    export default defineComponent ({
        name: 'DashboardVisits',
        components: { Header, Paginator },
        data() {
            return {
                search: '',
                filter: {
                    customerId: 0,
                    startDate: null,
                    endDate: null
                },
                currentPage: 1
            }
        },
        computed: {
            ...mapGetters('visits',[
                'VISITS'
            ]),
            filteredVisits() {
                if (this.VISITS !== undefined) {
                    return this.VISITS.filter(visit => visit.user_name.toLowerCase().includes(this.search.toLowerCase()));
                } else {
                    return [];
                }
            },
        },
        methods: {
            ...mapActions('visits',[
                'GET_VISITS_FROM_API',
                'GET_ONE_VISIT'
            ]),
            formatDate(date) {
                return formatDate(date);
            },
            async filterVisits() {
                await this.GET_VISITS_FROM_API({
                    customerId: this.filter.customerId, 
                    startDate: this.filter.startDate,
                    endDate: this.filter.endDate,
                    currentPage: this.currentPage,
                    pageSize: DEFAULT_PAGE_SIZE,
                });
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
    .date-filter-form {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;
        
    }

    .form-group {
        width: 48%;
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
        color: #333;
    }

    input {
        width: 90%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 14px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 3rem;
        background-color: #4caf50;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
    }

    button:hover {
        background-color: #45a049;
    }
</style>
