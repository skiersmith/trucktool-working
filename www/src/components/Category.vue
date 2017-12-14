<template>
  <div class="category container-fluid">
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
        <i class="fa fa-trash fa-md delList" @click="removeList(list)"></i>
        <router-link class="router-link-text" :to="'/lists/'+list._id">{{list.name}}</router-link>
      </div>
    </div>

  </div>
</template>

<script>
  import list from './List'
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
   
    mounted() {
     
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
      }
    },
    computed: {
      category() {
        return this.$store.state.activeCategorys
      },
      lists() {
        return this.$store.state.activeLists
      }
    },
    components: {
      list
    }
  }
</script>

<style scoped>
  .router-link-text {
    text-decoration: none;
    color: rgb(0, 0, 0);
  }

  .dalists {
    margin: 1rem;
    /* background-color: grey; */
  }

  .category-description {
    color: rgb(233, 233, 233);
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
    color: rgb(235, 15, 15);
  }

  .delList:hover {
    color: rgb(255, 155, 155);
  }
</style>