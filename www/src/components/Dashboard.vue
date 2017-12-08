<template>
  <div>
    <div class="categorysHeader container">
      <h1>{{user.name}}'s Categorys</h1>
      <div class="header container-fluid">
        
        <button @click="toggleCategoryForm" class="btn-success">New Category</button>
        <button class="btn-danger" @click="userLogout">Logout</button>
      </div>
    </div>
    <div class="categoryList row">

      <div class="col-sm-3" v-for="category in categorys">
        <div class="category flex">
          <router-link class="router-link-text" :to="'/categorys/'+category._id">
            <p class="categoryName">
              {{category.name}}
            </p>
          </router-link>
          <span class="remove" @click="removeCategory(category)">x</span>
        </div>
      </div>

      <div v-if="showCategoryForm" class="categoryForm container">
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
        showCategoryForm: false
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
      toggleCategoryForm() {
        this.showCategoryForm = !this.showCategoryForm
      }
    }
  }
</script>

<style scoped>
  .router-link-text {
    text-decoration: none;
    color: white;
  }

  .header {
    display: flex;
    justify-content: space-between
  }

  .font {
    font-size: 150%;
    font-weight: bold;
  }

  .categoryName:hover {
    color: rgb(232, 240, 158);
  }

  .categoryForm {
    display: flex;
    max-width: 60rem;
    justify-content: center;
    background-color: rgba(31, 30, 30, 0.575);
    color: white;
    border-radius: 25px;
    padding: 1rem;

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
    background-color: rgb(104, 142, 255);
    width: 30rem;
    border-radius: 25px;
    padding: 1.5rem;
    color: white;
  }

  .remove {
    color: red;
    cursor: pointer;
    position: absolute;
    top: 10%;
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

  .category {
    color: white;
    font-weight: bold;
    font-size: 2rem;
    color: white;
    height: 125px;
    margin: 2rem;
    border-radius: 5px;
    background: rgb(104, 142, 255);
    display: flex;
    justify-content: center;
    align-items: center
  }
</style>