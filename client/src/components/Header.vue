<template>
<v-layout row wrap>
    <v-flex xs10 offset-xs5 justify-center>
        <v-flex xs12>
            <v-card dark color="primary">
                <v-card-text>
                    <span class="home" @click="navigateTo({name:'root'})">
                        APPOINTMENT
                    </span>
                </v-card-text>
                <!-- <v-card-item>
                    <v-btn flat dark>Browse</v-btn>
                </v-card-item> -->

                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn v-if="!$store.state.isPatientLoggedIn" flat dark @click="navigateTo({name:'login'})">
                        Login
                    </v-btn>

                    <v-btn v-if="!$store.state.isPatientLoggedIn" flat dark @click="navigateTo({name:'register'})">
                        Sign Up
                    </v-btn>

                </v-toolbar-items>
            </v-card>
        </v-flex>
    </v-flex>
</v-layout>
</template>

<script>
export default {
    name: "PageHeader",
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}

.home:hover {
    color: #E9E;
}
</style>
