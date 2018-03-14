<template>
  <div id="app">
    <!-- <error></error> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import Error from './components/Error'
  export default {
    name: 'app',
    components: {
      Error
    },
    mounted() {
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
    background: rgb(253, 251, 251);
    background-image: url(./assets/WebBackground1.png);
    background-size: 2300px
  }

  html {
    background: rgb(252, 250, 250);
    background-image: url(./assets/WebBackground1.png);
    background-size: 2300px
  }


  .spacer {
    height: 10rem;
  }

  .spacer1 {
    height: 2rem;
  }

  .spacer4 {
    height: 4rem;
  }





  .navCont-container {
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
  }

  .fixL {
    background-color: #6666668c;
    position: fixed;
    /* right: 5px; */
    top: 10px;
    padding: 7px;
    border-radius: 10px;
    left: 10px;
    width: 25rem;
    height: 10rem;

    /* font-size: 150% */
  }

  .supernavCont {
    right: 10px;
    position: fixed;
    top: 10px;
  }

  .nav-header {
    background-color: black;
    height: 8rem;
    width: 100vw;
    top: 0px;
    position: fixed;
    /* display: flex; */
    /* justify-content: space-around; */
  }

  .nav-header-container {
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
  }

  .RLwhite:hover {
    color: rgb(38, 151, 185);
    text-decoration: none;
  }
</style>