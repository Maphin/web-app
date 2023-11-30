<template>
    <div class="auth-page">
        <section class="container">
            <header>Registration Form</header>
            <form action="" @submit.prevent="onSubmit"
                class="register__form">
                <div class="column">
                    <div class="register__form__box">
                        <span class="icon">
                            <i class="fa fa-pencil"></i>
                        </span>
                        <input v-model="user.firstName" type="text" id="first-name" required />
                        <label>First Name</label>
                    </div>
                    <div class="register__form__box">
                        <span class="icon">
                            <i class="fa fa-pencil"></i>
                        </span>
                        <input v-model="user.lastName" type="text" id="last-name" required />
                        <label>Last Name</label>
                    </div>
                </div>
                <div class="column">
                    <div class="register__form__box">
                        <span class="icon">
                            <i class="fa fa-envelope"></i>
                        </span>
                        <input v-model="user.email" type="email" id="email" required />
                        <label>Email Address</label>
                    </div>
                    <div class="register__form__box">
                        <span class="icon">
                            <i class="fa fa-lock"></i>
                        </span>
                        <input v-model="user.password" type="password" id="password" required />
                        <label>Password</label>
                    </div>
                </div>
                <div class="column">
                <div class="register__form__box">
                    <span class="icon">
                    <i class="fa fa-phone"></i>
                    </span>
                    <input v-maska data-maska="+38(0##) ###-####" v-model="user.phone" type="tel" id="phone" name="phone" required>
                    <label class="phone">Phone number</label>
                </div>
                <div class="register__form__box">
                    <span class="icon">
                        <i class="fa fa-calendar"></i>
                    </span>
                    <input v-model="user.birthDate" type="date" class="birth" min="1910-01-01" max="2023-10-25" required />
                    <label class="birth">Birth Date</label>
                </div>
                </div>
                <div class="register__form__gender-box">
                    <span class="icon">
                        <i class="fa fa-venus-mars"></i>
                    </span>
                    <label>Gender</label>
                    <div class="gender-option">
                    <div class="gender">
                        <input v-model="user.gender" type="radio" id="check-male" name="gender" value="Male" checked />
                        <label for="check-male">Male</label>
                    </div>
                    <div class="gender">
                        <input v-model="user.gender" type="radio" id="check-female" name="gender" value="Female" />
                        <label for="check-female">Female</label>
                    </div>
                    <div class="gender">
                        <input v-model="user.gender" type="radio" id="check-other" name="gender" value="Prefer not to say" />
                        <label for="check-other">Prefer not to say</label>
                    </div>
                    </div>
                </div>
                <div class="register__form__box">
                    <input type="file" id="file"/>
                    <label class="file"></label>
                </div>
                <button type="submit" id="submit" class="btn__login">Submit</button>
                <ErrorMessage :errors="errors"
                              :hasErrors = "errorFlag"
                />
            </form>
        </section>
    </div>
    
</template>

<script>
    import { defineComponent } from 'vue';
    import 'font-awesome/css/font-awesome.min.css';
    import { vMaska } from "maska";
    import { mapActions } from 'vuex';
    import ErrorMessage from '../common/Error/Error.vue';
    import { nameInputsValidation, emailValidation, passwordValidation, phoneValidation, birthValidation, hasErrors } from '../common/validations/validations';

    export default defineComponent({
        name: 'RegisterForm',
        components: {ErrorMessage},
        directives: {maska: vMaska},
        data() {
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    email: null,
                    password: null,
                    birthDate: null,
                    phone: null,
                    gender: 'Male',
                    //avatar: null
                },
                users: [],
                errors: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    phone: '',
                    birth: '',
                },
            }
        },
        computed: {
            errorFlag() {
                return hasErrors(this.errors);
            },
        },
        methods: {
            ...mapActions('auth',[
                'onRegister'
            ]),
            clearErrors(fieldName) {
                this.errors[fieldName] = '';
            },
            async onSubmit() {
                try {
                    if (!this.errorFlag) {
                        const {gender, ...userData} = this.user;
                        const res = await this.onRegister(userData);

                        if (res) {
                            this.$router.push({name: 'login'});
                        }
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        },
        watch: {
            'user.firstName': function (newVal) {
                if (newVal) {
                    this.clearErrors('firstName');
                    this.errors.firstName = nameInputsValidation(newVal, 'First name');
                }
            },
            'user.lastName': function (newVal) {
                if (newVal) {
                    this.clearErrors('lastName');
                    this.errors.lastName = nameInputsValidation(newVal, 'Last name');
                }
            },
            'user.email': function (newVal) {
                if (newVal) {
                    this.clearErrors('email');
                    this.errors.email = emailValidation(newVal);
                }
            },
            'user.password': function (newVal) {
                if (newVal) {
                    this.clearErrors('password');
                    this.errors.password = passwordValidation(newVal);
                }
            },
            'user.phone': function (newVal) {
                if (newVal) {
                    this.clearErrors('phone');
                    this.errors.password = phoneValidation(newVal);
                }
            },
            'user.birthDate': function (newVal) {
                if (newVal) {
                    this.clearErrors('birth');
                    this.errors.birth = birthValidation(newVal);
                }
            },
        },
        
    })
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    max-width: 70rem;
    width: 100%;
    padding: 2.5rem;
    border: 0.2rem solid #ff0000;
    backdrop-filter: blur(1rem);
    border-radius: 1rem;
    color: white;
    &:hover {
        box-shadow: 0 0 6rem #ff0000;
    }
}
.container header {
    font-size: 3.5rem;
    font-weight: 500;
    text-align: center;
}
.register {
    &__form {
        margin-top: 3rem;
        .column {
            display: flex;
            column-gap: 1.5rem;
        }
        &__box {
            position: relative;
            width: 100%;
            margin: 1.5rem 0;
            border-bottom: .2rem solid #fff;
            .icon {
                position: absolute;
                right: .4rem;
                top: -.5rem;
                font-size: 1.9rem;
            }
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
                &:hover ~ label,
                &:valid ~ label {
                    top: -.9rem;
                    color: #ff0000;
                }
            }
            input.birth {
                width: 50%;
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
            label.birth {
                left: 30%;
            }
            .input-file {
                display: none;
            }
        }
        &__gender-box {
            margin-top: 2rem;
            label {
                margin: 0 0 1rem .5rem;
                color: #fff;
                font-size: 1.6rem;
                font-weight: 400;
                margin-bottom: .8rem;
            }
            .gender {
                column-gap: .5rem;
                input {
                    accent-color: #ff0000;
                }
                label {
                    color: #fff;
                    font-size: 1.6rem;
                    font-weight: 500;
                }
            }
        }
        :where(.gender-option, .gender) {
            margin: .5rem 0 0 2rem;
            display: flex;
            align-items: center;
            column-gap: 5rem;
            flex-wrap: wrap;
        }
        :where(.gender input, .gender label) {
            cursor: pointer;
        }
    }
}
</style>