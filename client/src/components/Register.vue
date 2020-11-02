<template>
<div>
    <h1>Register</h1>
    <input type="text" v-model="ic" name="=ic" placeholder="IC" />
    <input type="text" v-model="name" name="name" placeholder="Name" />
    <input type="password" v-model="password" name="=password" placeholder="Password" />
    <input type="email" v-model="email" name="=email" placeholder="Email" />
    <input type="text" v-model="phone_num" name="=phone_num" placeholder="Phone Number" />
    <button @click="register">Register</button>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data() {
        return {
            ic: '',
            name: '',
            password: '',
            email: '',
            phone_num: ''
        }
    },
    methods: {
        async register() {
            await AuthenticationService.register({
                ic: this.ic,
                name: this.name,
                password: this.password,
                email: this.email,
                phone_num: this.phone_num
            })
        }
    }
}
</script>

<style scoped>

</style>
