<template>
    <div class="nav-header">
        <div class="nav-header-container">
            <div>
                <div class="nav-header-sub">
                    <router-link class="RLwhite headDown3" :to="{name: 'Home'}">
                        <h1>TruckTool</h1>
                    </router-link>
                </div>
            </div>
            <div>
                <p>Welcome, {{user.username}}</p>
                <router-link class="RLwhite headDown3" :to="{name: 'Account'}">
                    <p>My Account</p>
                </router-link>
                <router-link class="RLwhite headDown3" :to="{name: 'Good'}">
                    <p>HOT LEADS</p>
                </router-link>
            </div>
            <div>
                <div class="nav-header-sub">
                    <span @click="userLogout">
                        <p class="white">Logout</p>
                    </span>
                </div>
            </div>
        </div>
        <div class="userGroup">
            <div>
                <form @submit.prevent="splitRecords">
                    <label for="users">Users</label>
                    <input v-model="usersC" name="users" type="number">
                    <button class="btn-xs btn-info" type="submit">Split</button>
                </form>
            </div>
        </div>
        <h3>Total Records</h3>
        <p>{{count}}</p>
        <h3>User Records</h3>
        <p>{{count2}}</p>
        <div class="recordGroup">
            <!-- <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">Dot</th>
                        <th scope="col">Docket</th>
                        <th scope="col">mcS_150_DATE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="record in records">
                        <th scope="row">{{record.dot}}</th>
                        <td>{{record.docket}}</td>
                        <td>{{record.lasT_MODIFIED_DATE}}</td>
                    </tr>
                </tbody>
            </table> -->
    
        </div>

        <div v-for="record in recordsT">
            <p>{{record.dot}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Admin',
        data() {
            return {
                usersC: 0,
                records9: {},
                count: 0,
                count2: 0,
            }
        },

        mounted() {
            this.$store.dispatch('getUserTransactions', this.user.id)
            this.$store.dispatch('getAllRecords', this.user.id)
            // this.$store.dispatch('getUsers', this.user.id)
            console.log(":(")
        },
        methods: {
            userLogout() {
                this.$store.dispatch('logout', this.$store.state.user._id)
            },
            authenticate() {
                this.$store.dispatch('authenticate')
            },
            getAllRecords() {
                this.$store.dispatch('getAllRecords')
            },
            splitRecords(){
                var users = this.usersC
                var records = this.$store.state.activeRecords
                var lastUser = users
                var currentUser = 1
                var returnO = {}
                
                var count = 0
                for (let p = 1; p < users; p++) {
                    const user = users[p];
                    returnO[p] = {}
                }
                for (let i = 0; i < records.length; i++) {
                    count++
                    const record = records[i];
                    console.log(record)
                    returnO[currentUser] += record
                    if(currentUser < users){
                        currentUser++
                    }
                    else{currentUser = 1}
                    if(lastUser < users){
                        lastUser++
                    }
                    else{
                        lastUser = 1
                    }
                }
                console.log(returnO[1])
                console.log(returnO)
                var count2 = Math.round(count / users)
                this.count2 = count2
                this.count = count
                this.records9 = returnO
                return returnO
            },
        },
        computed: {
            recordsT(){
                console.log(this.records9[1])
                return this.records9[1]
            },
            users(){
                return this.$store.state.users
            },
            user() {
                return this.$store.state.user
            },
            gTransactions() {
                return this.$store.state.activeGTransactions
            },
            oTransactions() {
                return this.$store.state.activeGTransactions
            },
            yTransactions() {
                return this.$store.state.activeGTransactions
            },
            records(){
                
                return this.$store.state.activeRecords
            },

        },
    }
</script>
<style>
    .recordGroup{
        padding: 5rem;
        margin: 5rem;
    }
</style>