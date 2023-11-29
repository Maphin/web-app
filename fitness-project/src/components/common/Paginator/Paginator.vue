<template>
    <vue-awesome-paginate
        :total-items="total"
        :items-per-page="pageSize"
        :max-pages-shown="maxPagesShown"
        v-model="currentPage"
        :on-click="onClickHandler"
        paginate-buttons-class="btn"
        active-page-class="btn-active"
        back-button-class="back-btn"
        next-button-class="next-btn"
    />
</template>

<script>
    import { defineComponent } from 'vue';
    import { mapActions } from 'vuex';
    import { DEFAULT_PAGE_SIZE, DEFAULT_MAXPAGE_SHOWN } from '../../../config';

    export default defineComponent({
        name: 'Paginator',
        props: {
            paginatorName: {
                type: String,
                default: '',
                required: true
            }
        },
        data() {
            return {
                currentPage: 1,
                pageSize: DEFAULT_PAGE_SIZE,
                total: 0,
                maxPagesShown: DEFAULT_MAXPAGE_SHOWN,
                userId: ''
            }
        },
        methods: {
            ...mapActions('subscriptions',[
                'GET_SUBSCRIPTIONS_FROM_API',
            ]),
            ...mapActions('auth',[
                'GET_USER_BY_TOKEN'
            ]),
            ...mapActions('orders',[
                'GET_ORDERS_FROM_API',
                'GET_USER_ORDERS'
            ]),
            ...mapActions('users',[
                'GET_USERS_FROM_API',
            ]),
            ...mapActions('visits',[
                'GET_VISITS_FROM_API',
            ]),
            async getServerResponseForPaginator(paginatorName) {
                let response = [];
                switch(paginatorName) {
                    case 'subscriptions':
                        response = await this.GET_SUBSCRIPTIONS_FROM_API({ currentPage: this.currentPage, pageSize: this.pageSize });
                        break;
                    case 'orders':
                        response = await this.GET_ORDERS_FROM_API({ currentPage: this.currentPage, pageSize: this.pageSize });
                        break;
                    case 'profile':
                        response = await this.GET_USER_ORDERS({ currentPage: this.currentPage, pageSize: this.pageSize, userId: this.userId });
                        break;
                    case 'users':
                        response = await this.GET_USERS_FROM_API({ currentPage: this.currentPage, pageSize: this.pageSize });
                        break;
                    case 'visits':
                        response = await this.GET_VISITS_FROM_API({ currentPage: this.currentPage, pageSize: this.pageSize });
                        break;
                }
                return this.total = response?.totalCount || 0;
            },
            async onClickHandler(page) {
                this.currentPage = page;
                this.$router.push({ query: { page: this.currentPage } });
                this.getServerResponseForPaginator(this.paginatorName);
            }
        },
        async mounted() {
            this.currentPage = parseInt(this.$route.query.page, 10) || 1;

            if (this.paginatorName === 'profile') {
                const user = await this.GET_USER_BY_TOKEN();
                if (user) {
                    this.userId = user.id;
                }
            }

            this.getServerResponseForPaginator(this.paginatorName);
        }
    })
</script>

<style lang="scss" scoped>
</style>