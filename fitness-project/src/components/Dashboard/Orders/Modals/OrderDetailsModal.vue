<template>
    <div v-if="showDetailsModal" class="modal">
        <div class="modal__content">
            <h2 class="modal__title">Order Details</h2>
            <div v-if="order_data">
                <div class="order-item">
                    <div class="order-item__details">
                        <img class="order-item__image" 
                            src="https://img.freepik.com/premium-photo/digital-illustration-gym-with-word-gym-wall_605423-13237.jpg" 
                            alt="order.dish.title" />
                        <div>
                            <p class="order-item__title">Customer: {{ order_data.user_name }}</p>
                            <p class="order-item__subscription">Subscription: {{ order_data.subscription_title }}</p>
                        </div>
                    </div>
                    <p v-if="order_data.dateStart" class="order-item__date">Start date: {{ formatDate(order_data.dateStart) }}</p>
                    <p v-if="order_data.dateEnd !== null" class="order-item__date">End date: {{ formatDate(order_data.dateEnd) }}</p>
                    <p v-if="order_data.trainingsLeft" class="order-item__date">TrainingsLeft: {{ order_data.trainingsLeft }}</p>
                </div>
            </div>
            <div class="modal__button">
                <button class="close-button" @click="closeDetails">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import { formatDate } from '@/components/common/FormatDate/formatDate';

    export default defineComponent({
        name: 'OrderDetailsModal',
        data() {
            return {
                showDetailsModal: this.showDetails,
            }
        },
        props: {
            order_data: {
                type: Object,
                default: () => ({})
            },
            showDetails: {
                type: Boolean,
                default: null
            }
        },
        methods: {
            closeDetails() {
                this.$emit('closeDetails');
            },
            formatDate(date) {
                return formatDate(date);
            }
        }
    })
</script>

<style lang="scss" scoped>
    .modal {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .modal__content {
        background-color: #fff;
        padding: 1.5rem;
        border-radius: 0.375rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .modal__title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    .order-item {
        margin-bottom: 1rem;
    }
    .order-item__details {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
    }
    .order-item__image {
        width: 5rem;
        height: 5rem;
        object-fit: cover;
        border-radius: 0.25rem;
        margin-right: 1rem;
        margin-bottom: .5rem;
    }
    .order-item__title {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: .5rem;
    }
    .order-item__subscription {
        font-size: 1.4rem;
        font-weight: bold;
    }
    .order-item__date {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: .5rem;
    }
    .modal__button {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }
    .close-button {
        background-color: #e53e3e;
        color: #fff;
        font-weight: bold;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.375rem;
        cursor: pointer;
    }
    .close-button:hover {
        background-color: #c53030;
    }
</style>
