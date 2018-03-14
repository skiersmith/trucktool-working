<template>
  <div id="app">

    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    method: {
      userLogout() {
        this.$store.dispatch('logout', this.$store.state.user._id)
      },
    },
    computed: {
      user() {
        console.log(this.$store.state.user)
        return this.$store.state.user
      },
    },
    mounted(){
      this.$store.dispatch('authenticate')
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .nav-header {
    background-color: rgb(216, 103, 103);
    height: 7rem;
    width: 100vw;
    top: 0px;
    position: fixed;
    left: 0px;
    z-index: 2;
    /* display: flex; */
    /* justify-content: space-around; */
  }

  .RLwhite {
    color: white;
  }
  .RLwhite:hover {
    color: rgb(38, 151, 185);
    text-decoration: none;
  }
  .spacer10 {
    height: 10rem;
  }

  .spacer1 {
    height: 2rem;
  }

  .spacer4 {
    height: 4rem;
  }

  .nav-header-container {
    display: flex;
    align-content: center;
  }


  .RL-header {
    color: rgb(255, 251, 251)
  }

  .Overview-header:hover {
    color: rgb(37, 220, 20);
    text-decoration: none;
    cursor: pointer;
  }

  .logout-header:hover:hover {
    color: crimson;
    text-decoration: none;
    cursor: pointer;
  }

  .logout-header {
    font-size: 1.9rem;
  }

  .navCont {
    background-color: #6b6b6b8c;
    height: 14rem;
    width: 9rem;
    padding: 5px;
    border-radius: 10px;
    justify-content: space-around;
  }


  .mainVault {
    background-color: rgb(196, 231, 255);

  }

  .mainDiv {
    /* background-color: rgb(252, 243, 232); */
    /* height: 20rem; */
    width: 100vw;
    /* margin: 1rem; */
    padding: 1rem;
    /* display: flex;
    align-content: space-around; */
    /* border-radius: 3px; */
    /* border-bottom-style s: solid; */
    /* height: 6rem; */
  }
  .mainDiv2 {
    /* background-color: rgb(252, 243, 232); */
    /* height: 20rem; */
    /* width: 50vw; */
    /* margin: 1rem; */
    /* padding: 1rem; */
    /* display: flex;
    align-content: space-around; */
    /* border-radius: 3px; */
    /* border-bottom-style: solid; */
    /* height: 6rem; */
    color: black;
  }

  .mainDiv:hover {
    background-color: burlywood;
  }

  .keepStat-Container {
    display: flex;
    justify-content: space-around;
  }

  .headDown {
    position: relative;
    top: 3rem;

  }

  .headDown2 {
    position: relative;
    top: 1.8rem;
  }

  /* .headDown3 {
    position: relative;
    top: 0.5rem;
  } */

  .font {
    /* font-size: 10%; */
  }

  .RLwhite {
    color: white;
    justify-content: space-around
  }
  .keepImg{
    max-width: 250px;
    max-height: 150px;
  }
</style>