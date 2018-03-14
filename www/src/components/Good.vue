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
        </div>
        <div class="spacer10"></div>
        <div>
            <div class="margin2">





                <h1 class="title">Good Transactions</h1>
                <!-- <button @click="tableTimeToggle">TableTimeToggle</button>
                <h1>{{tableTimeZone1}}</h1> -->

                <div class="recordCont">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Dot (click to expand)</th>
                                <th scope="col">Notes</th>
                                <th scope="col">Created</th>
                                <th scope="col">------</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="t in ugTransactions">
                                <th @click="show(t.Dot)" scope="row">{{t.Dot}}</th>
                                <td>{{t.Notes}}</td>
                                <td>{{t.Created}}</td>
                                <td>
                                    <button class="btn-xs" @click="show2(t.Dot)">Open</button>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- <div class="col-lg-offset-1 col-lg-4 center-container">
                    <div class="transForm padding" v-if="newTransactionT">
                        <form id="transForm1" @submit.prevent="newTransaction">
                            <div class="form-group fT-container">

                                <div class="form-group flex-container padding">
                                    <div class="form-group">
                                        <label class="" for="description">Dot #:</label>
                                        <div class="regInput">
                                            <input type="text" size="15" name="name" placeholder="dot #" v-model="transaction.Dot" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="" for="status">Status:</label>
                                        <div class="regInput">
                                           
                                            <input required type="radio" name="status" value="green" v-model="transaction.Status" checked> Good
                                            <input required type="radio" name="status" value="red" v-model="transaction.Status"> Bad

                                        </div>
                                    </div>
                                </div>
                                <div class="spacer4"></div>
                                <div class="form-group padding">
                                    <label class="" for="inputName">Notes:</label>
                                    <div class="regInput">
                                        <textarea maxlength="200" rows="4" cols="50" form="transForm1" v-model="transaction.Notes"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="margin3">
                                <button class="btn-sm" type="submit">Submit</button>
                            </div>
                        </form>
                        <div class="transactions2">
                            <div class=" mainDiv2 bg3">
                                <div v-for="z in gTransactions">


                                    <div class="flex-container transactions1">

                                        <div>
                                            <b>Dot #: </b>
                                            <p>{{z.dot}}</p>

                                        </div>
                                        <div>
                                            <b>Notes: </b>
                                            <p>{{z.notes}}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->


                <modal height="auto" :scrollable="true" name="hello-world">
                    <div class="margin2">
                        <h5>Dot:</h5>
                        <p>{{record4.Dot}}</p>
                        <h5>Email</h5>
                        <p>{{record4.CENSUS_EMAIL_ADDRESS}}</p>
                        <h5>censuS_DBA</h5>
                        <p>{{record4.CENSUS_DBA}}</p>
                        <h5>censuS_CELL_PHONE_NUMBER</h5>
                        <p>{{record4.CENSUS_CELL_PHONE_NUMBER}}</p>
                        <h5>censuS_LEGAL_NAME</h5>
                        <p>{{record4.CENSUS_LEGAL_NAME}}</p>
                        <h5>censuS_MAILING_ADDRESS_STATE</h5>
                        <p>{{record4.CENSUS_MAILING_ADDRESS_STATE}}</p>
                        <h5>companY_REP_1</h5>
                        <p>{{record4.COMPANY_REP_1}}</p>
                        <h5></h5>
                        <p></p>
                    </div>

                </modal>

            </div>

        </div>

        <modal height="auto" :scrollable="true" name="transaction-modal">
            <div class="margin2">
                <form id="transForm1" @submit.prevent="newTransaction">
                    <div class="form-group fT-container">
                        <div class="form-group padding">
                            <div class="form-group">
                                <label class="" for="description">Dot #:</label>
                                <div class="regInput">
                                    <input type="text" size="15" name="name" placeholder="dot #" v-model="transaction.Dot" />
                                </div>
                            </div>
                            <div class="form-group margin5">
                                <h4>Status</h4>
                                <div class="regInput">
                                    <!-- <input type="text" size="40" name="status" placeholder="Status" v-model="transaction.Status" /> -->
                                    <div class="form-group">
                                        <label for="statusg">Green</label>
                                        <input type="radio" name="statusg" value="green" v-model="transaction.Status" checked>
                                    </div>
                                    <div class="form-group">
                                        <label for="statusr">Red</label>
                                        <input type="radio" name="statusr" value="red" v-model="transaction.Status">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="spacer4"></div>
                        <div class="form-group padding">
                            <label class="" for="inputName">Notes:</label>
                            <div class="regInput">
                                <textarea maxlength="200" rows="4" cols="50" form="transForm1" v-model="transaction.Notes"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="margin3">
                        <button class="btn-sm" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div>
                <div class="transactions2">
                    <div class=" mainDiv2 bg3">
                        <div v-for="z in gTransactions">
                            <div class="flex-container transactions1">

                                <div>
                                    <b>Dot #: </b>
                                    <p>{{z.Dot}}</p>

                                </div>
                                <div>
                                    <b>Notes: </b>
                                    <p>{{z.Notes}}</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </modal>

    </div>
</template>


<script>

    export default {
        name: 'Good',
        data() {
            return {
                theRecord: {},
                transaction: {
                    Dot: ""
                },
                newTransactionT: true,
                // activeTransaction: "",
                seen: false,
                recordDetail: false,
                transactionDetail: false,


            }
        },
        methods: {
            show(dot) {
                this.$store.dispatch('getRecord', dot)
                this.$modal.show('hello-world');
            },
            hide() {
                this.$modal.hide('hello-world');
            },
            show2(dot) {
                this.transaction = {}
                this.transaction.Dot = dot
                this.$store.dispatch('searchTransByDot', dot)
                this.$modal.show('transaction-modal');
            },
            hide2() {
                this.$modal.hide('transaction-modal');
            },
            copyDot(dot) {
                this.transaction.Dot = dot
                this.$store.dispatch('searchTransByDot', dot)
            },
            tableTimeToggle() {
                if (this.tableTimeZone < 3) {
                    this.tableTimeZone++
                }
                else {
                    this.tableTimeZone = 1
                }

            },
            userLogout() {
                this.$store.dispatch('logout', this.$store.state.user._id)
            },
            authenticate() {
                this.$store.dispatch('authenticate')
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
            deleteKeep(keep) {
                console.log(keep)
                this.$store.dispatch('deleteKeep', keep)
            },
            addToVault(keep) {

                this.vaultkeep.keepId = keep.id
                this.$store.dispatch('addToVault', this.vaultkeep)
                this.vaultkeep.vaultId = ""
            },
            newTransactionToggle(record) {
                console.log(record.dot)
                this.transaction.dot = record.dot
                console.log("here")
                this.newTransactionT = true
            },

            newTransaction() {


                this.$store.dispatch('authenticate')
                this.$store.dispatch('newTransaction', this.transaction)
                this.transaction = {}
            },
            searchTransByDot() {
                this.$store.dispatch('searchTransByDot', this.transaction.Dot)
            },
            toggleRecordDetail() {
                this.recordDetail = !this.recordDetail
            },
            toggleTransactionDetail() {
                this.transactionDetail = !this.transactionDetail
            },
            // hideRecordDetail(index) {
            //     this.recordDetail = false
            //     this.record[index].addClass("hidden")
            // },
            // showRecordDetail(index) {
            //     this.recordDetail = true
            //     this.record[index].removeClass("hidden")
            // }
            // keepButtonsShow(keep){
            //     // $(keep).find("keepButtons").removeClass("hidden")
            //     keep.getElementById("keepButtons").removeClass("hidden")
            // },
            // keepButtonsHide(keep){
            //     keep.getElementById("keepButtons").AddClass("hidden")
            //     // $(keep).find("keepButtons").AddClass("hidden")
            // }

        },
        computed: {
            tableTimeZone1() {
                return this.tableTimeZone
            },
            user() {

                return this.$store.state.user
            },
            record4() {
                console.log(this.$store.state.activeRecord)
                
                // if(this.$store.state.activeRecord[0] = []){return this.$store.state.activeRecord[0]}
                this.theRecord = this.$store.state.activeRecord
                
                return this.$store.state.activeRecord
            },
            records() {

                var var1 = this.$store.state.activeRecords
                console.log(var1)

                for (let i = 0; i < var1.length; i++) {
                    const element = var1[i];
                }
                return var1
            },
            gTransactions() {
                return this.$store.state.activeGTransactions
            },
            ugTransactions() {
                return this.$store.state.activeUGTransactions
            },
            yTransactions() {
                console.log("p")

                console.log(this.$store.state.activeYTransactions)
                return this.$store.state.activeYTransactions
            },
            oTransactions() {
                return this.$store.state.activeOTransactions
            },
            vaults() {
                return this.$store.state.activeVaults
            },
            tdsearch() {
                console.log(this.$store.state.activeSTD)
                return this.$store.state.activeSTD
            }
        },
        mounted() {
            
            
            this.$store.dispatch('getUserTransactions2', this.user._id)
            // this.$store.dispatch('getUserTransactions')

        }
    }
</script>
<style>
    h5 {
        text-decoration: underline;
        font-weight: bold;

    }

    .transactions1 {
        border-top-style: solid;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-top-width: 1px;
        padding: 0.5rem;
        /* border-radius: 25px; */
    }

    .transactions2 {
        padding: 1rem;
    }

    .bg3 {
        background-color: rgba(86, 255, 80, 0.719);
    }

    .bg1 {
        background-color: rgba(248, 145, 10, 0.726);
    }

    .padding {
        padding: 1rem;
    }

    .marginright {
        margin-right: 2rem;
    }

    .transForm {
        background-color: rgb(205, 215, 255);
        /* width: 50vw; */
        border-radius: 20px;
        /* margin: 5px; */
    }

    .flex-container {
        display: flex;
        justify-content: space-around
    }

    .margin2 {
        margin: 5rem;
    }

    .margin3 {
        margin-bottom: 1rem;
    }

    .white {
        color: white;
    }

    .recordCont {
        background-color: rgb(205, 215, 255);
        /* width: 80vw; */
        border-radius: 3px;
        border-top-style: solid;
    }

    .transCont {
        background-color: rgb(205, 215, 255);
        width: 50vw;
        border-radius: 3px;
        border-top-style: solid;
        border-left-style: solid;
    }

    .bgColor {
        background-color: blanchedalmond;
        width: 40rem;
    }

    .title {
        position: relative;
        /* right: 80rem; */
        color: black;
    }

    .glyphicon-plus-sign:hover,
    .glyphicon-minus-sign:hover {
        color: gray;
    }

    .block {
        display: block;
    }

    .center-container {
        display: flex;
        justify-content: center;
        top: 120px;
        position: sticky;
        /* height: 0rem; */
        /* width: 20rem; */
    }

    .right-container {
        display: flex;
        justify-content: flex-end;
        margin-top: 1rem
    }

    .fT-container {
        display: flex;
        justify-content: space-around;
    }

    .topMargin {
        margin-top: 4rem;
    }
</style>