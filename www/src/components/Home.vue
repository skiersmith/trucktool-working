<template>
    <div>
        <div class="nav-header">
            <div class="nav-header-container">
                <div>
                    <div class="nav-header-sub">
                        <router-link class="RLwhite headDown3" :to="{name: 'Home'}">
                            <h1>TCS Tool</h1>
                        </router-link>
                    </div>
                </div>

                <div>
                    <p>Welcome, {{user.name}}</p>
                    <router-link class="RLwhite headDown3" :to="{name: 'Account'}">
                        <p>My Account</p>
                    </router-link>
                </div>
                <div>
                    <div class="nav-header-sub">
                        <span @click="userLogout">
                            <p class="white">Logout</p>
                        </span>
                        <!-- <button @click="lZipToggle">Zip to Timezone</button> -->
                        <a @click="lZipToggle">Zip to Timezone</a>
                    </div>
                </div>
                <div>
                    <router-link class="RLwhite headDown3" :to="{name: 'Good'}">
                        <p>HOT LEADS</p>
                    </router-link>
                    <div>
                        <a @click="bottomFunction()">Bottom of page</a>
                    </div>
                    <div>
                        <a @click="topFunction()">Top of page</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="spacer10"></div>

        <div>
            <div class="row margin2">
            </div>
            <div>
                <div v-if="lZip">
                    <div class="tool-container tool-box">
                        <div class=""></div>
                        <form @submit.prevent="lookupTZ">
                            <label class="white" for="zip">Lookup Zip</label>
                            <input name="zip" size="5" maxlength="5" v-model="zip1" type="text">
                            <button class="btn-xs btn-success" type="submit">Submit</button>
                        </form>
                    </div>
                    <div>
                        <p>{{timezone2}}</p>
                    </div>
                </div>
                <div v-else>

                </div>
            </div>
        </div>
        <h1 class="title">My Records</h1>
        <button @click="tableTimeToggle">TableTimeToggle</button>

        <h3 v-if="tableTimeZone == 3">Pacific</h3>
        <h3 v-if="tableTimeZone == 2">Mountain</h3>
        <h3 v-if="tableTimeZone == 1">Central</h3>
        <h3 v-if="tableTimeZone == 4">Eastern</h3>
        <!-- col-lg-offset-1 col-lg-6 -->
        <div class="recordCont">
            <!-- table-bordered table-striped -->
            <table id="ifThisWorks" class="table table-bordered table-striped">

                <thead>
                    <tr>
                        <th scope="col">Dot #</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Company Rep</th>
                        <th scope="col">Company Rep 2</th>
                        <th scope="col">State</th>
                        <th scope="col">Docket</th>
                        <th scope="col">------</th>

                    </tr>
                </thead>

                <tbody v-if="tableTimeZone == 3">
                    <tr v-if="record" v-for="(record, key) in pRecords">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record.Called)}}</p>
                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                        </td>

                    </tr>

                </tbody>



                <tbody v-if="tableTimeZone == 2">
                    <tr v-if="record" v-for="(record, key) in mRecords">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record.Called)}}</p>
                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                        </td>

                    </tr>

                </tbody>




                <tbody v-if="tableTimeZone == 1">
                    <tr v-if="record" v-for="(record, key) in cRecords">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record.Called)}}</p>
                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                        </td>

                    </tr>

                </tbody>


                <tbody v-if="tableTimeZone == 4">
                    <tr v-if="record" v-for="(record, key) in eRecords">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record.Called)}}</p>
                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                        </td>

                    </tr>

                </tbody>
            </table>
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
                                        <label for="statuso">Orange</label>
                                        <input type="radio" name="statuso" value="orange" v-model="transaction.Status">
                                    </div>
                                    <div class="form-group">
                                        <label for="statusy">Yellow</label>
                                        <input type="radio" name="statusy" value="yellow" v-model="transaction.Status">
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
                        <button class="btn-sm btn-success" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div>
                <div class="transactions2">
                    <div class=" mainDiv2 bg2">
                        <div v-for="z in yTransactions">


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
                    <div v-for="t in oTransactions">
                        <div class="mainDiv2 bg1">

                            <div class="flex-container transactions1">

                                <div>
                                    <b>Dot #: </b>
                                    <p>{{t.Dot}}</p>
                                </div>
                                <div>
                                    <b>Notes: </b>
                                    <p>{{t.Notes}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </modal>
    <button @click="sortList()"></button>
    </div>
</template>
<script>
    var zipcode_to_timezone = require('zipcode-to-timezone');
    // require('datatables.net-bs')();
    // require('datatables.net-scroller-bs')();
    export default {
        name: 'Home',
        data() {
            return {
                transaction: {},
                newTransactionT: true,
                seen: false,
                recordDetail: false,
                transactionDetail: false,
                searchTD: "",
                tableTimeZone: 0,
                zip1: "",
                timezone2: "",
                lZip: false,
                // rowColor: "danger",



            }
        },
        methods: {
            //modal methods
            sortList() {
                var records = this.eRecords
                var returnO = records.sort(function (a, b) {
                    var nameA = a.censuS_DBA.toLowerCase(), nameB = b.censuS_DBA.toLowerCase();
                    if (nameA < nameB) //sort string ascending
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
                console.log(returnO)
                
            },
            lZipToggle() {
                this.lZip = !this.lZip
            },
            topFunction() {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            },
            bottomFunction() {
                document.body.scrollTop = document.body.scrollHeight;
                document.documentElement.scrollTop = document.documentElement.scrollHeight
            },
            ifCalled(called) {
                
                if (called === true) {
                    return "Called"
                }
                else {
                    return "Not Called"
                }
            },
            setColor(record, key) {

                console.log(record)
                console.log(key)
                console.log()
                console.log(this.cRecords[1])
            },
            show(record) {
                
                this.transaction = {}
                this.transaction.Dot = record.Dot
                this.transaction.censuS_DBA = record.censuS_DBA
                this.$store.dispatch('searchTransByDot', record.Dot)
                this.$modal.show('transaction-modal');
            },
            hide() {
                this.$modal.hide('transaction-modal');
            },
            //modal methods
            //timezone convert
            lookupTZ() {
                var zip2 = this.zip1
                var zip = ""
                //zip validation
                for (let p = 0; p < zip2.length; p++) {
                    const element = zip2[p];
                    zip += element
                    if (p == 4) {
                        break
                    }
                }
                var tz = zipcode_to_timezone.lookup(zip);
                //npm timezone to zip ^
                //response to timezone \/\/
                if (tz != null) {
                    if (tz == "America/Los_Angeles") {
                        tz = "Pacific"
                    }
                    else if (tz == "America/Anchorage" || tz == "America/Juneau" || tz == "America/Nome" || tz == "America/Yakutat") {
                        tz = "Alaska"
                    }
                    else if (tz == "America/Chicago" || tz == "America/Menominee" || tz == "America/North_Dakota/Center") {
                        tz = "Central"
                    }
                    else if (tz == "America/Detroit" || tz == "America/New_York" || tz == "America/Indiana/Indianapolis" || tz == "America/Indiana/Vevay" || tz == "America/Kentucky/Louisville" || tz == "America/Kentucky/Monticello") {
                        tz = "Eastern"
                    }
                    else if (tz == "America/Boise" || tz == "America/Phoenix" || tz == "America/Denver" || tz == "America/Shiprock") {
                        tz = "Mountain"
                    }
                    else {
                        console.log("missed one")
                    }
                }
                this.zip1 = ""
                this.timezone2 = tz
                return tz

            },
            copyDot(dot) {
                this.transaction = {}
                this.transaction.Dot = dot
                this.$store.dispatch('searchTransByDot', dot)
            },
            //rotate table 4 each timezone
            tableTimeToggle() {
                if (this.tableTimeZone < 4) {
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
            newTransactionToggle(record) {
                this.transaction.dot = record.DOT
                this.newTransactionT = true
            },
            newTransaction() {
                this.$store.dispatch('authenticate')
                this.$store.dispatch('newTransaction', this.transaction)
                if (this.transaction.Status == "red") {
                    this.hide()
                }
                
                this.updateCalled(this.transaction)
                // else if (this.transaction.Status == "yellow") {
                // }
                // else if (this.transaction.Status == "orange") {
                //     this.updateColoro(this.transaction)
                // }

            },
            updateCalled(transaction) {
                
                var record2 = this.$store.state.activeRecords
                for (let q = 0; q < record2.length; q++) {
                    const element = record2[q];
                    if (element.Dot === transaction.Dot) {
                        element.Called = true
                        this.$store.dispatch('updateCalled', element)
                    }
                }
            },
            // updateColoro(transaction) {
            //     var record = {
            //         Dot: transaction.Dot,
            //         Hex: "ffa500",
            //         Id: 0
            //     }

            //     var record2 = this.$store.state.activeRecords
            //     for (let q = 0; q < record2.length; q++) {
            //         const element = record2[q];
            //         if (element.dot === transaction.Dot) {
            //             element.Hex = "bg-danger"
            //             this.$store.dispatch('updateHex', element)
            //         }
            //     }
            //     
            // },
            searchTransByDot(dot) {
                this.$store.dispatch('searchTransByDot', dot)
            },
            toggleRecordDetail() {
                this.recordDetail = !this.recordDetail
            },
            toggleTransactionDetail() {
                this.transactionDetail = !this.transactionDetail
            },
            checkIfCalled(recordId) {
                this.$store.dispatch('getUserRecord2', recordId)
            },
            tBackground() {
                return 'bg-' + this.rowColor
            },
            checkRecords(records) {
                
                var last = 0
                for (let q = 0; q < records.length; q++) {

                    var record = records[q];
                    if (q > 0) {
                        if (record.Called < records[last].Called) {
                            records = orgRecords(records)
                            return false
                        }
                    }
                    var last = q
                }
                function orgRecords(records) {

                    for (let p = 0; p < records.length; p++) {
                        const record = records[p];
                        if (record.Called === true) {
                            var record2 = records.splice(p, 1)
                            records.push(record2[0])
                        }
                    }
                }
                return true
            },


        },
        computed: {
            tableTimeZone1() {
                return this.tableTimeZone
            },
            user() {
                console.log(this.$store.state.user)
                return this.$store.state.user
            },
            records() {
                var var1 = this.$store.state.activeRecords
                for (let i = 0; i < var1.length; i++) {
                    const element = var1[i];
                }
                return var1
            },
            eRecords() {
                var records = this.$store.state.eastern
                var one = true
                while (one === true) {

                    var check = this.checkRecords(records)
                    if (check === true) {

                        return records
                    }
                    else {

                        continue
                    }
                }

            },
            cRecords() {
                var records = this.$store.state.central
                var one = true
                while (one === true) {

                    var check = this.checkRecords(records)
                    if (check === true) {

                        return records
                    }
                    else {

                        continue
                    }
                }
            },
            mRecords() {
                var records = this.$store.state.mountain
                var one = true
                while (one === true) {

                    var check = this.checkRecords(records)
                    if (check === true) {
                        console.log(records)
                        return records
                    }
                    else {

                        continue
                    }
                }
            },
            pRecords() {
                var records = this.$store.state.pacific
                var one = true
                while (one === true) {

                    var check = this.checkRecords(records)
                    if (check === true) {

                        return records
                    }
                    else {

                        continue
                    }
                }
            },

            yTransactions() {
                return this.$store.state.activeYTransactions
            },
            oTransactions() {
                return this.$store.state.activeOTransactions
            },
            tdsearch() {
                return this.$store.state.activeSTD
            },

        },
        mounted() {
            this.$store.dispatch('authenticate')
            this.$store.dispatch('authenticate2')
            
            // this.$store.dispatch('getUserRecords', this.user._id)
            // $(document).ready(function () {
            //     $('#ifThisWorks').DataTable();
            // });
        }
    }
</script>
<style>
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

    .bg2 {
        background-color: rgba(252, 255, 80, 0.719);
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
    }

    .flex-container {
        display: flex;
        justify-content: space-around;
    }

    .margin2 {
        margin: 5rem;
    }

    .margin3 {
        margin-bottom: 1rem;
    }

    .margin5 {
        margin: .6rem;
    }

    /* .margin4 {
        margin-right: 1rem;
    } */

    .white {
        color: white;
    }

    .recordCont {
        background-color: rgb(205, 215, 255);
        /* width: 80vw; */
        border-radius: 3px;
        border-top-style: solid;
        margin: 1rem;
        padding: 1rem;
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
        position: sticky;
        top: 120px;
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

    .tool-container {
        display: inline-flex;
        justify-content: center;
        align-content: flex-end;
        background-color: cadetblue;
        border-radius: 25px;
        /* height: 15rem; */
        padding: 1rem;
        width: 25rem;
    }

    .inline {
        display: inline;
    }
</style>