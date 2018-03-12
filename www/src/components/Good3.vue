<template>
    <div>
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

        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th scope="col">Dot (click to expand)</th>
                    <th scope="col">Notes</th>
                    

                </tr>
            </thead>
            <tbody>
                <tr v-for="t in gTransactions">
                    <th scope="row">{{t.dot}}</th>
                    <td>{{t.notes}}</td>
                   
                    
                </tr>
            </tbody>
        </table>

        
        <modal name="hello-world">
            hello, world!
        </modal>


        <!-- <div class="mainDiv bg3">

            <div class="flex-container transactions1">

                <div>
                    <b>Dot #: </b>
                    <p>{{t.dot}}</p>
                </div>
                <div>
                    <b>Notes: </b>
                    <p>{{t.notes}}</p>
                </div>
            </div>
        </div> -->

    </div>
</template>

<script>

    export default {
        name: 'Good',
        data() {
            return {
                showModal: false
            }
        },

        mounted() {
            this.$store.dispatch('getUserTransactions', this.user.id)

        },
        methods: {
            show(transaction) {
               transaction
                this.$modal.show('hello-world');
            },
            hide() {
                this.$modal.hide('hello-world');
            },
            userLogout() {
                this.$store.dispatch('logout', this.$store.state.user._id)
            },
            authenticate() {
                this.$store.dispatch('authenticate')
            },
        },
        computed: {
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
                return this.$store.state.activeYTransactions
            },

        },
        components: {
            
        },

    }
</script>
<style>
    bg3 {
        background-color: darkgreen;
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>