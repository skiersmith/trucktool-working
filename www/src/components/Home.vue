<template>
    <div>
        <!-- <button @click="getUserRecords4">Button</button> -->
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="pointer navbar-brand" @click="routeHome">Transportation Compliance Services</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li>
                            <a>Hello, {{user.name}}</a>
                        </li>
                        <li>
                            <a class="pointer" @click="routeIntra">Intrastate</a>
                        </li>
                        <li>
                            <a class="pointer" @click="worldClockToggle">World Clock
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <!-- <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#">Action</a>
                                </li>
                                <li>
                                    <a href="#">Another action</a>
                                </li>
                                <li>
                                    <a href="#">Something else here</a>
                                </li>
                                <li role="separator" class="divider"></li>
                                <li>
                                    <a href="#">Separated link</a>
                                </li>
                                <li role="separator" class="divider"></li>
                                <li>
                                    <a href="#">One more separated link</a>
                                </li>
                            </ul>
                        </li> -->
                    </ul>
                    <form @submit.prevent="lookupTZ" class="navbar-form navbar-left">
                        <div class="form-group">
                            <input type="text" v-model="zip1" class="form-control" placeholder="Zip To Timezone">
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <!-- <router-link class="" :to="{name: 'Good'}">
                                Good Records
                            </router-link> -->
                            <a class="pointer" @click="routeGood">Good Records</a>
                        </li>
                        <li>
                            <a class="pointer" @click="userLogout">Logout</a>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>

        <!-- <div class="nav-header">
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
        </div> -->
        <div v-if="worldClock">
            <span class="pointer" style="position:relative;left: 15rem;color: red;" @click="worldClockToggle">X</span>
            <test2></test2>
        </div>

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
        
        <div style=" width: 45rem;">
            <h3>Callbacks</h3>
            <table id="ifThisWorks" class="table table-bordered table-striped">

                <thead>
                    <tr>
                        <th scope="col">Dot #</th>
                        <th scope="col">Status</th>
                        <th scope="col">Notes</th>
                        <th scope="col">Callback Date</th>
                        <th scope="col">------</th>

                    </tr>
                </thead>
                <!-- NOT CALLED RECORDS -->
                <tbody>
                    <tr v-for="(t, key) in cbTransactions">
                        <th scope="row">{{t.Dot}}</th>
                        <td>{{t.Status}}</td>
                        <td>{{t.Notes}}</td>
                        <td>{{t.Callback}}</td>
                        <td>
                            <!-- <p class="inline">{{ifCalled(record)}}</p> -->
                            <button class="btn-xs btn-info" @click="show(t)">Call</button>
                            <a target="_blank" :href="'https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&amp;query_type=queryCarrierSnapshot&amp;query_param=USDOT&amp;query_string=' + t.Dot"
                                class="btn btn-primary btn-xs ">Safer</a>
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>



        <!-- <h1 class="title">My Records</h1> -->
        <h2 style="display: inline; margin-left: 1rem;">Current Zone </h2>
        <h3 style="display: inline; margin-left: 1rem;" v-if="tableTimeZone == 3">Pacific</h3>
        <h3 style="display: inline; margin-left: 1rem;" v-if="tableTimeZone == 2">Mountain</h3>
        <h3 style="display: inline; margin-left: 1rem;" v-if="tableTimeZone == 1">Central</h3>
        <h3 style="display: inline; margin-left: 1rem;" v-if="tableTimeZone == 4">Eastern</h3>
        <h3 style="display: inline; margin-left: 1rem;" v-if="tableTimeZone == 5">Canada</h3>
        <button style="margin-left: 3rem;" class="btn-xs" @click="tableTimeToggle">Toggle</button>

        <button class="btn btn-xs" style="margin-left: 6rem;" @click="sortList">State<span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></i></button>
        <button class="btn btn-xs" @click="sortListReverse">State <span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span> </button>
        <!-- <button @click="sortListDot">Sort Dot</button>
        <button @click="sortListDotReverse">Sort Dot Reverse</button> -->
        <!-- col-lg-offset-1 col-lg-6 -->
        <div class="recordCont">
            <!-- table-bordered table-striped -->
            <table id="ifThisWorks" class="table table-bordered table-striped">

                <thead>
                    <tr>
                        <th scope="col">Dot #</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Company DBA</th>
                        <th scope="col">Office Phone Number</th>
                        <th scope="col">Cell Phone Number</th>
                        <th scope="col">Company Rep</th>
                        <th scope="col">Company Rep 2</th>
                        <th scope="col">State</th>
                        <th scope="col">Docket</th>
                        <th scope="col">------</th>

                    </tr>
                </thead>
                <!-- NOT CALLED RECORDS -->
                <tbody v-if="tableTimeZone == 3">
                    <tr v-if="record" v-for="(record, key) in pRecords">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_LEGAL_NAME}}</td>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_OFFICE_TELEPHONE_NUMBER}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record)}}</p>
                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                            <a target="_blank" :href="'https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&amp;query_type=queryCarrierSnapshot&amp;query_param=USDOT&amp;query_string=' + record.Dot"
                                class="btn btn-primary btn-xs ">Safer</a>
                        </td>

                    </tr>

                </tbody>
                <tbody v-if="tableTimeZone == 2">
                    <tr v-if="record" v-for="(record, key) in mRecords">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_LEGAL_NAME}}</td>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_OFFICE_TELEPHONE_NUMBER}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record)}}</p>
                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                            <a target="_blank" :href="'https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&amp;query_type=queryCarrierSnapshot&amp;query_param=USDOT&amp;query_string=' + record.Dot"
                                class="btn btn-primary btn-xs ">Safer</a>

                        </td>

                    </tr>

                </tbody>
                <tbody v-if="tableTimeZone == 1">
                    <tr v-if="record" v-for="(record, key) in cRecords">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_LEGAL_NAME}}</td>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_OFFICE_TELEPHONE_NUMBER}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record)}}</p>
                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                            <a target="_blank" :href="'https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&amp;query_type=queryCarrierSnapshot&amp;query_param=USDOT&amp;query_string=' + record.Dot"
                                class="btn btn-primary btn-xs ">Safer</a>

                        </td>

                    </tr>

                </tbody>
                <tbody v-if="tableTimeZone == 4">
                    <tr v-if="record" v-for="(record, key) in eRecords">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_LEGAL_NAME}}</td>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_OFFICE_TELEPHONE_NUMBER}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record)}}</p>
                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                            <a target="_blank" :href="'https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&amp;query_type=queryCarrierSnapshot&amp;query_param=USDOT&amp;query_string=' + record.Dot"
                                class="btn btn-primary btn-xs ">Safer</a>

                        </td>

                    </tr>

                </tbody>
                <tbody v-if="tableTimeZone == 5">
                    <tr v-if="record" v-for="(record, key) in caRecords">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_LEGAL_NAME}}</td>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_OFFICE_TELEPHONE_NUMBER}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record)}}</p>
                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                            <a target="_blank" :href="'https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&amp;query_type=queryCarrierSnapshot&amp;query_param=USDOT&amp;query_string=' + record.Dot"
                                class="btn btn-primary btn-xs ">Safer</a>

                        </td>

                    </tr>

                </tbody>
                <!-- CALLED RECORDS -->
                <tbody v-if="tableTimeZone == 5">
                    <tr v-if="record" v-for="(record, key) in caRecordsC">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_LEGAL_NAME}}</td>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_OFFICE_TELEPHONE_NUMBER}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record)}}</p>
                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                            <a target="_blank" :href="'https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&amp;query_type=queryCarrierSnapshot&amp;query_param=USDOT&amp;query_string=' + record.Dot"
                                class="btn btn-primary btn-xs ">Safer</a>

                        </td>

                    </tr>

                </tbody>
                <tbody v-if="tableTimeZone == 1">
                    <tr v-if="record" v-for="(record, key) in cRecordsC">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_LEGAL_NAME}}</td>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_OFFICE_TELEPHONE_NUMBER}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record)}}</p>
                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                            <a target="_blank" :href="'https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&amp;query_type=queryCarrierSnapshot&amp;query_param=USDOT&amp;query_string=' + record.Dot"
                                class="btn btn-primary btn-xs ">Safer</a>

                        </td>

                    </tr>

                </tbody>
                <tbody v-if="tableTimeZone == 3">
                    <tr v-if="record" v-for="(record, key) in pRecordsC">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_LEGAL_NAME}}</td>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_OFFICE_TELEPHONE_NUMBER}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record)}}</p>
                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                            <a target="_blank" :href="'https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&amp;query_type=queryCarrierSnapshot&amp;query_param=USDOT&amp;query_string=' + record.Dot"
                                class="btn btn-primary btn-xs ">Safer</a>

                        </td>

                    </tr>

                </tbody>
                <tbody v-if="tableTimeZone == 2">
                    <tr v-if="record" v-for="(record, key) in mRecordsC">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_LEGAL_NAME}}</td>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_OFFICE_TELEPHONE_NUMBER}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record)}}</p>
                            <!-- <p class="inline">{{ifCalled(record)}}</p> -->

                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                            <a target="_blank" :href="'https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&amp;query_type=queryCarrierSnapshot&amp;query_param=USDOT&amp;query_string=' + record.Dot"
                                class="btn btn-primary btn-xs ">Safer</a>

                        </td>

                    </tr>

                </tbody>
                <tbody v-if="tableTimeZone == 4">
                    <tr v-if="record" v-for="(record, key) in eRecordsC">
                        <th scope="row">{{record.Dot}}</th>
                        <td>{{record.CENSUS_LEGAL_NAME}}</td>
                        <td>{{record.CENSUS_DBA}}</td>
                        <td>{{record.CENSUS_OFFICE_TELEPHONE_NUMBER}}</td>
                        <td>{{record.CENSUS_CELL_PHONE_NUMBER}}</td>
                        <td>{{record.COMPANY_REP_1}}</td>
                        <td>{{record.COMPANY_REP_2}}</td>
                        <td>{{record.CENSUS_MAILING_ADDRESS_STATE}}</td>
                        <td>{{record.DOCKET}}</td>
                        <td>
                            <p class="inline">{{ifCalled(record)}}</p>
                            <button class="btn-xs btn-info" @click="show(record)">Call</button>
                            <a target="_blank" :href="'https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&amp;query_type=queryCarrierSnapshot&amp;query_param=USDOT&amp;query_string=' + record.Dot"
                                class="btn btn-primary btn-xs ">Safer</a>

                        </td>

                    </tr>

                </tbody>


            </table>
        </div>
        <modal height="auto" :scrollable="true" name="transaction-modal">
            <div class="margin2">
                <form id="transForm1" @submit.prevent="newTransaction">
                    <div class="form-group"></div>
                    <div class="form-group">
                        <div class="regInput">
                            <div class="form-group" style="display: inline-block;">

                                <div class="form-group">
                                    <label for="dot">Dot #:</label>
                                    <div class="regInput">
                                        <input type="text" size="15" name="dot" placeholder="dot #" v-model="transaction.Dot" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <h4>Status</h4>
                                    <div class="form-group" style="padding: 0.5rem; display: inline-block;">
                                        <label for="statusg">Green</label>
                                        <input type="radio" name="statusg" value="green" v-model="transaction.Status" checked>
                                    </div>
                                    <div class="form-group" style="padding: 0.5rem; display: inline-block;">
                                        <label for="statuso">Orange</label>
                                        <input type="radio" name="statuso" value="orange" v-model="transaction.Status">
                                    </div>
                                    <div class="form-group" style="padding: 0.5rem; display: inline-block;">
                                        <label for="statusy">Yellow</label>
                                        <input type="radio" name="statusy" value="yellow" v-model="transaction.Status">
                                    </div>
                                    <div class="form-group" style="padding: 0.5rem; display: inline-block;">
                                        <label for="statusr">Red</label>
                                        <input type="radio" name="statusr" value="red" v-model="transaction.Status">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="" for="inputName">Callback Date:</label>
                                <input type="date" name="statusr" v-model="transaction.Callback">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Notes</label>
                        <textarea class="form-control" form="transForm1" v-model="transaction.Notes" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <div class="margin3">
                            <button class="btn-sm btn-success" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <div class="transactions2">
                    <div v-for="z in yTransactions">
                        <div class=" mainDiv2 bg2">


                            <div class="flex-container transactions1">

                                <div>
                                    <b>Dot #: </b>
                                    <p>{{z.Dot}}</p>

                                </div>
                                <div>
                                    <b>Notes: </b>
                                    <p>{{z.Notes}}</p>
                                </div>
                                <div>
                                    <b>Notes: </b>
                                    <p>{{z.Created}}</p>
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
                                <div>
                                    <b>Created: </b>
                                    <p>{{t.Created}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </modal>
        <!-- <button @click="sortList()"></button> -->
    </div>
</template>
<script>
    var zipcode_to_timezone = require('zipcode-to-timezone');
    // require('datatables.net-bs')();
    // require('datatables.net-scroller-bs')();
    import test2 from './Test2'
    import router from '../router'
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
                safUrl: "",
                worldClock: false,
                executed1: false,
                executed2: false,
                executed3: false,
                executed4: false,
                executed5: false,
                // rowColor: "danger",



            }
        },
        watch: {
            tableTimeZone: function (newValue, oldValue) {
                console.log(this.tableTimeZone)
                if (this.tableTimeZone === 1) {
                    if (this.executed1 === false) {
                        this.executed1 = true
                        this.$store.dispatch('getInterCentralRecords', this.user._id)
                    }
                }
                else if (this.tableTimeZone === 2) {
                    debugger
                    if (this.executed2 === false) {
                        this.executed2 = true
                        this.$store.dispatch('getInterMountainRecords', this.user._id)
                    }
                }
                else if (this.tableTimeZone === 3) {
                    if (this.executed3 === false) {
                        this.executed3 = true
                        this.$store.dispatch('getInterPacificRecords', this.user._id)
                    }
                }
                else if (this.tableTimeZone === 4) {
                    if (this.executed4 === false) {
                        this.executed4 = true
                        this.$store.dispatch('getInterEasternRecords', this.user._id)
                    }
                }
                else if (this.tableTimeZone === 5) {
                    if (this.executed5 === false) {
                        this.executed5 = true
                        this.$store.dispatch('getInterCanadaRecords', this.user._id)
                    }
                }
            }
        },

        methods: {
            //modal methods
            getUserRecords4() {

                this.$store.dispatch('getUserRecords', this.user._id)
            },
            routeHome() {
                router.push('/')
            },
            routeIntra() {
                router.push('intrastate')
            },
            routeGood() {
                router.push('good')
            },
            worldClockToggle() {
                this.worldClock = !this.worldClock
            },
            openSafer(dot) {
                var url = "https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&amp;query_type=queryCarrierSnapshot&amp;query_param=USDOT&amp;query_string=" + dot
                this.safUrl = url
                console.log(url)
                return url
            },
            sortList() {
                //have to account for called records probably going to seperate them from the others
                if (this.tableTimeZone === 1) {
                    var records = this.cRecords
                    var records2 = this.cRecordsC
                }
                else if (this.tableTimeZone === 2) {
                    var records = this.mRecords
                    var records2 = this.mRecordsC
                }
                else if (this.tableTimeZone === 3) {
                    var records = this.pRecords
                    var records2 = this.pRecordsC
                }
                else if (this.tableTimeZone === 4) {
                    var records = this.eRecords
                    var records2 = this.eRecordsC
                }
                else if (this.tableTimeZone === 5) {
                    var records = this.caRecords
                    var records2 = this.caRecordsC
                }
    
                var returnO = records.sort(function (a, b) {
                    var nameA = a.CENSUS_MAILING_ADDRESS_STATE.toLowerCase(), nameB = b.CENSUS_MAILING_ADDRESS_STATE.toLowerCase();

                    if (nameA < nameB) //sort string ascending
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
                console.log(returnO)
                var returnO2 = records2.sort(function (a, b) {
                    var nameA = a.CENSUS_MAILING_ADDRESS_STATE.toLowerCase(), nameB = b.CENSUS_MAILING_ADDRESS_STATE.toLowerCase();

                    if (nameA < nameB) //sort string ascending
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
                console.log(returnO2)

            },
            sortListReverse() {
                //have to account for called records probably going to seperate them from the others
                if (this.tableTimeZone === 1) {
                    var records = this.cRecords
                    var records2 = this.cRecordsC
                }
                else if (this.tableTimeZone === 2) {
                    var records = this.mRecords
                    var records2 = this.mRecordsC
                }
                else if (this.tableTimeZone === 3) {
                    var records = this.pRecords
                    var records2 = this.pRecordsC
                }
                else if (this.tableTimeZone === 4) {
                    var records = this.eRecords
                    var records2 = this.eRecordsC
                }
                else if (this.tableTimeZone === 5) {
                    var records = this.caRecords
                    var records2 = this.caRecordsC
                }
                // records.reverse()
                var returnO = records.sort(function (a, b) {
                    var nameA = a.CENSUS_MAILING_ADDRESS_STATE.toLowerCase(), nameB = b.CENSUS_MAILING_ADDRESS_STATE.toLowerCase();

                    if (nameA > nameB) //sort string descending
                        return -1;
                    if (nameA < nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
                var returnO2 = records2.sort(function (a, b) {
                    var nameA = a.CENSUS_MAILING_ADDRESS_STATE.toLowerCase(), nameB = b.CENSUS_MAILING_ADDRESS_STATE.toLowerCase();

                    if (nameA > nameB) //sort string ascending
                        return -1;
                    if (nameA < nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
                console.log(returnO2)

                console.log(returnO)

            },
            sortListDot() {
                //have to account for called records probably going to seperate them from the others
                if (this.tableTimeZone === 1) {
                    var records = this.cRecords
                }
                else if (this.tableTimeZone === 2) {
                    var records = this.mRecords
                }
                else if (this.tableTimeZone === 3) {
                    var records = this.pRecords
                }
                else if (this.tableTimeZone === 4) {
                    var records = this.eRecords
                }
                else if (this.tableTimeZone === 5) {
                    var records = this.caRecords
                }
                var records2 = []
                for (let p = 0; p < records.length; p++) {
                    const record = records[p];
                    if (record.Called === "Called") {
                        records2
                    }
                }


                var returnO = records.sort(function (a, b) {
                    var nameA = a.Dot.toLowerCase(), nameB = b.Dot.toLowerCase();

                    if (nameA < nameB) //sort string ascending
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
                console.log(returnO)

            },
            sortListDotReverse() {
                //have to account for called records probably going to seperate them from the others
                if (this.tableTimeZone === 1) {
                    var records = this.cRecords
                }
                else if (this.tableTimeZone === 2) {
                    var records = this.mRecords
                }
                else if (this.tableTimeZone === 3) {
                    var records = this.pRecords
                }
                else if (this.tableTimeZone === 4) {
                    var records = this.eRecords
                }
                else if (this.tableTimeZone === 5) {
                    var records = this.caRecords
                }
                // records.reverse()
                var returnO = records.sort(function (a, b) {
                    var nameA = a.Dot, nameB = b.Dot;

                    if (nameA > nameB) //sort string descending
                        return -1;
                    if (nameA < nameB)
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
            ifCalled(record) {
                if (record.Called === true) {
                    if (record.Status != undefined) {

                        var return1 = "Called " + record.Status
                        return return1
                    }
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
                this.transaction.CENSUS_LEGAL_NAME = record.CENSUS_LEGAL_NAME

                this.$store.dispatch('searchTransByDot', record.Dot)
                this.$modal.show('transaction-modal');
            },
            // show2(transaction) {
            //     this.transaction = {}
            //     this.transaction.Dot = transactionDot
            //     this.transaction.CENSUS_LEGAL_NAME = record.CENSUS_LEGAL_NAME

            //     this.$store.dispatch('searchTransByDot', record.Dot)
            //     this.$modal.show('transaction-modal');
            // },
            
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
                // this.zip1 = ""
                this.timezone2 = tz
                this.zip1 = tz
                return tz

            },
            copyDot(dot) {
                this.transaction = {}
                this.transaction.Dot = dot
                this.$store.dispatch('searchTransByDot', dot)
            },
            //rotate table 4 each timezone
            tableTimeToggle() {
                if (this.tableTimeZone < 5) {
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

                this.$notify('New Transaction', 'info', { itemClass: 'alert col-6 alert-info', visibility: 1000 })
                this.$store.dispatch('authenticate')
                this.$store.dispatch('newTransaction', this.transaction)
                if (this.transaction.Status == "red") {
                    this.hide()

                }
                this.updateStatus(this.transaction)
                this.updateCalled(this.transaction)
                // else if (this.transaction.Status == "yellow") {
                // }
                // else if (this.transaction.Status == "orange") {
                //     this.updateColoro(this.transaction)
                // }

            },
            updateCalled(transaction) {
                debugger
                var record3 = this.$store.state.activeRecords
                for (const key in record3) {
                    if (record3.hasOwnProperty(key)) {
                        const record2 = record3[key];
                        for (let q = 0; q < record2.length; q++) {
                            const element = record2[q];
                            if (element.Dot === transaction.Dot) {
                                element.Called = true
                                element.Status = transaction.Status
                                this.$store.dispatch('updateCalled', element)
                            }
                        }
                    }
                }
            },
            updateStatus(transaction) {

                var record2 = this.$store.state.activeRecords
                for (let q = 0; q < record2.length; q++) {
                    const element = record2[q];
                    if (element.Dot === transaction.Dot) {

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
            // checkRecords(records) {

            //     var last = 0
            //     for (let q = 0; q < records.length; q++) {

            //         var record = records[q];
            //         if (q > 0) {
            //             if (record.Called < records[last].Called) {
            //                 records = orgRecords(records)
            //                 return false
            //             }
            //         }
            //         var last = q
            //     }
            //     function orgRecords(records) {

            //         for (let p = 0; p < records.length; p++) {
            //             const record = records[p];
            //             if (record.Called === true) {
            //                 var record2 = records.splice(p, 1)
            //                 records.push(record2[0])
            //             }
            //         }
            //     }
            //     return true
            // },


        },
        computed: {
            cbTransactions(){
                return this.$store.state.activeCallbackTransactions
            },
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

                for (let q = 0; q < records.length; q++) {
                    const record = records[q];

                }
                return records
            },
            cRecords() {
                var records = this.$store.state.central
                var one = true

                return records
            },
            mRecords() {
                var records = this.$store.state.mountain
                var one = true
                // while (one === true) {

                //     var check = this.checkRecords(records)
                //     if (check === true) {
                //         console.log(records)
                //         return records
                //     }
                //     else {

                //         continue
                //     }
                // }
                console.log(records[2])
                return records
            },
            pRecords() {
                var records = this.$store.state.pacific
                var one = true

                return records
            },

            eRecordsC() {
                var records = this.$store.state.easternC
                return records
                var one = true

                // for (let q = 0; q < records.length; q++) {
                //     const record = records[q];

                // }
            },
            cRecordsC() {
                var records = this.$store.state.centralC
                return records
                var one = true

            },
            mRecordsC() {
                var records = this.$store.state.mountainC

                console.log(records[5])
                return records
                var one = true
                // while (one === true) {

                //     var check = this.checkRecords(records)
                //     if (check === true) {
                //         console.log(records)
                //         return records
                //     }
                //     else {

                //         continue
                //     }
                // }
            },
            pRecordsC() {
                var records = this.$store.state.pacificC
                return records
                var one = true

            },
            caRecords() {
                var records = this.$store.state.canada
                return records

            },
            caRecordsC() {
                var records = this.$store.state.canadaC
                return records

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
            // this.$store.dispatch('authenticate')
            this.$store.dispatch('getUserTransactionsCallback', this.$store.state.user._id)

            // console.log("hello")
            // this.$store.dispatch('getUserRecords', this.user._id)
            // $(document).ready(function () {
            //     $('#ifThisWorks').DataTable();
            // });
        },
        components: {
            // <my-component> will only be available in parent's template
            test2
        }
    }
</script>
<style scoped>
    .transactions1 {
        margin: 0.5rem;
        padding: 0.5rem;
        border-radius: 25px;
    }

    .transactions2 {
        padding: 1rem;
    }

    .bg2 {
        background-color: rgba(225, 228, 81, 0.719);
        /* border-radius: 25px;
        padding: 0.5rem;
        margin: 0.5rem; */
    }

    .bg1 {
        background-color: rgba(228, 153, 55, 0.726);
        /* border-radius: 25px;
        padding: 0.5rem;
        margin: 0.5rem; */
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

    .pointer:hover {
        cursor: pointer;
    }
</style>