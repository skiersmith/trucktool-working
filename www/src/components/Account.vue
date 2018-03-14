<template>
    <div>
        <div class="nav-header">
            <div class="nav-header-container">

                <div>
                    <div class="nav-header-sub">
                        <router-link class="RLwhite headDown3" :to="{name: 'Home'}">
                            <h1>KEEPr</h1>
                        </router-link>
                    </div>
                </div>

                <div>
                </div>
                <div>
                    <div class="nav-header-sub">
                        <span @click="userLogout">
                            <p class="white">Logout</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="spacer10"></div>
        <div class="userChange">
            <div>
                <h3>Username</h3>
                <p>{{user.name}}</p>
                <h3>Email</h3>
                <p>{{user.email}}</p>
            </div>
            <button class="btn-xs btn-info" @click="toggleUpdate">Update</button>
            <button class="btn-xs btn-info" @click="toggleUpdateB">UpdatePassword</button>
            <div v-if="updateA">
                <form @submit.prevent="updateUser">
                    <div class="form-group">
                        <br>
                        <div class="form-group">
                            <button type="submit" class="btn-xs btn-success">Save</button>
                        </div>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input class="inline" size="15" type="text" name="name" placeholder="name" v-model="user2.name">
                        </div>
                        <div class="form-group">
                            <label for="resalePrice">Email</label>
                            <input class="inline" size="15" type="text" name="email@email.com" placeholder="resalePrice" v-model="user2.email">
                        </div>
                    </div>
                </form>
            </div>
            <!-- <div v-if="updateB">
                <form @submit.prevent="updateUserPassword">
                    <div class="form-group">
                        <br>
                        <div class="form-group">
                            <button type="submit" class="btn-xs btn-success">Save</button>
                        </div>
                        <div class="form-group">
                            <label for="name"> Old Password</label>
                            <input class="inline" size="15" type="password" name="password" placeholder="Password" v-model="user2.OldPassword">
                        </div>
                        <div class="form-group">
                            <label for="name">New Password</label>
                            <input class="inline" size="15" type="password" name="password" placeholder="Password" v-model="user2.password">
                        </div>

                    </div>
                </form>
            </div> -->
        </div>
    </div>
</template>
<script>
    import vault from './Vault'
    export default {
        name: 'Account',
        data() {
            return {
                keep: {},
                transaction: {},
                updateA: false,
                updateB: false,
                vaultForm: false,
                keepForm: false,
                user2: {}
            }
        },
        methods: {
            userLogout() {
                this.$store.dispatch('logout', this.$store.state.user._id)
            },
            toggleUpdate() {
                this.updateA = !this.updateA
            },
            toggleUpdateB() {
                this.updateB = !this.updateB
            },
            toggleVaultForm() {
                this.vaultForm = !this.vaultForm
            },
            updateUser() {
                debugger
                this.$store.dispatch('updateUser', this.user2)
            },
            updateUserPassword() {
                console.log("yooo" + this.user.password)
                this.$store.dispatch('updateUserPassword', this.user2)
            },
            newTransaction() {

                this.$store.dispatch('authenticate')
                this.$store.dispatch('newTransaction', this.transaction)
            },
            toggleKeepForm() {
                this.keepForm = !this.keepForm
            },
            newKeep() {

                this.authenticate()
                // this.keep.userID = this.$store.state.user.id
                this.$store.dispatch('newKeep', this.keep)
            },
            getAllKeeps() {
                this.$store.dispatch('getAllKeeps')
            },
            getMyKeeps() {
                this.$store.dispatch('getMyKeeps', this.user.id)
            },
            deleteKeep(keep) {
                console.log(keep)
                this.$store.dispatch('deleteKeep', keep)
            },
            authenticate() {
                this.$store.dispatch('authenticate')
            },
            deleteKeep(keep) {
                this.$store.dispatch('deleteKeep', keep)
            }
        },
        computed: {
            user() {
                this.user2 = this.$store.state.user
                console.log(this.$store.state.user)
                return this.$store.state.user
            },
            vaults() {
                return this.$store.state.activeVaults
            },
            keeps() {
                return this.$store.state.myKeeps
            }
        },
        components: {
            vault
        },
        mounted() {

            console.log(this.$store.state.user._id),
                // this.$store.dispatch('getUserVaults', this.$store.state.user.id),
                // this.$store.dispatch('getMyKeeps', this.user.id)
                this.$store.dispatch('authenticate')
        }
    }
</script>
<style>
    .userChange {
        background-color: burlywood;
        padding: 1rem
    }

    .buttonDiv {
        margin: 1rem;
    }

    .bgGrey {
        background-color: cornsilk
    }
</style>