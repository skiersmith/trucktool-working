import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import { loadavg } from 'os';
var zipcode_to_timezone = require('zipcode-to-timezone');
var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//floating-brushlands-87135.herokuapp.com/' : '//localhost:5000/';
let api = axios.create({
    baseURL: baseUrl + 'api',
    timeout: 2000,
    withCredentials: true
})
let auth = axios.create({
    baseURL: baseUrl,
    timeout: 2000,
    withCredentials: true
})
vue.use(vuex)
// http://worldclockapi.com/api/json/utc/now
var store = new vuex.Store({
    state: {
        activeDeleteRecords: {},
        time: false,
        error: {},
        user: {},
        users: {},
        activeRecords: {},
        activeSplitRecords: [],
        activeRecord: {},
        eastern: [],
        easternC: [],
        central: [],
        centralC: [],
        mountain: [],
        mountainC: [],
        pacific: [],
        pacificC: [],
        ieastern: [],
        ieasternC: [],
        icentral: [],
        icentralC: [],
        imountain: [],
        imountainC: [],
        ipacific: [],
        ipacificC: [],

        activeVaults: {},
        activeYTransactions: {},
        activeOTransactions: {},
        activeGTransactions: {},
        //\/\/ user transactions \/\/
        activeUYTransactions: {},
        activeUOTransactions: {},
        activeUGTransactions: {},
        activeSTD: {},
        actveTF: false
    },
    mutations: {
        clearTZRecords(state, data) {
            state.eastern = data
            state.central = data
            state.pacific = data
            state.mountain = data
        },
        setTimeZoneRecord(state, data) {

            var eastern = []
            var easternC = []
            var mountain = []
            var mountainC = []
            var central = []
            var centralC = []
            var pacific = []
            var pacificC = []
            var ieastern = []
            var ieasternC = []
            var icentral = []
            var icentralC = []
            var imountain = []
            var imountainC = []
            var ipacific = []
            var ipacificC = []
            debugger
            for (let q = 0; q < data.eastern.length; q++) {
                const record = data.eastern[q];
                if (record.Called === true) {
                    if (record.CLASSIFICATION_INTER) {

                        easternC.push(record)
                    }
                    else if (record.INTRASTATE_NONHAZMAT) {
                        ieasternC.push(record)
                    }
                }
                else {
                    
                    if (record.CLASSIFICATION_INTER) {
                        eastern.push(record)

                    }
                    else if (record.INTRASTATE_NONHAZMAT) {
                        ieastern.push(record)
                    }
                }
            }
            for (let q = 0; q < data.central.length; q++) {
                const record = data.central[q];
                if (record.Called === true) {
                    if (record.CLASSIFICATION_INTER) {
                        centralC.push(record)

                    }
                    else if (record.INTRASTATE_NONHAZMAT) {
                        icentralC.push(record)
                    }
                }
                else {
                    if (record.CLASSIFICATION_INTER) {
                        central.push(record)

                    }
                    else if (record.INTRASTATE_NONHAZMAT) {
                        icentral.push(record)
                    }
                }
            }
            for (let q = 0; q < data.pacific.length; q++) {
                const record = data.pacific[q];
                if (record.Called === true) {
                    if (record.CLASSIFICATION_INTER) {
                        pacificC.push(record)

                    }
                    else if (record.INTRASTATE_NONHAZMAT) {
                        ipacificC.push(record)
                    }
                }
                else {
                    if (record.CLASSIFICATION_INTER) {
                        pacific.push(record)

                    }
                    else if (record.INTRASTATE_NONHAZMAT) {
                        ipacific.push(record)
                    }
                }
            }
            for (let q = 0; q < data.mountain.length; q++) {
                const record = data.mountain[q];
                if (record.Called === true) {
                    if (record.CLASSIFICATION_INTER) {
                        mountainC.push(record)

                    }
                    else if (record.INTRASTATE_NONHAZMAT) {
                        imountainC.push(record)
                    }
                    console.log("1")
                }
                else {
                    if (record.CLASSIFICATION_INTER) {
                        mountain.push(record)

                    }
                    else if (record.INTRASTATE_NONHAZMAT) {
                        imountain.push(record)
                    }
                    console.log("2")
                }
            }

            state.eastern = eastern
            state.central = central
            state.pacific = pacific
            state.mountain = mountain
            state.easternC = easternC
            state.centralC = centralC
            state.pacificC = pacificC
            state.mountainC = mountainC
            state.ieastern = ieastern
            state.icentral = icentral
            state.ipacific = ipacific
            state.imountain = imountain
            state.ieasternC = ieasternC
            state.icentralC = icentralC
            state.ipacificC = ipacificC
            state.imountainC = imountainC
        },
        // setTimeZoneRecord2(state, data) {
        //     state.yEastern = data.eastern
        //     state.yCentral = data.central
        //     state.yPacific = data.pacific
        //     state.yMountain = data.mountain
        // },

        clearError(state, data) {
            state.error = {}
        },
        setUser(state, data) {
            state.user = data
        },
        setTime(state, data) {
            state.time = data
        },
        setUsers(state, data) {
            state.users = data
        },
        setActiveRecord(state, data) {
            if (data.data) {
                state.activeRecord = data.data
            }
            else if (!data.data) {
                state.activeRecord = data
            }
        },
        setActiveRecords(state, data) {
            if (data.data) {
                state.activeRecords = data.data
            }
            else if (!data.data) {
                state.activeRecords = data
            }
        },
        setActiveSplitRecords(state, data) {
            state.activeSplitRecords = data
            // .push(data)

        },
        setActiveOTransactions(state, data) {
            state.activeOTransactions = data
        },
        setActiveYTransactions(state, data) {
            state.activeYTransactions = data
        },
        setActiveGTransactions(state, data) {
            state.activeGTransactions = data
        },
        setActiveUOTransactions(state, data) {
            state.activeUOTransactions = data
        },
        setActiveUYTransactions(state, data) {
            state.activeUYTransactions = data
        },
        setActiveUGTransactions(state, data) {
            state.activeUGTransactions = data
        },
        setDeleteRecords(state, data) {
            state.activeDeleteRecords = data
        },
        handleError(state, err) {
            state.error = err
        },
        setActiveSTD(state, data) {
            state.activeSTD = data
        },
        setTF(state, data) {
            if (data = true) { state.activeTF = true }
            if (data = false) {
                state.activeSTD = false
            }
        },
        clearSTD(state, data) {
            state.activeYTransactions = data
            state.activeOTransactions = data
        }

    },
    actions: {
        getSplitRecords({ commit, dispatch }) {

            api('records')
                .then(res => {
                    var records2 = []
                    for (let q = 0; q < res.data.data.length; q++) {

                        const record = res.data.data[q];
                        var mcs = Date.parse(record.MCS_150_DATE)
                        var today = Date.now()
                        var twoYears = Date.now() - 63113904000
                        var hbd = mcs + 63113904000
                        var hbd2 = twoYears - 31104000000
                        var hbd3 = twoYears + 2592000000


                        if (!record.userId) {
                            if (hbd < today && mcs > hbd2 || mcs < hbd3) {
                                records2.push(record)
                            }
                        }
                    }
                    commit('setActiveSplitRecords', records2)

                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        getSplitRecords2({ commit, dispatch }) {

            api('records')
                .then(res => {
                    var records2 = []
                    for (let q = 0; q < res.data.data.length; q++) {

                        const record = res.data.data[q];
                        var mcs = Date.parse(record.MCS_150_DATE)
                        var today = Date.now()
                        var twoYears = Date.now() - 63113904000
                        var hbd = mcs + 63113904000
                        var hbd2 = twoYears - 10368000000
                        // var hbd3 = twoYears + 2592000000
                        // && mcs < hbd3

                        if (!record.userId) {
                            if (hbd < today && mcs > hbd2) {
                                records2.push(record)
                            }
                        }
                    }
                    commit('setActiveSplitRecords', records2)

                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        getSplitRecords3({ commit, dispatch }) {

            api('records')
                .then(res => {
                    var records2 = []
                    for (let q = 0; q < res.data.data.length; q++) {

                        const record = res.data.data[q];
                        var mcs = Date.parse(record.MCS_150_DATE)
                        var today = Date.now()
                        var twoYears = Date.now() - 63113904000
                        var hbd = mcs + 63113904000
                        var hbd2 = twoYears - 63113852000
                        var hbd3 = twoYears + 2592000000


                        if (!record.userId) {
                            if (hbd < today && mcs > hbd2 || mcs < hbd3) {
                                records2.push(record)
                            }
                        }
                    }
                    commit('setActiveSplitRecords', records2)

                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        getTime({ commit, dispatch }) {

            api('get-time')
                .then(res => {

                    var d = new Date(res.data.data.currentDateTime);
                    var hour = d.getHours();
                    var day = d.getDay();
                    var minutes = d.getMinutes();
                    if (day > 0 && day < 6 && hour > 6 && hour < 18) {
                        console.log('Time is between 6 and 5 M - F');
                        commit('setTime', true)
                    }


                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        searchTransByDot({ commit, dispatch }, dot) {
            api('transactions/record/' + dot, dot)
                .then(res => {

                    if (res.data.data != []) {
                        console.log("this is why I'm broken")
                    }
                    var yellow = []
                    var orange = []
                    var green = []
                    for (let i = 0; i < res.data.data.length; i++) {
                        var element = res.data.data[i];
                        if (element.Status == "yellow") {
                            yellow.push(element)
                            continue
                        }
                        else if (element.Status == "orange") {
                            orange.push(element)
                            continue
                        }
                        else if (element.Status == "green") {
                            green.push(element)
                        }
                        else { }
                    }
                    var data1 = {}
                    commit('clearSTD', data1)
                    commit('setActiveYTransactions', yellow)
                    commit('setActiveOTransactions', orange)
                    commit('setActiveGTransactions', green)
                })
                .catch(err => {
                    commit('handleError', err)

                })
        },
        //---------VAULTS-----------//
        newUserRecord({ commit, dispatch }, data) {

            api.put('records/' + data._id, data)
                .then(res => {

                    console.log("res")
                    console.log(res)
                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        newRecordTransaction({ commit, dispatch }, transaction) {
            api.post('recordtransactions', transaction)
                .then(res => {
                    if (res.status == "red") {
                        dispatch('getRecord', transaction)
                    }
                })
                .catch(err => {
                    commit('handleError', err)

                })
        },
        // must get record id before userrecord can be deleted
        getRecord({ commit, dispatch }, Dot) {
            api('records/dot/' + Dot, Dot)
                .then(res => {
                    commit('setActiveRecord', res.data.data[0])
                })
                .catch(err => {
                    commit('handleError', err)

                })
        },
        addRecords({ commit, dispatch }, records) {
            commit('setActiveSplitRecords', records)
        },
        getRecord3({ commit, dispatch }, dot) {
            api('records/dot/' + dot, dot)
                .then(res => {
                    dispatch('deleteUserRecord', res.data.id)
                    dispatch('authenticate2')
                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        getRecordByDot({ commit, dispatch }, dot) {
            api('records/dot/' + dot, dot)
                .then(res => {
                    var true1 = true
                    var false1 = false
                    if (res.data.data.Dot) {
                        commit('setTF', true1)
                    }
                    else {
                        commit('setTF', false1)
                    }
                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        getRecordsCreated({ commit, dispatch }, data) {
            api('records', data)
                .then(res => {
                    var created = {}

                    for (let q = 0; q < res.data.data.length; q++) {
                        const record = res.data.data[q];
                        created[record.Created] += record
                    }


                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        getAllRecords({ commit, dispatch }) {
            api('records')
                .then(res => {
                    commit('setActiveRecords', res.data)
                })
                .catch(err => {
                    commit('handleError', err)

                })
        },
        newRecords({ commit, dispatch }, data) {
            api.post('records', data)
                .then(res => {

                    console.log(res)
                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        updateRecord({ commit, dispatch }, data) {

            // data.CENSUS_MAILING_ADDRESS_ZIP_CODE = "83702"
            api.put('records/' + data._id, data)
                .then(res => {

                    console.log(res)
                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        deleteRecord({ commit, dispatch }, data) {


            api.delete('records/' + data._id)
                .then(res => {

                    console.log(res)
                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        //---------KEEPS-----------//
        updateTransaction({ commit, dispatch }, payload) {

            api.put('transactions/dot/' + payload.Dot, payload)
                .then(res => {

                    dispatch('searchTransByDot', payload.Dot)
                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        newTransaction({ commit, dispatch }, transaction) {
            // commit('clearRecords')

            transaction.UserId = this.state.user._id
            api.post('transactions', transaction)
                .then(res => {
                    console.log(res)
                    // this.$notify('Success', 'type', { itemClass: 'alert col-6 alert-info', iconClass: 'fa fa-lg fa-handshake-o', visibility: 10000 })
                    if (transaction.Status == "red") {
                        var record = {
                            noSale: true,
                            Dot: transaction.Dot
                        }
                        dispatch('updateRecordByDot', record)

                        console.log("redTRan")
                        dispatch('getRecord3', res.data.dot)
                    }
                    else {
                        dispatch('searchTransByDot', transaction.Dot)
                        // dispatch('getUserRecords', this.state.user._id)
                    }

                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        updateRecordByDot({ commit, dispatch }, data) {


            api.put('records/dot/' + data.Dot, data)
                .then(res => {

                    console.log(res)
                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        // getUserRecord2({ commit, dispatch }, records) {
        //     var sendObj = {
        //         eastern: [],
        //         central: [],
        //         pacific: [],
        //         mountain: []
        //     }
        //     var sendObj2 = {
        //         eastern: [],
        //         central: [],
        //         pacific: [],
        //         mountain: []
        //     }
        //     for (const key in records) {

        //         if (records.hasOwnProperty(key)) {
        //             const timezone = records[key];
        //             var timezone2 = key
        //             for (let q = 0; q < timezone.length; q++) {

        //                 const record = timezone[q];
        //                 api('recordtransactions/records/' + record.id, record.id)
        //                     .then(res => {


        //                         if (res.data.userId) {
        //                             
        //                             sendObj2[timezone2].push(record)
        //                         }
        //                         else {
        //                             sendObj[timezone2].push(record)
        //                         }
        //                         // console.log(res)
        //                         // dispatch('deleteUserRecord', res.data)
        //                         // dispatch('authenticate2')
        //                     })
        //                     .catch(err => {
        //                         commit('handleError', err)


        //                     })
        //             }
        //         }
        //     }
        //     
        //     commit('setTimeZoneRecord', sendObj)
        //     commit('setTimeZoneRecord2', sendObj2)
        // },
        getUserRecords({ commit, dispatch }, userId) {

            api('records/user/' + userId)
                .then(res => {
                    console.log("test1")
                    console.log(res.data.data)
                    var records2 = []
                    for (let n = 0; n < res.data.data.length; n++) {

                        var record = res.data.data[n];
                        if (record.noSale) {
                            continue
                        }
                        else {
                            records2.push(record)
                        }
                    }
                    commit('setActiveRecords', records2)
                    var sendObj = {
                        eastern: [],
                        central: [],
                        pacific: [],
                        mountain: []
                    }
                    var nothing = []
                    // commit('clearTZRecords', nothing)
                    console.log(res)
                    for (let l = 0; l < records2.length; l++) {
                        var record = records2[l];
                        var zip2 = record.CENSUS_MAILING_ADDRESS_ZIP_CODE

                        var zip = ""
                        for (let p = 0; p < zip2.length; p++) {
                            const element = zip2[p];
                            zip += element
                            if (p == 4) {
                                break
                            }
                        }
                        var tz = zipcode_to_timezone.lookup(zip);
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
                                // console.log("hi")
                                // this.timezone2 = ""
                                // console.log(tz)
                            }
                            record.timezone = tz
                        }
                        if (record.timezone == "Eastern") {
                            sendObj.eastern.push(record)
                            console.log("eastern")
                        }
                        else if (record.timezone == "Central") {
                            sendObj.central.push(record)
                            console.log("central")
                        }
                        else if (record.timezone == "Mountain") {
                            sendObj.mountain.push(record)
                            // console.log("mountain")
                        }
                        else if (record.timezone == "Pacific") {
                            sendObj.pacific.push(record)
                            console.log("pacific")
                        }
                        else if (record.timezone == "Canada") {
                            // sendObj.pacific.push(record)
                            // console.log("pacific")
                        }
                        // console.log(record.tz)
                    }
                    
                    commit('setTimeZoneRecord', sendObj)
                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        getUserRecords3({ commit, dispatch }, userId) {

            api('records/user/' + userId)
                .then(res => {
                   debugger
                    commit('setActiveSplitRecords', res.data.data)
                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        deleteUserRecord({ commit, dispatch }, payload) {

            api.delete('userrecords/records/' + payload)
                .then(res => {


                    dispatch('getUserRecords', res.data)
                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        getUserTransactions({ commit, dispatch }, userId) {

            api('transactions/users/' + userId)
                .then(res => {
                    var yellow = []
                    var orange = []
                    var green = []

                    for (let i = 0; i < res.data.length; i++) {

                        var element = res.data[i];
                        if (element.status == "yellow") {
                            yellow.push(element)
                            continue
                        }
                        else if (element.status == "orange") {
                            orange.push(element)
                            continue
                        }
                        else if (element.status == "green") {
                            // commit('setOTransaction')
                            green.push(element)
                        }

                        else { }
                    }
                    commit('setActiveUYTransactions', yellow)
                    commit('setActiveUOTransactions', orange)
                    commit('setActiveUGTransactions', green)
                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        getUserTransactions2({ commit, dispatch }, userId) {

            api('transactions/users/' + userId)
                .then(res => {

                    var green = {
                    }
                    var retObj = []
                    for (let p = 0; p < res.data.data.length; p++) {
                        const element = res.data.data[p];
                        green[element.Dot] = []
                    }
                    for (let i = 0; i < res.data.data.length; i++) {

                        var element = res.data.data[i];

                        if (element.Status == "green") {
                            green[element.Dot].push(element)
                            // green.push(element)
                        }

                        else { }

                    }

                    for (const key in green) {
                        if (green.hasOwnProperty(key)) {
                            const element4 = green[key];

                            if (element4[0] != undefined) {
                                console.log(element4[0])
                                retObj.push(element4[0])
                            }
                            else {
                                console.log("hello")
                            }


                            // for (let k = 0; k < element4.length; k++) {
                            //     const element2 = element4[i];
                            //     if(k = 0){
                            //     }                               
                            // }
                        }
                    }
                    console.log(green)

                    commit('setActiveUGTransactions', retObj)
                })
                .catch(err => {
                    commit('handleError', err)


                })
        },
        updateCalled({ commit, dispatch }, payload) {
            api.put('records/' + payload._id, payload)
                .then(res => {

                    console.log(res)
                    console.log("done")
                    dispatch('authenticate2')
                })
                .catch(() => {
                    // router.push({ name: "Register" })
                })
        },
        // getUsers({ commit, dispatch }) {
        //     api('users')
        //         .then(res => {
        //             commit('setUsers', res.data)

        //             // if (!res.data) {
        //             //     // router.push({ name: "Register" })
        //             // } else {
        //             //     // dispatch('getUserVaults', res.data.id)
        //             // }
        //         })
        //         .catch(() => {
        //             router.push({ name: "Register" })
        //         })
        // },
        //---------LOGIN/REGISTER/LOGOUT-----------//

        updateUser({ commit, dispatch }, user) {
            // var user2 = user

            delete user._id
            delete user.password
            // user.password = "test2"
            auth.put('updateuser', user)
                .then(res => {

                    // commit('setUser', res.data.data)
                    // router.push({ name: 'Home' })
                    dispatch('authenticate')

                })
                .catch(err => {
                    commit('handleError', err)

                    // router.push({ name: "Register" })
                })
        },

        updateUserPassword({ commit, dispatch }, user) {
            delete user._id
            auth.put('updateuser', user)
                .then(res => {

                    commit('setUser', res.data.data)
                    // router.push({ name: 'Home' })
                    dispatch('authenticate')

                })
                .catch(err => {
                    commit('handleError', err)

                    // router.push({ name: "Register" })
                })
        },
        userLogin({ commit, dispatch }, login) {
            auth.post('/login', login)
                .then(res => {

                    if (res.data.data.access === true) {
                        commit('setUser', res.data.data)
                        router.push({ name: 'Home' })
                        dispatch('authenticate')
                    }
                    else if (store.state.time === true) {
                        commit('setUser', res.data.data)
                        router.push({ name: 'Home' })
                        dispatch('authenticate')
                    }
                    else {
                        alert("Contact Manager to Login")
                        router.push({ name: "Register" })
                    }
                })
                .catch(err => {
                    commit('handleError', err)

                    router.push({ name: "Register" })
                })
        },
        userRegister({ commit, dispatch }, register) {
            auth.post('/register', register)
                .then(res => {
                    console.log(res)

                    commit('setUser', res.data)
                    router.push({ name: 'Home' })
                })
                .catch(err => {
                    commit('handleError', err)

                    router.push({ name: "Register" })
                })
        },
        authenticate({ commit, dispatch }) {
            auth('/authenticate')
                .then(res => {
                    if (!res.data.data) {
                        // router.push({ name: "Register" })
                    } else {
                        commit('setUser', res.data.data)
                    }
                })
                .catch(() => {
                    router.push({ name: "Register" })
                })
        },
        authenticate2({ commit, dispatch }) {
            auth('/authenticate')
                .then(res => {

                    dispatch('getUserRecords', res.data.data._id)

                })
                .catch(() => {
                    // router.push({ name: "Register" })
                })
        },
        authenticate3({ commit, dispatch }) {
            auth('/authenticate')
                .then(res => {

                    dispatch('getUserTransactions2', res.data.data._id)

                })
                .catch(() => {
                    // router.push({ name: "Register" })
                })
        },
        logout({ commit, dispatch }, user) {
            auth.delete('/logout', user)
                .then(res => {

                    router.push({ name: "Register" })
                })
                .catch(err => {
                    console.log(err)
                    res.status(401).send({ Error: err })
                })
        },
        //^^^^^^^^^^^^^^USER/REGISTER/LOGOUT^^^^^^^^^^^//

        handleError({ commit, dispatch }, err) {
            commit('handleError', err)
        }
    }
})
export default store