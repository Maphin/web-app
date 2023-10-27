<template>
    <table v-if="isVisible && users.length" id="userTable">
        <thead>
            <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone Number</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>File</th>
                <th>Choose</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in users"
            :key="index">

                <td>{{ `${user.firstName} ${user.midName} ${user.lastName}` }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.password }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.dateOfBirth }}</td>
                <td>{{ user.gender }}</td>
                <td>{{ user.avatar }}</td>
                <td>
                    <input v-model="selectedRows[index]"  type="checkbox"/>
                </td>

            </tr>
        </tbody>
    </table>
    <div v-if="isVisible && users.length" class="register-actions">
        <button @click="deleteRows" class="action-btn" id="deleteRows">Delete Selected Rows</button>
        <button @click="duplicateRows" class="action-btn" id="duplicateRows">Duplicate Selected Rows</button>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'UsersTable',
        props: {
            usersList: Array,
            //visible: Boolean,
        },
        data() {
            const initialSelectedRows = this.usersList.map(() => false);
            return {
                isVisible: true,
                users: this.usersList,
                selectedRows: initialSelectedRows,
            }
        },
        methods: {
            deleteRows() {
                this.users = this.users.filter((user, index) => !this.selectedRows[index]);
                this.selectedRows = this.selectedRows.filter((_, index) => !this.selectedRows[index]);
                this.$emit('updateParent', {
                    users: this.users
                })
            },
            duplicateRows() {
                const duplicatedData = this.selectedRows.map((isSelected, index) => {
                    if (isSelected) {
                        const duplicatedUser = { ...this.users[index] };
                        return duplicatedUser;
                    }
                    return null;
                });

                this.users = this.users.concat(duplicatedData.filter((user) => user !== null));
                this.$emit('updateParent', {
                    users: this.users
                })
            },
        }
    })
</script>

<style lang="scss" scoped>
    #userTable {
        width: 90%;
        margin-top: 5rem;
        border-collapse: collapse;
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
        width: 50%;
    }

    #userTable th {
        font-size: 1.2rem;
        background-color: #FFEBCD;
        text-align: left;
    }

    #userTable td {
        font-size: 1.2rem;
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
        background-color: #d9efe9;
    }
</style>