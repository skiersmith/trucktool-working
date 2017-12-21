<template>
  <div>
<<<<<<< HEAD
    <h1>{{user.name}}'s Categorys</h1>
    <div class="header container-fluid">
      <button @click="toggleCategoryForm" class="btn-success">New Category</button>
      <button class="btn-danger" @click="userLogout">Logout</button>
=======
<<<<<<< HEAD
    <!-- <h1>Organize Title Here</h1> -->
    <!-- <img class="logo" src="../assets/organizzlee.png"> -->
    <div class="overview-container">
      <div class="overview-container">
        <div class="overview2">
          <router-link class="overview router-link-text" :to="{name: 'Overview'}">
            <b>Overview</b>
          </router-link>
        </div>
      </div>
      <div class="overview-container">
        <div class="overview2">
          <b>Products</b>
        </div>
      </div>
      <div class="overview-container">
        <div class="overview3">
          <span class="textWhite" @click="userLogout">
            <p>Logout</p>
          </span>
        </div>
      </div>
    </div>
    <div class="categorysHeader container">
      <h1>{{user.name}}'s Categories</h1>
      <div class="header container-fluid">

        <button v-if="addCatButt" @click="toggleCatButt" class="btn-xs btn-success">New Category</button>
        <button v-if="!addCatButt" @click="toggleCatButt" class="btn-danger margins" type="submit">Cancel</button>

        <button v-if="!deleteCat && addCatButt" class="btn-xs btn-danger" @click="toggleDeleteCat">Delete</button>
        <button v-if="deleteCat && addCatButt" class="btn-xs btn-danger" @click="toggleDeleteCat">Cancel</button>
      </div>
=======
      <h1>{{user.name}}'s Categorys</h1>
      <div class="header container-fluid">
        <button @click="toggleCategoryForm" class="btn-success">New Category</button>
        <button class="btn-danger" @click="userLogout">Logout</button>
      </div>
      <router-link class="router-link-text" :to="{name: 'Overview'}">
        <button class="overview btn-info">Overview</button>
      </router-link>
      <router-link class="router-link-text" :to="{name: 'Product'}">
        <button class="product btn-info">All Products</button>
      </router-link>
>>>>>>> 0e1c55ca36dc7f1eb1164835d43752125f0d306e
>>>>>>> 5ddf47f96d1bed1938afe6354d7f8d23a7a9828c
    </div>
    <router-link class="router-link-text" :to="{name: 'Overview'}">
      <button class="overview btn-info">Overview</button>
    </router-link>
    <router-link class="router-link-text" :to="{name: 'All'}">
      <button class="all btn-info">All Products</button>
    </router-link>
  </div>

  <div class="categoryList row">

<<<<<<< HEAD
    <div class="col-sm-3" v-for="category in categorys">
      <div class="category flex">
        <router-link class="router-link-text" :to="'/categorys/'+category._id">
          <p class="categoryName">
            {{category.name}}
          </p>
        </router-link>
        <span class="remove" @click="removeCategory(category)">x</span>
=======
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
>>>>>>> 5ddf47f96d1bed1938afe6354d7f8d23a7a9828c
      </div>
    </div>

<<<<<<< HEAD
    <div v-if="showCategoryForm" class="categoryForm container">
=======
    </div>
    <div v-if="!addCatButt" class="categoryForm container">
>>>>>>> 5ddf47f96d1bed1938afe6354d7f8d23a7a9828c
      <form @submit.prevent="createCategory">
        <input class="form-control" placeholder="name" type="text" name="name" v-model="category.name" required>
        <input class="form-control" placeholder="description" type="text" name="description" v-model="category.description">
        <div class="blacktext">
          <button class="btn-success margins" type="submit">Add Category</button>
        </div>
      </form>
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
  .router-link-text {
    text-decoration: none;
    color: white;
  }

  .logout {
    background-color: rgb(240, 158, 158);
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
    color: white;
    border-radius: 25px;
    padding: 1rem;

  }

<<<<<<< HEAD
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
=======
  .overview {}
>>>>>>> 0e1c55ca36dc7f1eb1164835d43752125f0d306e

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