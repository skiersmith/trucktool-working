<template>
  <div>

    <div>
      <button @click="getSplit3">Get Recent Expirations (2 Years)</button>
      <button @click="getSplit">Get Recent Expirations (1 Year)</button>
      <button @click="getSplit2">Get Recent Expirations (4 Months)</button>
    </div>
    <!-- <div class="nav-header">
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
    </div> -->
    <div class="spacer5"></div>
    <div class="userGroup margin">
      <div>
        <form @submit.prevent="splitRecords">
          <label for="users">Users</label>
          <input v-model="usersC" name="users" type="number">
          <button class="btn-xs btn-info" type="submit">Split</button>
        </form>
      </div>
    </div>
    <div>
      <form @submit.prevent="assignRecords">
        <div v-for="(r,  index) in records9" class="form-group">
          <p>Group: {{index}}</p>
          <label for="count">UserId</label>
          <input v-model="inputF[index]" name="count" type="text" size="15">
        </div>
        <button type="submit"> Assign</button>
      </form>
    </div>
    <h3>Total Records</h3>
    <p>{{count}}</p>
    <h3>Records Per User</h3>
    <p>{{count2}}</p>
    <p>{{inputF1}}</p>
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
    <!-- <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th scope="col">Dot #</th>
                <th scope="col">Company Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email Address</th>
                <th scope="col">Company Rep</th>
                <th scope="col">Company Rep 2</th>
                <th scope="col">State</th>
                <th scope="col">Docket</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="r in records9">
                <th scope="row">{{r.dot}}</th>
                <td>{{r.CENSUS_LEGAL_NAME}}</td>
                <td>{{r.censuS_CELL_PHONE_NUMBER}}</td>
                <td>{{r.email}}</td>
                <td>{{r.companY_REP_1}}</td>
                <td>{{r.companY_REP_2}}</td>
                <td>{{r.censuS_MAILING_ADDRESS_STATE}}</td>
                <td>{{r.docket}}</td>
            </tr>

        </tbody>
    </table> -->


    <div class="app">
      <h3>Example - Import file with required login, firstname, lastname and optional values</h3>
      <br>
      <xls-csv-parser :columns="columns" @on-validate="onValidate" :help="help" lang="en"></xls-csv-parser>
      <br>
      <br>
      <div class="results" v-if="results">
        <!-- <h3>Results:</h3>
          <pre>{{ JSON.stringify(results, null, 2) }}</pre> -->
      </div>
      <button @click="createRecords(actualResults)">Create</button>
      <button @click="count99()">Count</button>
    </div>


    <p>id</p>
    <p v-if="recordsT">{{recordsT.Dot}}</p>
    <div>
      <h2>Records</h2>
      <div>
        <h4>Count:</h4>
        <p class="inline">{{recCount}}</p>
      </div>
      <div class="row">
        <h2>Dot: </h2>
        <div class="col-lg-2" v-for="record in records">
          <p class="textcolor" @click="show(record.Dot)">{{record.Dot}}</p>
        </div>
      </div>

    </div>


    <modal height="auto" :scrollable="true" name="hello-world">
      <div class="margin2">
        <h5>Dot:</h5>
        <p>{{record4.Dot}}</p>
        <h5>Email</h5>
        <p>{{record4.EMAIL_ADDRESS}}</p>
        <h5>CENSUS_LEGAL_NAME</h5>
        <p>{{record4.CENSUS_LEGAL_NAME}}</p>
        <h5>censuS_CELL_PHONE_NUMBER</h5>
        <p>{{record4.CENSUS_CELL_PHONE_NUMBER}}</p>
        <h5>censuS_LEGAL_NAME</h5>
        <p>{{record4.CENSUS_LEGAL_NAME}}</p>
        <h5>censuS_MAILING_ADDRESS_STATE</h5>
        <p>{{record4.CENSUS_MAILING_ADDRESS_STATE}}</p>
        <h5>companY_REP_1</h5>
        <p>{{record4.COMPANY_REP_1}}</p>
        <h5>Update</h5>
        <form @submit.prevent="updateRecord(record4)">
          <label for="userId">userId</label>
          <input type="text" name="userId" v-model="recordUser">
          <button class="btn-xs btn-success" type="submit">Submit</button>
          <button class="btn-xs btn-info" type="reset">Clear</button>
        </form>


        <button class="btn-xs btn-danger" @click="deleteRecord(record4)">Delete Record</button>



      </div>

    </modal>
    <div class="deletePanel">
      <form @submit.prevent="getRecordsByUserId">
        <div class="form-group">
          <input type="text" v-model="delUID" value="">
        </div>
        <div class="form-group">
          <button type="submit">Yo</button>
        </div>
      </form>

      <div class="row">
        <h2>Dot: </h2>
        <div class="col-lg-2" v-for="record in deleteUserRecords">
          <p class="textcolor" @click="show(record.Dot)">{{record.Dot}}</p>
        </div>
      </div>

    </div>

    <div>
      <form class="form-horizontal reg-container" role="form">
        <div class="form-group">

          <div class="form-group">
            <label class="col-sm-2 control-label" for="inputName">Name:</label>
            <div class="col-sm-3 regInput">
              <input type="text" size="40" id="inputName" placeholder="Name" v-model="register.name" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label" for="inputEmail">Email:</label>
            <div class="col-sm-3 regInput">
              <input type="email" size="40" id="inputEmail" placeholder="Email" v-model="register.email" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label" for="inputPassword">Password:</label>
            <div class="col-sm-3 regInput">
              <input type="password" size="40" id="inputPassword" placeholder="Password" v-model="register.password" />
            </div>
          </div>
          <div class="form-group regSub-container">
            <div class="col-sm-offset-2 col-sm-3">
              <button @click="userRegister" data-dismiss="modal" class="btn btn-default">Register Me</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { XlsCsvParser } from 'vue-xls-csv-parser';
  export default {
    name: 'App',
    components: {
      XlsCsvParser,
    },
    methods: {
      userRegister() {
        this.$store.dispatch('userRegister', this.register)
      },
      getRecordsByUserId() {
        debugger
        var userId = this.delUID
        this.$store.dispatch('getUserRecords3', userId)
      },
      getRecordCreated() {
        this.$store.dispatch('getRecordCreated')
      },
      getSplit() {
        this.$store.dispatch('getSplitRecords')
      },
      getSplit2() {
        this.$store.dispatch('getSplitRecords2')
      },
      getSplit3() {
        this.$store.dispatch('getSplitRecords3')
      },
      updateRecord(record) {
        record.userId = this.recordUser

        console.log(record)
        this.$store.dispatch('updateRecord', record)
      },
      deleteRecord(record) {
        this.$store.dispatch('deleteRecord', record)
      },
      show(dot) {

        this.$store.dispatch('getRecord', dot)

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
      getAllRecords() {
        this.$store.dispatch('getAllRecords')
      },
      splitRecords() {
        var users = parseInt(this.usersC)
        var records = this.$store.state.activeSplitRecords
        var lastUser = users
        var currentUser = 0
        var returnO = []
        var count = 0
        for (let p = 0; p < users; p++) {
          const user = users[p];
          returnO.push([])
        }
        for (let i = 0; i < records.length; i++) {
          count++
          var record2 = records[i];
          returnO[currentUser].push(record2)
          if (currentUser < users - 1) {
            currentUser++
          }
          else { currentUser = 0 }
          if (lastUser < users - 1) {
            lastUser++
          }
          else {
            lastUser = 0
          }
        }
        var count2 = Math.round(count / users)
        this.count2 = count2
        this.count = count
        this.records9 = returnO
        return returnO
      },
      assignRecords() {
        //assigns key (user id) value pair (arr of records)
        var userRecords = {}
        var records = this.activeSplitRecords
        var users = this.inputF
        var userCount = 0
        for (const key in users) {
          if (users.hasOwnProperty(key)) {
            const user = users[key];
            userRecords[user] = []
            userCount++
          }
        }

        userCount = userCount - 1
        // var lastRecord = 0
        // for (let p = 0; p < records.length; p++) {
        //   const recGroup = records[p];
        //   for (let l = 0; l < userRecords.length; l++) {
        //     const ur = userRecords[l];



        //     lastRecord = p 
        //   }


        //   if (users.hasOwnProperty(key)) {
        //       const uid = users[key];
        //       userRecords[uid].push(recGroup)
        //       // if (key === p) {
        //       // }
        //     }

        // }
        var userPush = 0
        for (let p = 0; p < records.length; p++) {
          const recGroup = records[p];
          for (const key in users) {
            if (users.hasOwnProperty(key)) {
              const uid = users[userPush];
              userRecords[uid].push(recGroup)

              if (userPush < userCount) {
                userPush++
                break
              }
              else if (userPush = userCount) {
                userPush = 0
                break
              }
            }
          }
        }
        console.log(userRecords)
        debugger
        this.records9 = userRecords

        this.createUserRecords()
        // return userRecords
      },
      createUserRecords() {
        var userRecords = this.records9
        var store = this.$store

        var urs = []
        debugger
        for (var key in userRecords) {
          if (userRecords.hasOwnProperty(key)) {
            for (let q = 0; q < userRecords[key].length; q++) {
              (function (q) {
              var ur = userRecords[key][q];
              console.log(ur)
              var userRecord = {
                userId: key,
                _id: ur._id
              }

                // urs.push(userRecord)
                // console.log(userRecord)
                  // var ur = userRecords[key][q];
                  setTimeout(function () {
                    // alert("hello");
                    // JSON.stringify(results1)
                    store.dispatch('newUserRecord', userRecord)
                  }, 100 * q);
                })(q);
            }
          }
        }

        // this.newUR(urs)
      },
      getRecordByDot(dot) {
        var record = this.$store.dispatch('getRecordByDot', dot)

      },
      newUR(userRecords) {

        var store = this.$store
        for (var p = 0; p < userRecords.length; p++) {
          (function (p) {
            var results1 = userRecords[p]
            setTimeout(function () {
              // alert("hello");
              // JSON.stringify(results1)
              store.dispatch('newUserRecord', results1)
            }, 100 * p);
          })(p);
        }

        // for (let q = 0; q < userRecords.length; q++) {
        //   var ur11 = userRecords[q];
        //   console.log(ur11)

        //     (function (q) {
        //       setTimeout(function () {
        //         // alert("hello");
        //         // JSON.stringify(results1)
        //         store.dispatch('newUserRecord', ur11)
        //       }, 100 * q);
        //     })(q);
        // }
      },
      createRecords(results) {
        var store = this.$store
        debugger
        // var results = this.actualResults
        for (var p = 0; p < results.length; p++) {
          (function (p) {
            var results1 = results[p]
            // var record = store.dispatch('getRecordByDot', results1)
            if ((Date.parse(results1.MCS_150_DATE) + 94670856000) > Date.now()) {

              setTimeout(function () {
                // alert("hello");
                // JSON.stringify(results1)

                // store.dispatch('addRecords', results1)
                store.dispatch('newRecords', results1)
              }, 100 * p);
            }
          })(p);
        }
      },

      onValidate(results) {
        this.results = results;
      },
      //installed tool only sorts by column. this constructs the records into rows.
      count99() {

        var records = []
        var results = this.results
        results.forEach(column => {
          for (let i = 0; i < column["data"].length; i++) {
            var element = column["data"][i]

            if (!records[i]) { records[i] = {} }
            records[i]["Called"] = false
            if (column["column"] == "DOT") {
              // if(element.dot = null){}
              records[i]["Dot"] = element
            }
            else if (column["column"] == "DOCKET") {
              records[i]["DOCKET"] = element
            }
            else if (column["column"] == "ENTITY_TYPE") {
              records[i]["ENTITY_TYPE"] = element
            }
            else if (column["column"] == "CENSUS_LEGAL_NAME") {
              records[i]["CENSUS_LEGAL_NAME"] = element
            }
            else if (column["column"] == "CENSUS_DBA") {
              records[i]["CENSUS_DBA"] = element
            }
            else if (column["column"] == "EMAIL_ADDRESS") {
              records[i]["EMAIL_ADDRESS"] = element
            }
            else if (column["column"] == "COMPANY_REP_1") {
              records[i]["COMPANY_REP_1"] = element
            }
            else if (column["column"] == "COMPANY_REP_2") {
              records[i]["COMPANY_REP_2"] = element
            }
            else if (column["column"] == "MCS_150_DATE") {
              records[i]["MCS_150_DATE"] = element
            }
            else if (column["column"] == "SAFER_OPERATING_STATUS") {
              records[i]["SAFER_OPERATING_STATUS"] = element
            }
            else if (column["column"] == "CLASSIFICATION_INTER") {
              records[i]["CLASSIFICATION_INTER"] = element
            }
            else if (column["column"] == "INTRASTATE_NONHAZMAT") {
              records[i]["INTRASTATE_NONHAZMAT"] = element
            }
            else if (column["column"] == "CENSUS_OFFICE_TELEPHONE_NUMBER") {
              records[i]["CENSUS_OFFICE_TELEPHONE_NUMBER"] = element
            }
            else if (column["column"] == "CENSUS_CELL_PHONE_NUMBER") {
              records[i]["CENSUS_CELL_PHONE_NUMBER"] = element
            }
            else if (column["column"] == "CENSUS_MAILING_ADDRESS_STATE") {
              records[i]["CENSUS_MAILING_ADDRESS_STATE"] = element
            }
            else if (column["column"] == "CENSUS_MAILING_ADDRESS_ZIP_CODE") {
              records[i]["CENSUS_MAILING_ADDRESS_ZIP_CODE"] = element
            }
          }
        });
        this.setResults(records)
        // actualResults = records
        return
      },
      setResults(records) {
        this.actualResults = records

        console.log(this.actualResults)
      },
    },
    computed: {
      deleteUserRecords() {
        debugger
        console.log(this.$store.state.activeDeleteRecords)
        return this.$store.state.activeDeleteRecords
      },
      inputF1() {

        return this.inputF[1]
      },
      recordsT() {
        // console.log(this.records9)
        if (this.records9[1]) {
          // console.log(this.records9[1])
          if (this.records9[1][1]) {

            // console.log(this.records9[1][1])
            return this.records9[1][1]
          }
        }

      },
      users() {
        return this.$store.state.users
      },
      user() {
        console.log(this.$store.state.user)
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
      records() {
        var records = this.$store.state.activeSplitRecords
        var count = 0
        for (let p = 0; p < records.length; p++) {
          var record = records[p];
          count++
        }
        this.recCount = count
        return this.$store.state.activeSplitRecords
      },
      activeSplitRecords() {
        return this.$store.state.activeSplitRecords
      },
      record4() {
        console.log(this.$store.state.activeRecord)
        this.theRecord = this.$store.state.activeRecord
        return this.$store.state.activeRecord
      },

    },
    mounted() {
      this.$store.dispatch('getAllRecords')
      this.$store.dispatch('getRecordsCreated')

    },
    data() {
      return {
        recordUser: "",
        register: {},
        inputF: {},
        usersC: 0,
        records9: [],
        delUID: "",
        count: 0,
        count2: 0,
        recCount: 0,
        columns: [
          { name: 'DOT', value: 'DOT' },
          { name: 'DOCKET', value: 'DOCKET', isOptional: true },
          { name: 'ENTITY_TYPE', value: 'ENTITY_TYPE', isOptional: true },
          { name: 'CENSUS_LEGAL_NAME', value: 'CENSUS_LEGAL_NAME', isOptional: true },
          { name: 'CENSUS_DBA', value: 'CENSUS_DBA', isOptional: true },
          { name: 'CENSUS_OFFICE_TELEPHONE_NUMBER', value: 'CENSUS_OFFICE_TELEPHONE_NUMBER', isOptional: true },
          { name: 'CENSUS_CELL_PHONE_NUMBER', value: 'CENSUS_CELL_PHONE_NUMBER', isOptional: true },
          { name: 'CENSUS_MAILING_ADDRESS_STATE', value: 'CENSUS_MAILING_ADDRESS_STATE', isOptional: true },
          { name: 'CENSUS_MAILING_ADDRESS_ZIP_CODE', value: 'CENSUS_MAILING_ADDRESS_ZIP_CODE', isOptional: true },
          { name: 'CLASSIFICATION_INTER', value: 'CLASSIFICATION_INTER', isOptional: true },
          { name: 'INTRASTATE_NON_HAZMAT_CARRIER', value: 'INTRASTATE_NONHAZMAT', isOptional: true },
          { name: 'EMAIL_ADDRESS', value: 'EMAIL_ADDRESS', isOptional: true },
          { name: 'COMPANY_REP_1', value: 'COMPANY_REP_1', isOptional: true },
          { name: 'COMPANY_REP_2', value: 'COMPANY_REP_2', isOptional: true },
          { name: 'MCS_150_DATE', value: 'MCS_150_DATE', isOptional: true },
          { name: 'SAFER_OPERATING_STATUS', value: 'SAFER_OPERATING_STATUS', isOptional: true },
        ],
        actualResults: {},
        results: null,
        help: 'Necessary columns are: login, firstname and lastname',
      };
    },
  };
</script>
<style>
  .spacer50 {
    height: 50rem;
  }

  .spacer5 {
    height: 5rem;
  }

  .margin {
    margin: 5rem;
  }


  .padding {
    padding: 1rem
  }

  .recordGroup {
    padding: 5rem;
    margin: 5rem;
  }

  .inline {
    display: inline
  }

  .textcolor:hover {
    color: cadetblue;
    cursor: pointer;
  }
</style>