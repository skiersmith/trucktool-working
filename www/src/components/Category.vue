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
        <button type="submit" class="btn btn-success btn-sm">add</button>
      </form>
    </div>

    <div class="row dalists">
      <div class="drawList col-sm-3" v-for="list in lists">
        <list class="list" :name="list.name" :description="list.description" :listId="list._id" :categoryId="category._id"></list>
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
          categoryId: this.$route.params.id
        },
        showAddListForm: false
      }
    },
    name: 'category',
    mounted() {
      this.$store.dispatch('getCategory', { categoryId: this.$route.params.id })
    },
    methods: {
      createList() {
        this.$store.dispatch('createList', { list: this.list })
        this.list = {
          categoryId: this.$route.params.id
        }
        this.toggleListForm()
      },
      toggleListForm() {
        
        this.showAddListForm = !this.showAddListForm
      }
    },
    computed: {
      category() {
        return this.$store.state.activeCategory
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
  .dalists {
    margin: 1rem;
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

  .categoryHeaderC {
    display: flex;
    justify-content: center
  }
</style>