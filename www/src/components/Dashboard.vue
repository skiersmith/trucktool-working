<template>
  <div>
    <!-- #region -->

    <!-- the bootstrap navbar-->
    <!-- <nav class="navbar navbar-fixed-top navbar--color--ghost navbar--size--xl" data-startColor="navbar--color--ghost" data-startSize="navbar--size--xl"
      data-intoColor="navbar--color--secondary" data-intoSize="navbar--size--md">
      <div class="nav-container">
      <div class="navCont-container"><p>yo</p></div>
      <div class="navCont-container"><p>yo</p></div>
      <div class="navCont-container"><p>yo</p></div>
        <div class="navbar-header">
          <router-link class="dashboard routerhome navbar-brand" :to="{name: 'Dashboard'}">
            <p class="organize-header">Organize</p>
          </router-link>
        </div>
        <div class="logout-item">
          <div class="navbar-right navbar-text">
            <span @click="userLogout">
              <p class="RL-header">Logout</p>
            </span>
          </div>
        </div>
      </div>
    </nav> -->

    <!-- #endregion -->

    <div class="nav-header">
      <div class="nav-header-container">

        <div>
          <div>
            <router-link class="RLwhite headDown3" :to="{name: 'Dashboard'}">
              <h1>Organize</h1>
            </router-link>
          </div>
        </div>
        <div>
          <div>
            <router-link class="headDown2 RL-header Overview-header font" :to="{name: 'Overview'}">
              <b>Overview</b>
            </router-link>
          </div>
        </div>
        <div>
          <div class="headDown">
            <b @click="userLogout" class="logout-header RL-header">Logout</b>
          </div>
        </div>
      </div>
    </div>


    <!-- <div class="fixL">
      <router-link class="routerhome" :to="{name: 'Dashboard'}">
        <h1 class="organize-header">Organize</h1>
      </router-link>
    </div>

    <div class="supernavCont top">
      <div class="navCont">
        <div class="spacer1"></div>
        <div>
          <router-link class="overview routerhome" :to="{name: 'Overview'}">
            <b class="overview-header">Overview</b>
          </router-link>
        </div>
        <div class="spacer4"></div>
        <div>
          <b @click="userLogout" class="RL-header">Logout</b>
        </div>
      </div>
    </div> -->
    <div class="spacer"></div>
    <!-- <h1>Organize Title Here</h1> -->
    <!-- <img class="logo" src="../assets/organizzlee.png"> -->
    <!-- <div class="overview-container">
      <div class="overview-container">
        <div class="overview2">
          <router-link class="overview router-link-text" :to="{name: 'Overview'}">
            <b>Overview</b>
          </router-link>
        </div>
      </div> -->
    <!-- <div class="overview-container">
        <div class="overview2">
          <router-link class="overview router-link-text" :to="{name: 'All'}">
            <b>Products</b>
          </router-link>
        </div>
      </div> -->
    <!-- <div class="overview-container">
        <div class="overview3">
          <span class="textWhite" @click="userLogout">
            <p>Logout</p>
          </span>
        </div>
      </div>
    </div> -->

    <div class="categorysHeader container">
      <h1>{{user.name}}'s Categories</h1>
      <div class="header container-fluid">

        <button v-if="addCatButt" @click="toggleCatButt" class="btn-xs btn-success">New Category</button>
        <button v-if="!addCatButt" @click="toggleCatButt" class="btn-danger margins" type="submit">Cancel</button>

        <button v-if="!deleteCat && addCatButt" class="btn-xs btn-danger" @click="toggleDeleteCat">Delete Category</button>
        <button v-if="deleteCat && addCatButt" class="btn-xs btn-danger" @click="toggleDeleteCat">Cancel</button>
      </div>
    </div>
    <div class="margin">
      <div v-if="!addCatButt" class="categoryForm container">
        <div class="margin">
          <form @submit.prevent="createCategory">
            <input size="30" placeholder="name" type="text" name="name" v-model="category.name" required>
            <input size="30" placeholder="description" type="text" name="description" v-model="category.description">
            <div class="blacktext">
              <button class="btn-success margins" type="submit">Add Category</button>
            </div>
          </form>
        </div>
      </div>
      <div class="categoryList row">

        <div class="col-sm-3" v-for="category in categorys">
          <div class="category flex">
            <router-link class="router-link-text" :to="'/categorys/'+category._id">
              <p v-if="!deleteCat" class="categoryName">
                {{category.name}}
              </p>
            </router-link>
            <div v-if="deleteCat">
              <button @click="removeCategory(category)" class="btn-danger btn-xs">Delete</button>
            </div>
            <!-- <i v-if="!deleteCat" class="fa fa-window-close fa-md delList remove" @click="toggleDeleteCat"></i>
          <i v-if="deleteCat" class="fa fa-arrow-circle-o-left fa-md delList remove" @click="toggleDeleteCat"></i> -->
            <!-- <span v-if="!deleteCat" @click="toggleDeleteCat" class="remove">X</span> -->
            <!-- <span v-if="deleteCat" @click="toggleDeleteCat" class="remove glyphicon glyphicon-arrow-left" aria-hidden="true"></span> -->
          </div>
        </div>

      </div>
    </div>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        register: {},
        login: {},
        category: {},
        // showCategoryForm: false,
        deleteCat: false,
        addCatButt: true
      }
    },

    name: 'categorys',
    mounted() {
      this.$store.dispatch('getCategorys')

    },
    computed: {
      navbar() {
        // grabbing the class names from the data attributes
        var navBar = $('.navbar'),
          data = navBar.data();

        // booleans used to tame the scroll event listening a little..
        var scrolling = false,
          scrolledPast = false;

        // transition Into
        function switchInto() {
          // update `scrolledPast` bool
          scrolledPast = true;
          // add/remove CSS classes
          navBar.removeClass(data.startcolor);
          navBar.removeClass(data.startsize);
          navBar.addClass(data.intocolor);
          navBar.addClass(data.intosize);
          console.log('into transition triggered!');
        };

        // transition Start
        function switchStart() {
          // update `scrolledPast` bool
          scrolledPast = false;
          // add/remove CSS classes
          navBar.addClass(data.startcolor);
          navBar.addClass(data.startsize);
          navBar.removeClass(data.intocolor);
          navBar.removeClass(data.intosize);
          console.log('start transition triggered!');
        }

        // set `scrolling` to true when user scrolls
        $(window).scroll(function () {
          return scrolling = true;
        });

        setInterval(function () {
          // when `scrolling` becomes true... 
          if (scrolling) {
            // set it back to false
            scrolling = false;
            // check scroll position
            if ($(window).scrollTop() > 100) {
              // user has scrolled > 100px from top since last check
              if (!scrolledPast) {
                switchInto();
              }
            } else {
              // user has scrolled back <= 100px from top since last check
              if (scrolledPast) {
                switchStart();
              }
            }
          }
          // take a breath.. hold event listener from firing for 100ms
        }, 100);
      },
      categorys() {
        return this.$store.state.activeCategorys

      },
      user() {
        return this.$store.state.user
      }
    },
    methods: {

      createCategory() {
        this.$store.dispatch('createCategory', this.category)
        this.category = {}
        this.toggleCategoryForm()
      },
      userLogout() {
        this.$store.dispatch('logout', this.$store.state.user._id)
      },
      removeCategory(category) {
        this.$store.dispatch('removeCategory', category)
      },
      // toggleCategoryForm() {
      //   this.showCategoryForm = !this.showCategoryForm
      // },
      toggleDeleteCat() {
        this.deleteCat = !this.deleteCat
      },
      toggleCatButt() {
        this.addCatButt = !this.addCatButt
      }

    }
  }
</script>

<style scoped>
  container {
    display: flex;
    justify-content: center;
  }

  organize-item {
    justify-content: center;
  }

  overview-item {
    margin: 0px 0px 0px;
  }

  logout-item {
    margin: 0px 0px 0px;
    padding-right: 0px;
  }



  @import url("https://fonts.googleapis.com/css?family=Lato:400,700,900");
  body {
    font-family: 'Lato', Arial, sans-serif;
    color: #6b6b6b;
    font-size: 17px;
    line-height: 1.6;
  }
.headDown3{
  position: relative;
  top: -1rem;

}
  .hero {
    position: relative;
    height: 60vh;
    z-index: -2;
    background: url("https://unsplash.it/2000/800?image=563") center top/cover no-repeat;
  }

  .top {
    top: 10px;
  }

  .overlay {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .main-content {
    background: #f2f2f2;
  }

  section {
    background: #fff;
    padding: 2rem 0 7rem;
  }

  section:nth-child(even) {
    background: #f5f5f5;
  }

  h2,
  h3 {
    padding: 1rem 0 0.75rem;
    font-weight: 700;
    color: #4b4b4b;
  }

  

  .router-link-text {
    text-decoration: none;
    color: rgb(255, 255, 255);
  }

  .logout {
    background-color: rgb(240, 158, 158);
  }

  .margin {
    margin: 1rem;
  }

  .header {
    display: flex;
    justify-content: space-between
  }

  .font {
    font-size: 150%;
    font-weight: bold;
  }

  .font-small {
    font-size: 50%;
  }

  .categoryName:hover {
    color: rgb(232, 240, 158);
  }

  .categoryForm {
    display: flex;
    max-width: 60rem;
    justify-content: center;
    background-color: rgba(31, 30, 30, 0.816);
    color: rgb(7, 7, 7);
    border-radius: 25px;
    padding: 1rem;

  }

  .textWhite {
    color: white
  }

  .overview-container {
    display: flex;
    justify-content: center;
  }

  .overview2:hover {
    background-color: rgba(27, 40, 63, 0.616);
    cursor: pointer;
  }

  .overview2 {
    background-color: rgba(27, 40, 63, 0.816);
    width: 10rem;
    border-radius: 10px;
    margin: 1rem;
  }

  .overview3:hover {
    background-color: rgba(187, 82, 82, 0.616);
    cursor: pointer;
  }

  .overview3 {
    background-color: rgba(208, 70, 70, 0.816);
    width: 10rem;
    border-radius: 10px;
    margin: 1rem;
  }

  .categoryHeader {
    display: flex;
    justify-content: flex-start;

  }

  .categoryList {
    margin: 5rem;
    /* background-color: rgba(8, 8, 8, 0.452); */
  }

  .category-categoryer {
    margin: 2rem;
  }

  .categorysHeader {
    background-color: rgba(31, 30, 30, 0.816);
    width: 60rem;
    border-radius: 15px;
    padding: 1.5rem;
    color: rgb(255, 254, 254);
  }

  .remove {
    color: rgba(143, 21, 21, 0.863);
    cursor: pointer;
    position: absolute;
    top: 20%;
    right: 15%;
  }

  .remove:hover {
    color: rgb(252, 135, 135);
    cursor: pointer;
  }

  a {
    display: inline-block;
    margin: 1rem;
  }

  .blacktext {
    color: black;
  }

  .margins {
    margin: .5rem;
  }

  .category:hover {
    background-color: rgb(207, 96, 68);
    cursor: pointer;
  }

  .category {
    color: white;
    font-weight: bold;
    font-size: 2rem;
    height: 8rem;
    margin: 2rem;
    border-radius: 5px;
    background: rgba(78, 54, 32, 1);
    display: flex;
    justify-content: center;
    align-items: center
  }

  .logo {

    height: 25rem;
  }
</style>