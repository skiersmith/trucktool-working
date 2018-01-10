<template>
  <div>
    <!-- the bootstrap navbar-->
    <nav class="navbar navbar-fixed-top navbar--color--ghost navbar--size--xl" data-startColor="navbar--color--ghost" data-startSize="navbar--size--xl"
      data-intoColor="navbar--color--secondary" data-intoSize="navbar--size--md">
      <div class="container">
        <div class="navbar-header">
          <router-link class="dashboard routerhome navbar-brand" :to="{name: 'Dashboard'}">
            <p class="organize-header">Organize</p>
          </router-link>
        </div>
        <router-link class="overview routerhome navbar-center" :to="{name: 'Overview'}">
          <p class="overview-header">Overview</p>
        </router-link>
        <div class="navbar-right navbar-text">
          <span @click="userLogout">
            <p class="logout-header">Logout</p>
          </span>
        </div>
      </div>
    </nav>
    <div class="category container-fluid">
      <router-link class="dashboard routerhome" :to="{name: 'Dashboard'}">
        <b>Home</b>
      </router-link>

      <div class="categoryHeaderC container">
        <div class="categoryheader">
          <h2>{{category.name}}</h2>
          <h4 v-if="category.description" class="category-description">Description: {{category.description}}</h4>
          <button class="btn-success" @click="toggleListForm">New List</button>
        </div>
      </div>
      <div class="createList" v-if="showAddListForm">
        <form @submit.prevent="createList">
          <input type="text" name="name" placeholder="name" v-model="list.name" required>
          <input type="text" name="description" placeholder="description" v-model="list.description">
          <button type="submit" class="btn btn-success btn-sm">Add</button>
        </form>
      </div>
      <div class="row dalists">
        <div class="drawList col-sm-3" v-for="list in lists">
          <router-link class="router-link-text listName" :to="{name: 'List', params: {listId: list._id, categoryId: list.categoryId}}">
            <span>{{list.name}}</span>
            <i class="fa fa-trash fa-md delList" @click="removeList(list)"></i>
          </router-link>
          <!-- "{ name: 'List', params: {categoryId: list.categoryId } } " -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import list from './List'
  export default {
    data() {
      return {
        list: {
          categoryId: this.categoryId,
          listId: this.listId
        },
        showAddListForm: false
      }
    },
    name: 'category',
    props: ['categoryId'],
    mounted() {
      console.log('wow')
      this.$store.dispatch('getCat', { categoryId: this.categoryId })
      this.$store.dispatch('getLists', { categoryId: this.categoryId })
    },
    methods: {
      createList() {
        this.list.categoryId = this.categoryId
        this.$store.dispatch('createList', { list: this.list })
        this.toggleListForm()
      },
      removeList(list) {
        this.$store.dispatch('removeList', { listId: list._id, categoryId: this.categoryId })

      },
      toggleListForm() {
        this.showAddListForm = !this.showAddListForm
      },
      userLogout() {
        this.$store.dispatch('logout', this.$store.state.user._id)
      }
    },
    computed: {
      category() {
        return this.$store.state.currentCat
      },
      categorys() {
        return this.$store.state.activeCategorys
      },
      lists() {
        return this.$store.state.activeLists
      }

    },
    components: {
      // list
    }
  }
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Lato:400,700,900");
  body {
    font-family: 'Lato', Arial, sans-serif;
    color: #6b6b6b;
    font-size: 17px;
    line-height: 1.6;
  }

  .hero {
    position: relative;
    height: 60vh;
    z-index: -2;
    background: url("https://unsplash.it/2000/800?image=563") center top/cover no-repeat;
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

  /* ===================================== */

  /* ===== THE INTERESTING STUFF NOW ===== */

  /* ===================================== */

  .navbar {
    border: none;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    /* --- navbar sizes --- */
    /* --- navbar colors --- */
  }

  .navbar-center {
    display: flex;
    justify-content: center;
  }

  .navbar-brand {
    font-size: 2.25rem;
    font-weight: 900;
    color: #4b4b4b;
  }

  .navbar--size--xl {
    padding: 1px 0;
  }

  .navbar--size--lg {
    padding: 2rem 0;
  }

  .navbar--size--md {
    padding: 1rem 0;
  }

  .navbar--size--sm {
    padding: 0;
  }

  .navbar--color--white {
    background: #fff;
  }

  .navbar--color--primary {
    background: #37ca7e;
  }

  .navbar--color--secondary {
    background: #43a6dd;
  }

  .navbar--color--ghost {
    background: rgba(0, 0, 0, 0.2);
  }

  .navbar--color--ghost .navbar-brand,
  .navbar--color--ghost .navbar-text,
  .navbar--color--ghost a {
    color: #fff;
  }


  /* Normal stuff below */

  .routerhome {
    color: black;
  }

  .router-link-text {
    text-decoration: none;
    color: rgb(255, 255, 255);
  }

  .listName {
    background-color: rgb(89, 89, 231);
    padding: 1rem;
    border-radius: 5px;
  }

  .listName:hover {
    background-color: rgba(101, 101, 230, 0.877)
  }

  .dalists {
    margin: 1rem;
    /* background-color: grey; */
  }

  .category-description {
    color: rgb(0, 0, 0);
  }

  .categoryheader {
    background-color: rgb(104, 142, 255);
    border-radius: 15px;
    color: rgb(250, 248, 248);
    display: inline block;
    padding: 1rem;
  }

  .drawlist {
    background-color: white;
  }

  .categoryHeaderC {
    display: flex;
    justify-content: center
  }

  .delList {
    float: right;
    color: rgb(180, 14, 14);

  }

  .delList:hover {
    color: rgb(255, 155, 155);
  }
</style>