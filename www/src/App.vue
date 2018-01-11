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

  .logout-header {
    color: darkred
  }

  .logout-header:hover {
    color: crimson;
    text-decoration: underline;
    cursor: pointer;
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
</style>