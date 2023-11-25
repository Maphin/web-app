<template>
	<Header />
	<div class="checkout-page">
		<div class="plans">
			<div class="plan basic">
				<h3>{{ subscription.title }}</h3>
				<div class="plan">
					<span>$</span>
					{{ subscription.price }}
					<span v-if="subscription.type === 0">{{subscription.period}}/mo</span>
					<span v-else>{{subscription.period}}/tr</span>
				</div>
				<div class="list">
					<p> <i class="fa fa-check"></i> Unlimited weekly visits. </p>
					<p> <i class="fa fa-check"></i> 8 group classes/month. </p>
					<p> <i class="fa fa-check"></i> 2 personal trainer sessions. </p>
					<p> <i class="fa fa-check"></i> Sauna & steam room access. </p>
					<p> <i class="fa fa-check"></i> 1 diet consultant session. </p>
				</div> 
			</div>
			<button @click="confirmOrder">Confirm Order</button>
		</div>
		<div class="payment-method">
			<h3>Select Payment Method</h3>
			<!-- Add your payment method options here -->
			<label>
				<input type="radio" v-model="selectedPayment" value="creditCard" />
				Credit Card
			</label>
			<label>
				<input type="radio" v-model="selectedPayment" value="paypal" />
				PayPal
			</label>
			<div v-if="selectedPayment">
				<p>You have selected {{ selectedPayment }} as your payment method.</p>
			</div>
        </div>
	</div>
</template>
  
<script>
	import { defineComponent } from 'vue';
	import { mapActions, mapGetters } from 'vuex';
	import Header from '../Home/Header/Header.vue';
	export default defineComponent({
		name: 'CheckoutPage',
		components: {Header},
		data() {
		  return {
			subscription: null,
			selectedPayment: null
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
			async confirmOrder() {
				try {
					console.log(this.subscription.id);
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
		created() {
			this.subscription = {...this.CART};
		}
	});
</script>
 
<style lang="scss" scoped>
	@import '../../assets/styles/base/mixins';
	.checkout-page {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: #000;
	}
    .plans{
		background: black;
		margin-right: 40rem;
		@include grid(32rem);
        
        .plan{	
			text-align: center;
			padding:2rem;
			flex-wrap: wrap;
        &.basic{
            background:liner-gradient(130deg, transparent 90%);
            background: #111;
        }
        h3{
            font-size: 2.5rem;
            margin:1rem 0;
            color:#fff;
        }
        .plan{
            font-size: 5rem;
            font-weight: bolder;
            color:#ff0000;

            span{
                color:#fff;
                font-size: 2rem;
            }
        }
        .list{
            padding:1rem 0;
            p{
                line-height: 2;
                font-size: 1.4rem;
                color: #aaa;
                padding: 1rem 0;
                i{
                    padding-right: 1rem;
                    color: #ff0000;
                }
            }
        }
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

  /* Styles for the payment method block */
  .payment-method {
    margin-top: 2rem;
    padding: 1.5rem;
    border: 1px solid #555;
    border-radius: 4px;

    h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: #fff;
    }

    label {
      display: block;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      color: #fff;

      input {
        margin-right: 0.5rem;
      }
    }

    p {
      margin-top: 1rem;
      font-size: 1.4rem;
      color: #aaa;
    }
  }
</style>



  