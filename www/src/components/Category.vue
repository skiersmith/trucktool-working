<template>
  <div>
    <div class="nav-header">
      <div class="nav-header-container">
        <div>
          <div>
            <router-link class="RLwhite headDown5" :to="{name: 'Dashboard'}">
              <h1 class="organize-header">Organize</h1>
            </router-link>
          </div>
        </div>
        <div>
          <div>
            <router-link class="headDown4 RL-header Overview-header font" :to="{name: 'Overview'}">
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
    <div class="spacer"></div>
    <div class="categoryHeaderC container">
      <div class="categoryheader">
        <h2 class="white">{{category.name}}</h2>
        <h4 v-if="category.description" class="white">Description: {{category.description}}</h4>
        <button class="btn-success" @click="toggleListForm">New List</button>
        <button v-if="!deleteList" class="btn-danger" @click="toggleDeleteList">Delete</button>
        <button v-else class="btn-danger" @click="toggleDeleteList">Cancel</button>
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
      <div class="listName col-sm-3" v-for="list in lists">
        <router-link class="router-link-text " :to="{name: 'List', params: {listId: list._id, categoryId: list.categoryId}}">
          <h3>{{list.name}}</h3>
        </router-link>
        <div v-if="deleteList">
          <button @click="removeList(list)" class="btn-danger btn-xs">Delete</button>
        </div>
        <!-- "{ name: 'List', params: {categoryId: list.categoryId } } " -->
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
        showAddListForm: false,
        deleteList: false
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
      toggleDeleteList() {
        this.deleteList = !this.deleteList
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

  headDown5 {
    position: relative;
    top: 2rem;
    font-size: 120%
  }

  .headDown4 {
    position: relative;
    top: 3rem;
    font-size: 150%
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


  .white {
    color: white;

  }

  .routerhome {
    color: black;
  }

  .router-link-text {
    text-decoration: none;
    color: rgb(8, 8, 8);
  }

  .listName {
    /* background-color: rgb(89, 89, 231); */
    padding: 1rem;
    border-radius: 5px;
    background-color: rgba(250, 250, 250, 0.733);
    color: black;
    margin: 1rem;
    width: 30rem;
    border-style: solid;
    border-color: black;
    border-width: 3px;
    border-radius: 10px;

  }

  .listName:hover {
    background-color: rgba(101, 101, 230, 0.877)
  }

  .dalists {
    margin: 1rem;
    /* background-color: grey; */
  }

  .categoryheader {
    background-color: rgba(31, 30, 30, 0.816);
    width: 60rem;
    border-radius: 15px;
    padding: 1.5rem;
    color: rgb(255, 254, 254);
  }
  /* {
    background-color: rgba(31, 30, 30, 0.816);
    border-radius: 15px;
    color: rgb(250, 248, 248);
    display: inline block;
    padding: 1rem;
    width: 50rem;
  } */

  .drawlist {
    background-color: white;
  }

  .categoryHeaderC {
    display: flex;
    justify-content: center;
  }

  .delList {
    /* float: right; */
    color: rgb(180, 14, 14);

  }

  .delList:hover {
    color: rgb(255, 155, 155);
  }
</style>