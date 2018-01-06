<template>
    <div>
        <!-- <div class="list-header">
        </div>
        <h3 class="list-text-color">{{list.name}}</h3>
        <div v-if="description">
            <p class="list-text-color">Description: {{description}}</p>
        </div>
        <div class="list-body">
        </div> -->
        <button class="btn-success btn-xs margin" @click="toggleProductForm">New Product</button>
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
       <!-- <div v-for="product in products"><p>hi</p></div> -->
        <div class="list-footer row">
            <div class="col-sm-offset-2" v-for="product in products.all">
                <!-- <product class="the-product" ></product> -->
                <!-- :product="product" -->
                {{product.name}}
                <!-- <p>hi</p> -->
            </div>
        </div>
    </div>
</template>
<script>
    import product from './Product'
    export default {
        data() {
            return {
                
                product: {
                    
                },
                showAddProductForm: false,
                newListId: document.getElementById('productId')
            }
        },
        name: 'product',
        props: ['name', 'description', 'productId', 'id'],
        mounted() {
            this.$store.dispatch('getProducts')
        },
        methods: {
            createProduct() {
                // this.product.order = this.$store.state.activeProducts[this.listId].length
                this.$store.dispatch('createProduct', { product: this.product })
                this.product = {
                }
                this.toggleProductForm()
            },
            toggleProductForm() {
                this.showAddProductForm = !this.showAddProductForm
            }
        },
        computed: {
            products() {
                
                debugger
                return this.$store.state.allTagProducts
            }
        },
        components: {
            // product
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
        display: flex;
        justify-content: space-around;
    }

    .margin {
        margin: 1rem;
    }

    .the-product {
        margin-top: 0.5rem;

        /* width: 50rem; */
    }

    /* .product {
            padding-top: 1rem;
            padding-bottom: 1rem;
        } */
</style>