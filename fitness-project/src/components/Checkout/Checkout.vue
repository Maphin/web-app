<template>
	<Header />
	<div class="checkout-page">
		<div class="plans">
			<PlanItem :subscription="subscription" :key="subscription.id" />
		</div>
		<div class="payment-right">
			<form action="" class="payment-form">
				<h1 class="payment-title">Payment Details</h1>
				<div class="payment-method">
					<input type="radio" name="payment-method" id="method-1" checked>
					<label for="method-1" class="payment-method-item">
						<img src="../../assets/img/visa.png" alt="">
					</label>
					<input type="radio" name="payment-method" id="method-2">
					<label for="method-2" class="payment-method-item">
						<img src="../../assets/img/mastercard.png" alt="">
					</label>
					<input type="radio" name="payment-method" id="method-3">
					<label for="method-3" class="payment-method-item">
						<img src="../../assets/img/paypal.png" alt="">
					</label>
					<input type="radio" name="payment-method" id="method-4">
					<label for="method-4" class="payment-method-item">
						<img src="../../assets/img/stripe.png" alt="">
					</label>
				</div>
				<div class="payment-form-group">
					<input v-model="cardNumber" v-maska data-maska="#### #### #### ####" placeholder=" " class="payment-form-control" id="card-number">
					<label for="card-number" class="payment-form-label payment-form-label-required">Card Number</label>
				</div>
				<div class="payment-form-group-flex">
					<div class="payment-form-group">
						<input v-model="expiryDate" v-maska data-maska="## / ##"  placeholder=" " class="payment-form-control" id="expiry-date">
						<label for="expiry-date" class="payment-form-label payment-form-label-required">Expiry Date</label>
					</div>
					<div class="payment-form-group">
						<input v-model="cvv" v-maska data-maska="###" placeholder=" " class="payment-form-control" id="cvv">
						<label for="cvv" class="payment-form-label payment-form-label-required">CVV</label>
					</div>
				</div>
				<button type="submit" class="payment-form-submit-button"
						@click="confirmOrder">
					<img src="../../assets/icons/wallet.svg" alt="wallet">
					Confirm Order
				</button>
				<ErrorMessage :errors="errors"
                          :hasErrors = "errorFlag"
                          class="errors"
            	/>
			</form>
        </div>
	</div>
</template>
  
<script>
	import { defineComponent } from 'vue';
	import { mapActions, mapGetters } from 'vuex';
	import { vMaska } from "maska";
	import Header from '../Home/Header/Header.vue';
	import PlanItem from '../Tariff/PlanItem/PlanItem.vue';
	import ErrorMessage from '../common/Error/Error.vue';
	import { cardValidation, hasErrors } from '../common/validations/validations';

	export default defineComponent({
		name: 'CheckoutPage',
		components: { Header, PlanItem, ErrorMessage },
		directives: {maska: vMaska},
		data() {
		  return {
			subscription: null,
			//selectedPayment: null,
			cardNumber: null,
			expiryDate: null,
			cvv: null,
			errors: {
				cardNumber: '',
				expiryDate: '',
				cvv: '',
			}
		  }
		},
		computed: {
		  ...mapGetters('cart',[
			'CART'
		  ])
		},
		methods: {
			...mapActions('orders',[
				'CREATE_ORDER'
			]),
			...mapActions('cart',[
				'DELETE_EVERYTHING_FROM_CART'
			]),
			clearErrors(fieldName) {
                this.errors[fieldName] = '';
            },
			errorFlag() {
                return hasErrors(this.errors);
            },
			async confirmOrder() {
				try {
					const res = await this.CREATE_ORDER({subscriptionId: this.subscription.id});
					if (res && res.data) {
						this.$router.push({name: 'home'});
                        this.DELETE_EVERYTHING_FROM_CART();
					}
				} catch (err) {
					console.log(err);
				}
			},
		},
		watch: {
            'cardNumber': function (newVal) {
                if (newVal) {
                    this.clearErrors('cardNumber');
                    this.errors.email = cardValidation(newVal, 'cardNumber');
                }
            },
            'expiryDate': function (newVal) {
                if (newVal) {
                    this.clearErrors('expiryDate');
                    this.errors.password = cardValidation(newVal, 'expiryDate');
                }
            },
            'cvv': function (newVal) {
                if (newVal) {
                    this.clearErrors('cvv');
					this.errors.cvv = cardValidation(newVal, 'cvv');
                }
            },
        },
		created() {
			this.subscription = {...this.CART};
		}
	});
</script>
 
<style lang="scss" scoped>
	@import '../../assets/styles/base/mixins';
	.errors {
        display: flex;
        text-align: center;
        justify-content: center;
    }
	.checkout-page {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 92.8vh;
		background: #000;
		.plans {
			width: 54%;
		}
	}
   
	button {
    background-color: #ff0000;
    color: #fff;
    padding: 1rem 2rem;
    font-size: 1.6rem;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    margin-top: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #cc0000;
    }
  }

  .payment-right {
    min-width: 0;
}
.payment-form {
    padding: 24px;
    background-color: #f4f4f5;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, .05);
}
.payment-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 1.3;
}
.payment-method {
    display: flex;
    align-items: center;
    overflow-x: auto;
    padding: 6px 0;
    margin-bottom: 12px;
    width: 100%;
	
}
.payment-method input {
    display: none;
}
.payment-method-item {
    width: 80px;
    height: 80px;
    padding: 8px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    margin-right: 12px;
    cursor: pointer;
    position: relative;
    flex-shrink: 0;
}
input:checked + .payment-method-item {
    border-color: #6366f1;
}
input:checked + .payment-method-item::before {
    content: '';
    position: absolute;
    top: -6px;
    right: -6px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #6366f1;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwLjAwMDcgMTUuMTcwOUwxOS4xOTMxIDUuOTc4NTJMMjAuNjA3MyA3LjM5MjczTDEwLjAwMDcgMTcuOTk5M0wzLjYzNjcyIDExLjYzNTRMNS4wNTA5MyAxMC4yMjEyTDEwLjAwMDcgMTUuMTcwOVoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMSkiPjwvcGF0aD48L3N2Zz4=");
    background-size: 12px;
    background-position: center;
    background-repeat: no-repeat;
}
.payment-method-item > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.payment-form-group {
    position: relative;
    margin-bottom: 16px;
}
.payment-form-control {
    outline: transparent;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 24px 16px 8px 16px;
    width: 100%;
    transition: all .15s ease-in-out;
}
.payment-form-label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    color: #9ca3af;
    pointer-events: none;
    transition: all .1s ease-in-out;
}
.payment-form-control:focus {
    outline: 1px solid #6366f1;
    border-color: #6366f1;
}
.payment-form-control:focus + .payment-form-label,
.payment-form-control:not(:placeholder-shown) + .payment-form-label {
    top: 30%;
    font-size: 12px;
}
.payment-form-label-required::after {
    content: ' *';
    color: #ef4444;
}
.payment-form-group-flex {
    display: flex;
    align-items: center;
}
.payment-form-group-flex > * {
    width: 100%;
}
.payment-form-group-flex > :not(:last-child) {
    margin-right: 12px;
}
.payment-form-submit-button {
    background-color: #6366f1;
    border-radius: 8px;
    outline: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    padding: 16px;
    transition: all .15s ease-in-out;
}
.payment-form-submit-button:hover {
    background-color: #4f46e5;
}
.payment-form-submit-button > img {
	height: 2rem;
	width: 2rem;
    margin-right: 8px;
}
</style>



  