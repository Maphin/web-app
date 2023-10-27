<template>
    <div class="register-page">
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
                        <input v-model="user.midName" type="text" id="mid-name" required />
                        <label>Middle Name</label>
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
                    <input v-model="user.dateOfBirth" type="date" class="birth" min="1910-01-01" max="2023-10-25" required />
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
                              :hasErrors = "hasErrors"
                />
            </form>
        </section>
        <UsersTable :usersList="users"
                    @updateParent="onUpdateUsers"/>
        
    </div>
    
</template>

<script>
    import { defineComponent } from 'vue';
    import 'font-awesome/css/font-awesome.min.css';
    import { vMaska } from "maska";
    import ErrorMessage from '../common/Error/Error.vue';
    import UsersTable from '../UsersTable/UsersTable.vue';

    export default defineComponent({
        name: 'RegisterForm',
        components: {ErrorMessage, UsersTable},
        directives: {maska: vMaska},
        data() {
            return {
                user: {
                    firstName: '',
                    midName: '',
                    lastName: '',
                    email: null,
                    password: null,
                    phone: null,
                    dateOfBirth: null,
                    gender: 'Male',
                    avatar: null
                },
                users: [],
                errors: {
                    firstName: '',
                    midName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    birth: '',
                },
                //isSubmitted: false,
            }
        },
        computed: {
            hasErrors() {
                return Object.values(this.errors).some(error => error !== '');
            }
        },
        methods: {
            onUpdateUsers(data) {
                this.users = data.users;
            },
            clearErrors(fieldName) {
                this.errors[fieldName] = '';
            },
            nameInputsValidation(inputValue, fieldName) {
                let error = '';
                if (/\d/.test(inputValue) || inputValue.length < 3) {
                    error = `${fieldName} must be at least 3 characters and contain only alphabet letters`;
                }
                return error;
            },
            emailValidation() {
                let error = '';
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!emailRegex.test(this.user.email)) {
                    error = "Invalid email format";
                }
                return error;
            },
            passwordValidation() {
                let error = '';
                if (this.user.password.length < 8) {
                    error = "Password must be 8 characters at least";
                } else if (this.user.password.length > 20) {
                    error = "Password is too long";
                }
                return error;
            },
            birthValidation() {
                let error = '';
                const date = this.user.dateOfBirth.split('-').map(v => Number(v));
                const year = date[0];

                if (year < 1910) {
                    error = "You couldn't be born earlier than 1910";
                }
                return error;
            },

            onSubmit() {
                if (!this.hasErrors) {
                    const data = this.user;
                    console.log(data);
                    console.log('this.user', this.users);

                    this.users.push(data);
                    //this.isSubmitted = !this.isSubmitted;
                    this.user = {
                        firstName: '',
                        midName: '',
                        lastName: '',
                        email: null,
                        password: '',
                        phone: null,
                        dateOfBirth: '',
                        gender: 'Male',
                        avatar: null
                    };
                }
            }
        },
        watch: {
            'user.firstName': function (newVal) {
                    this.clearErrors('firstName');
                    this.errors.firstName = this.nameInputsValidation(newVal, 'First name');
            },
            'user.midName': function (newVal) {
                    this.clearErrors('midName');
                    this.errors.midName = this.nameInputsValidation(newVal, 'Middle name');
            },
            'user.lastName': function (newVal) {
                    this.clearErrors('lastName');
                    this.errors.lastName = this.nameInputsValidation(newVal, 'Last name');
            },
            'user.email': function (newVal) {
                    this.clearErrors('email');
                    this.errors.email = this.emailValidation(newVal);
            },
            'user.password': function (newVal) {
                    this.clearErrors('password');
                    this.errors.password = this.passwordValidation(newVal);
            },
            'user.dateOfBirth': function (newVal) {
                    this.clearErrors('birth');
                    this.errors.dateOfBirth = this.birthValidation(newVal);
            },
        },
        
    })
</script>

<style lang="scss" scoped>
.register-page {
    background: url('https://static.vecteezy.com/system/resources/previews/002/884/043/original/abstract-red-and-black-futuristic-gaming-background-in-livestream-free-vector.jpg');
    background-position-y: 4%;
    background-size: cover;
    text-transform: none;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}
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
#userTable {
    width: 90%;
    margin-top: 5rem;
    border-collapse: collapse;
    display: none;
}

.action-btn{
    margin-top: 1rem;
    background-color: #ff0000;
    width: 60%;
    height: 3rem;
    outline: none;
    border: none;
    border-radius: .4rem;
    font-size: 2rem;
    box-shadow: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    color: #fff;
}

.register-actions {
    display: flex;
    align-items: center;
    flex-direction: column;
    display: none;
    width: 50%;
}

#userTable th {
    background-color: #FFEBCD;
    text-align: left;
}

#userTable th, #userTable td {
    border: 1px solid #ccc;
    padding: 8px;
}

#userTable tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}
#userTable tbody tr:nth-child(odd) {
    background-color: gray;
}

#userTable tbody tr:hover {
    background-color: #e0e0e0;
}

.errorMessage {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;
    color: red;
    font-size: 1.4rem;
}

.btn__login {
    background-color: #ff0000;
    width: 100%;
    height: 4.5rem;
    outline: none;
    border: none;
    border-radius: .4rem;
    font-size: 1.6rem;
    box-shadow: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    color: #fff;
}
</style>