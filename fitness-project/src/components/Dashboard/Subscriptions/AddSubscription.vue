<template>
    <Header />
    <div class="wrapper">
        <form @submit.prevent="onSubmit"
            class="custom-form">
            <h2 class="form-title">Edit Subscription</h2>
            <div class="form-group">
                <label class="form-label" for="title">
                    Title
                </label>
                <input v-model.trim="title"
                    class="form-input"
                    id="title" type="text" placeholder="Enter title" />
            </div>
            <div class="form-group">
                <label class="form-label" for="description">
                    Description
                </label>
                <textarea v-model.trim="description"
                    class="form-input"
                    id="description" placeholder="Enter description">
                </textarea>
            </div>
            <div class="form-group">
                <label class="form-label" for="title">
                    Select subscription's type
                </label>
                <Select 
                    :selected="type"
                    :options="[{id: 1, title: 'Months'}, {id: 2, title: 'Trainings'}]"
                    @select="chooseType"
                />
            </div>
            <div class="form-group">
                <label class="form-label" for="type">
                    Period
                </label>
                <input v-model.trim="period"
                    class="form-input"
                    id="period" type="number" />
            </div>
            <div class="form-group">
                <label class="form-label" for="price">
                    Price
                </label>
                <input v-model.trim="price"
                    class="form-input"
                    id="price" type="number" placeholder="Enter price" />
            </div>
            <div class="form-group-button">
                <button class="form-button">
                    Add Subscription
                </button>
            </div>
            <ErrorMessage :errors="errors"
                          :hasErrors = "errorFlag"
                        class="errors"
            />
        </form>
    </div>
</template>

<script>
    import Header from '@/components/Home/Header/Header.vue';
    import { defineComponent } from "vue";
    import { mapActions} from 'vuex';
    import Select from '@/components/common/Select/Select.vue';
    import ErrorMessage from '@/components/common/Error/Error.vue';
    import { nameInputsValidation, periodValidation, priceValidation, hasErrors } from '../../common/validations/validations.js';

    export default defineComponent({
        name: 'DashboardAddSubscription',
        components: { Header, Select, ErrorMessage },
        data() {
            return {
                title: '',
                description: '',
                type: 'Months',
                period: '',
                price: 0,
                errors: {
                    title: '',
                    price: '',
                    period: ''
                }
            }
        },
        methods: {
            ...mapActions('subscriptions',[
                'CREATE_SUBSCRIPTION'
            ]),
            clearErrors(fieldName) {
                this.errors[fieldName] = '';
            },
            errorFlag() {
                return hasErrors(this.errors);
            },
            async onSubmit() {
                try {
                    if (!this.price) {
                        this.errors.price = 'Enter the price!';
                        return;
                    };
                    let subType = '';
                    if (this.type === 'Months') {
                        subType = 0;
                    } else {
                        subType = 1;
                    }
                    const data = {title: this.title, description: this.description, type: subType, period: this.period, price: this.price};

                    const res = await this.CREATE_SUBSCRIPTION(data);

                    if (res.data) {
                        this.$router.push({name: 'dashboardSubscriptions'});
                    }
                } catch (err) {
                    console.log(err.response.data.message);
                }
            },
            chooseType(type) {
                this.type = type;
            },
        },
        watch: {
            'title': function (newVal) {
                if (newVal) {
                    this.clearErrors('title');
                    this.errors.title = nameInputsValidation(newVal, "Title");
                }
            },
            'price': function (newVal) {
                if (newVal) {
                    this.clearErrors('price');
                    this.errors.price = priceValidation(newVal);
                }
            },
            'period': function (newVal) {
                if (newVal) {
                    this.clearErrors('period');
                       this.errors.period = periodValidation(newVal);
                }
            },
        }
    })
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex; 
        margin-top: 2rem; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        height: auto;
    }
    .custom-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #fff;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 0.375rem;
        padding: 2rem;
        margin-bottom: 1rem;
        max-width: 28rem;
    }

    .form-title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        font-weight: bold;
        color: #4a5568;
        margin-bottom: 1rem;
    }
    .form-input {
        width: 100%;
        padding: 0.75rem;
        font-size: 1.5rem;
        border: 1px solid #e2e8f0;
        border-radius: 0.25rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }
    .form-group-button {
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form-label {
        display: block;
        font-size: 2rem;
        color: #4a5568;
        margin-bottom: 0.5rem;
    }

    .form-button {
        width: 70%;
        height: 3.6rem;
        background-color: #4299e1;
        color: #fff;
        font-size: 1.5rem;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 0.375rem;
        cursor: pointer;
        &:hover {
            background-color: #3182ce;
        }
    }
    .errors {
        display: flex;
        text-align: center;
        justify-content: center;
    }
</style>