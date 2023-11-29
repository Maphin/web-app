<template>
    <ul v-if="hasErrors" class="error">
        <li
            v-for="(error, index) in getFilteredErrors"
            :key="index">
            {{ error }}
        </li>
    </ul>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ErrorMessage',
        props: {
            errors: {},
            hasErrors: Boolean,
        },
        computed: {
            getFilteredErrors() {
                const filteredErrors = [];
                for (const error in this.errors) {
                    if (this.errors[error] !== '') {
                        filteredErrors.push(this.errors[error]);
                    }
                }
                return filteredErrors;                   
            }
        }
    })
</script>

<style lang="scss" scoped>
    .error {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 1rem;
        color: red;
        font-size: 1.4rem;
        list-style: none;
    }
</style>