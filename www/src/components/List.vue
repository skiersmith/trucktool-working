<template>
<<<<<<< HEAD
        <div :id="listId">

            <div class="list-header">
         
            </div>
            <div class="list-body">
                <h3 class="list-text-color">{{name}}</h3>
                <div v-if="description">
                    <p class="list-text-color">Description: {{description}}</p>
                </div>
                <button class="btn-success btn-xs margin" @click="toggleProductForm">New Product</button>
                <div class="create-product" v-if="showAddProductForm">
                    <form @submit.prevent="createProduct">
                        <div class="form-group">
                            <input class="inline" size="15" type="text" name="name" placeholder="name" v-model="product.name" required>
                            <input class="inline" size="15" type="text" name="quantity" placeholder="quantity" v-model="product.quantity" required>
                            <input class="inline" size="15" type="text" name="unitPrice" placeholder="unitPrice" v-model="product.unitPrice" required>
                            <input class="inline" size="15" type="text" name="resalePrice" placeholder="resalePrice" v-model="product.resalePrice" >
                            <input class="inline" size="15" type="text" name="sku" placeholder="sku" v-model="product.sku" >
                            <button type="submit" class="btn-xs btn-success">Add</button>
                        </div>
                    </form>
                </div>
=======
    <div :id="listId">
>>>>>>> 046345211a33d97a7064ba2c5f5de194b97b4f31

        <div class="list-header">
            <i class="fa fa-trash fa-md" @click="removeList(listId)"></i>
        </div>
        <div class="list-body">
            <h3 class="list-text-color">{{name}}</h3>
            <div v-if="description">
                <p class="list-text-color">Description: {{description}}</p>
            </div>
<<<<<<< HEAD
            <div class="list-footer">
                <div class="the-product" v-for="product in products">
                    <product :product="product"></product>
                </div>
=======
            <button class="btn-success btn-xs margin" @click="toggleProductForm">New Product</button>
            <div class="create-product" v-if="showAddProductForm">
                <form @submit.prevent="createProduct">
                    <div class="form-group">
                        <input class="inline" size="15" type="text" name="name" placeholder="name" v-model="product.name" required>
                        <input class="inline" size="15" type="text" name="quantity" placeholder="quantity" v-model="product.quantity" required>
                        <input class="inline" size="15" type="text" name="unitPrice" placeholder="unitPrice" v-model="product.unitPrice" required>
                        <button type="submit" class="btn-xs btn-success">Add</button>
                    </div>
                </form>
>>>>>>> 046345211a33d97a7064ba2c5f5de194b97b4f31
            </div>

        </div>
        <div class="list-footer">
            <div class="the-product" v-for="product in products">
                <product :product="product" :listId="listId" :newListId="newListId" :productId="productId"></product>
            </div>
        </div>

    </div>
</template>

<script>
    import product from './product'
    export default {
        data() {
            return {
                list: {},

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
            this.$store.dispatch('getProducts', { listId: this.product.listId, categoryId: this.categoryId })
        },
        methods: {
            removeList(listId) {
                this.$store.dispatch('removeList', { listId: listId, categoryId: this.categoryId })
            },
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
            lists() {
                return this.$store.state.activeLists
            }
        },
        components: {
            product,


        }

    }

</script>

<style>
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

    .fa-trash {
        float: right;
        color: rgb(235, 15, 15);
    }

    .fa-trash:hover {
        color: rgb(255, 155, 155);
    }

    .inline {
        display: inline;
    }

    .list-text-color {
        color: white;
    }

    .list-header {
        padding: 1rem;
    }

    .margin {
        margin: 1rem;
    }

    .the-product {
        margin-top: 0.5rem;
    }
</style>