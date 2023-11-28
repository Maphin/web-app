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
                       placeholder="Search by First Name">
            </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              №
            </th>
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
            <th scope="col">
              Role
            </th>
          </tr>
        </thead>
        <tbody class="table__body">
          <tr v-for="(user, index) in filteredUsers" :key="user.id">
            <td>
              <div>{{ index + 1 }}</div>
            </td>
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
              <div v-if="user.birthDate">{{ formatDate(user.birthDate) }}</div>
            </td>
            <td>
              <div>{{ user.phone }}</div>
            </td>
            <td class="table__body__role">
              <div v-if="user.isCoach" class="coach">Coach <i class="fa fa-shield"></i></div>
              <div v-else class="customer">Customer <i class="fa fa-unlock"></i></div>
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
    import { formatDate } from '@/components/common/FormatDate/formatDate';

    export default defineComponent({
        name: 'DashboardUsers',
        components: { Header },
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
            ]),
            formatDate(date) {
              return formatDate(date);
            }
        },
        mounted() {
            this.GET_USERS_FROM_API({ currentPage: 1, pageSize: 14 });
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
            &__role div {
              padding: 5px 10px;
              border-radius: 5px;
              display: inline-block;
              margin: 2px;
            }
            &__role .coach {
              background-color: #4CAF50; /* Green color for Coach */
              color: #ffffff; /* White text for Coach */
            }
            &__role .customer {
              background-color: #3498db; /* Blue color for Customer */
              color: #ffffff; /* White text for Customer */
            }
            .fa {
              margin-left: 5px;
          }
        }
    }
</style>