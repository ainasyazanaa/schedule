<template>
<v-layout row wrap>
    <v-flex xs10 offset-xs5 justify-center>
        <v-flex xs12>
            <v-card color="primary">
                <v-card-text>Login</v-card-text>
                <!-- <v-card-item>
                    <v-btn flat dark>Browse</v-btn>
                </v-card-item> -->

                <!-- <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn flat dark> Sign Up</v-btn>
                </v-toolbar-items> -->
            </v-card>
        </v-flex>
        <div class="white elevation-2">

            <div class="pl-4 pr-4 pt-2 pb-2">
                <v-text-field label="IC" v-model="ic" name="ic" filled></v-text-field> <br>
                <v-text-field label="Password" v-model="password" name="password" type="password" filled></v-text-field> <br>
                <div class="error" v-html=" error" /> <br>
                <v-btn color="primary" dark @click="login">Login</v-btn>
                <br>
            </div>
        </div>
    </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data() {
        return {
            ic: '',
            password: '',
            error: null
        }
    },
    methods: {
        async login() {
            try {
                const response = await AuthenticationService.login({
                    ic: this.ic,
                    password: this.password
                })
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setPatient', response.data.patient)
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
}
</style>
