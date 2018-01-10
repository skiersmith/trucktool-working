<template>
    <div>
        <router-link class="dashboard routerhome" :to="{name: 'Dashboard'}">
            <b>Home</b>
        </router-link>

        <div class="listHeaderC container">
            <div class="listheader">
                <h2>{{list.name}}</h2>
                <h4 v-if="list.description" class="category-description">Description: {{list.description}}</h4>
                <button class="btn-success btn-xs margin" @click="toggleProductForm">New Product</button>
            </div>
        </div>

        <!-- <div class="list-body">
            <div class="productt">
            </div>
            <div class="list-header">
                <div v-if="description">
                        <h3 class="list-text-color">{{list.name}}</h3>
                                <p class="list-text-color">Description: {{description}}</p>
                            </div>
                        </div> -->

        <div class="create-product" v-if="showAddProductForm">
            <form @submit.prevent="createProduct">
                <div class="form-group">
                    <input class="inline" size="15" type="text" name="name" placeholder="name" v-model="product.name" required>
                    <input class="inline" size="15" type="text" name="quantity" placeholder="quantity" v-model="product.quantity" required>
                    <input class="inline" size="15" type="text" name="unitPrice" placeholder="unitPrice" v-model="product.unitPrice" required>
                    <input class="inline" size="15" type="text" name="resalePrice" placeholder="resalePrice" v-model="product.resalePrice">
                    <input class="inline" size="15" type="text" name="sku" placeholder="sku" v-model="product.sku">
                    <input class="inline" size="15" type="text" name="tag" placeholder="tag" v-model="product.tag">
                    <button type="submit" class="btn-xs btn-success">Add</button>
                </div>
            </form>
        </div>
        <div class="row">
            <div class="col-lg-3 col-sm-6 " v-for="product in products">
                <product class="the-product" :product="product"></product>
            </div>
        </div>
    </div>

</template>
<script>
    import product from './Product'
    export default {
        data() {
            return {
                // list: {
                //     name: this.name,

                // },

                product: {
                    listId: this.listId,
                    categoryId: this.categoryId,
                },
                showAddProductForm: false,
                newListId: document.getElementById('listId')
            }
        },
        name: 'list',
        props: ['name', 'description', 'listId', 'categoryId', 'productId', 'id'],
        mounted() {
        
            this.$store.dispatch('getCurrentList', { listId: this.listId})
            this.$store.dispatch('getProductsByList', { listId: this.product.listId, categoryId: this.categoryId })
            console.log(this.list)
        },
        methods: {

            createProduct() {
                // this.product.order = this.$store.state.activeProducts[this.listId].length
                this.$store.dispatch('createProduct', { product: this.product })
                this.product = {
                    listId: this.product.listId,
                    categoryId: this.categoryId
                }
                this.toggleProductForm()
            },
            toggleProductForm() {
                this.showAddProductForm = !this.showAddProductForm
            }
        },
       
        computed: {
            products() {

                return this.$store.state.activeProducts[this.listId]
            },
            list() {
                return this.$store.state.currentList
            }
        },
        components: {
            product,
        }
    }
</script>
<style>
    .routerhome {
        color: black;
    }

    .list {
        border-radius: 5px;
        height: 600px;
        margin-top: 1%;
        overflow: auto;
        background: rgb(104, 142, 255);
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    .inline {
        display: inline;
    }

    .list-text-color {
        color: rgb(3, 3, 3);
    }

    .list-header {
        padding: 1rem;
    }

    .list-footer {
        /* display: ; */
        /* justify-content: space-around; */
    }

    .margin {
        margin: 1rem;
    }

    .the-product {
        margin-top: 0.5rem;

        /* width: 50rem; */
    }

    .listHeaderC {
        display: flex;
        justify-content: center
    }
    .listheader {
    background-color: rgb(104, 142, 255);
    border-radius: 15px;
    color: rgb(250, 248, 248);
    display: inline block;
    padding: 1rem;
  }

    /* .product {
        padding-top: 1rem;
        padding-bottom: 1rem;
    } */
</style>