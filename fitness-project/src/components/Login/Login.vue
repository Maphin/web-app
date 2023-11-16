<template>
    <div class="auth-page">
        <div class="login">
            <div class="login__form">
                <form action="" name="login" @submit.prevent="onSubmit">
                    <h2>Sing In</h2>
                    <div class="login__form__input">
                        <span class="icon">
                            <i class="fa fa-envelope"></i>
                        </span>
                        <input v-model="email" type="email" required>
                        <label for="">Email</label>
                    </div>
                    <div class="login__form__input">
                        <span class="icon">
                            <i class="fa fa-lock"></i>
                        </span>
                        <input v-model="password" type="password" required>
                        <label for="">Password</label>
                    </div>
                    <div class="remember-pass">
                        <label for="">
                            <input v-model="checkbox" type="checkbox">
                            Remember Me
                        </label>
                        <RouterLink to="/">Forgot Password</RouterLink>
                    </div>
                    <button class="btn__login">Log In</button>
                    <div class="create-acc">
                        <p>Don't have an account? <RouterLink to="/register">Sign Up</RouterLink></p>
                    </div>
                    <ErrorMessage :errors="errors"
                                  :hasErrors = "hasErrors"
                    />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import ErrorMessage from '../common/Error/Error.vue';
    import { mapActions } from 'vuex';
    import { emailValidation, passwordValidation } from '../common/validations/validations';

    export default defineComponent({
        name: 'LogindForm',
        components: { ErrorMessage },
        data() {
            return {
                email: '',
                password: '',
                checkbox: false,
                errors: {
                    email: '',
                    password: '',
                    submit: '',
                }
            }
        },
        computed: {
            hasErrors() {
                return Object.values(this.errors).some(error => error !== '');
            }
        },
        methods: {
            ...mapActions('auth',[
                'onLogin'
            ]),
            clearErrors(fieldName) {
                this.errors[fieldName] = '';
            },
            async onSubmit() {
                try {
                    if (localStorage.getItem('token') !== null) {
                        this.$router.push({name: 'home'});
                        return;
                    }
                    if (!this.hasErrors) {
                        const data = {email: this.email, password: this.password};
                        const res = await this.onLogin(data);

                        if (res.data && res.data.token !== null) {
                            this.$router.push({name: 'home'});
                        }
                    }
                } catch (err) {
                    this.errors.submit = err?.response?.data?.msg;
                    console.log(err);
                }
            },
        },
        watch: {
            'email': function (newVal) {
                if (newVal) {
                    this.clearErrors('email');
                    this.errors.email = emailValidation(newVal, this.email);
                }
            },
            'password': function (newVal) {
                if (newVal) {
                    this.clearErrors('password');
                    this.errors.password = passwordValidation(newVal, this.password);
                }
            },
            'submit': function (newVal) {
                if (newVal) {
                    this.clearErrors('password');
                }
            },
        }

    })

</script>

<style lang="scss" scoped>
    .login {
        border: 0.2rem solid #ff0000;
        height: 49rem;
        width: 40rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        backdrop-filter: blur(1rem);
        border-radius: 1rem;
        color: white;
        &:hover {
            box-shadow: 0 0 6rem #ff0000;
        }
        &__form {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            h2 {
                text-align: center;
                font-size: 3.5rem;
            }
            &__input {
                width: 34rem;
                height: 5rem;
                border-bottom: .2rem solid #fff;
                margin: 3rem 0;
                position: relative;
                input {
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    border: none;
                    outline: none;
                    font-size: 1.6rem;
                    padding-right: 2.8rem;
                    color: #fff;
                    &:focus ~ label,
                    &:valid ~ label {
                        top: -.5rem;
                        color: #ff0000;
                    }
                }
                .icon {
                    position: absolute;
                    right: 0;
                    top: 1rem;
                    font-size: 1.9rem;
                }
                label {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    font-size: 1.6rem;
                    font-weight: 500;
                    color: #fff;
                }
            }
            .remember-pass {
                font-size: 1.4rem;
                font-weight: 500;
                margin: -1.5rem 0 1.5rem;
                display: flex;
                justify-content: space-between;
                label input {
                    accent-color: #ff0000;
                    margin-right: .3rem ;
                }
                a {
                    color: #fff;
                    font-weight: 600;
                }
                a:hover {
                    color: #ff0000;
                }
            }
            .create-acc {
                font-size: 1.45rem;
                text-align: center;
                margin: 2.5rem;
                p a {
                    color: #fff;
                    font-weight: 600;
                }
                p a:hover {
                    color: #ff0000;
                }
            }
        }
    }
</style>