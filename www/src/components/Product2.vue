<template>
    <div>
        <div v-if="update">
            <div class="prod-container" v-if="!other">
                <p> Name: {{product.name}}</p>
                <p>ID: {{product._id}}</p>
                <p>Price: {{product.resalePrice}}</p>
                <p>Quantity: {{product.quantity}}</p>
            </div>
            <div class="prod-container" v-if="other">
                <p> Name: {{product.name}}</p>
                <p>tag: {{product.tag}}</p>
                <p>Sku: {{product.sku}}</p>
                <p>ListId: {{product.ListId}}</p>
            </div>
        </div>
        <div class="margin padding" v-if="!update">
            <p> Name: {{product.name}}</p>
            <form @submit.prevent="updateProduct(this._id)">
                <div class="form-group">
                    <label for="name">name</label>
                    <input class="inline" size="15" type="text" name="name" placeholder="name" v-model="product.name">
                    <label for="name">name</label>
                    <input class="inline" size="15" type="text" name="quantity" placeholder="quantity" v-model="product.quantity">
                    <label for="name">name</label>
                    <input class="inline" size="15" type="text" name="unitPrice" placeholder="unitPrice" v-model="product.unitPrice">
                    <label for="name">name</label>
                    <input class="inline" size="15" type="text" name="resalePrice" placeholder="resalePrice" v-model="product.resalePrice">
                    <label for="name">name</label>
                    <input class="inline" size="15" type="text" name="sku" placeholder="sku" v-model="product.sku">
                    <label for="name">name</label>
                    <input class="inline" size="15" type="text" name="tag" placeholder="tag" v-model="product.tag">
                    <label for="name">name</label>
                    <input class="inline" size="15" type="text" name="id" placeholder="id" v-model="product._id">
                    <button type="submit" class="btn-xs btn-success">Update</button>

                </div>
            </form>
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



                // showEdit: false,
                other: false,
                update: true
            }
        },
        name: 'product2',
        props: ['name', 'description', 'productId', 'id'],
        mounted() {
            this.$store.dispatch('getProducts')
        },
        methods: {
            createProduct() {
                // this.product.order = this.$store.state.activeProducts[this.listId].length
                this.$store.dispatch('createProduct', { product: this.product, productId: this.product._id })
                // this.product = {
                // }
                this.toggleProductForm()
            },
            toggleProductForm() {
                this.showAddProductForm = !this.showAddProductForm
            },
            toggleEdit() {
                this.showEdit = !this.showEdit

            },
            toggleOther() {
                this.other = !this.other
            },
            toggleUpdate() {
                this.update = !this.update
            },
            updateProduct() {
                
                this.$store.dispatch('updateProduct', { product: this.product, productId: this.product.product_id })
                // { productId: this.product._id}
            }
        },
        computed: {
            products() {
                return this.$store.state.allTagProducts
            },
        }

    }
</script>
<style>
    .fa-edit:hover {
        color: #888;
    }

    .list {
        border-radius: 5px;
        height: 600px;
        margin-top: 1%;
        overflow: auto;
        background: rgb(104, 142, 255);
    }

    .oos {
        background-color: firebrick;
        color: white;
        border-radius: 15px;
    }

    .ap {
        background-color: rgb(34, 84, 178);
        color: white;
        border-radius: 15px;
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

    .padding {
        padding: 1rem;
    }

    .the-product {
        margin-top: 0.5rem;

        /* width: 50rem; */
    }

    .product {
        display: block;
        /* height: 3rem; */
        padding: 0.3rem;
        margin: 1rem;
        border-style: ridge;
        /* margin: 0.5rem; */
        /* border-top-style: solid; */
        /* border-bottom-style: solid; */
        border-color: black;
        border-width: 2px
    }

    .prod-container {
        display: flex;
        justify-content: space-between;
        /* background-color: bisque; */
    }

    .bg {
        background-color: rgb(214, 214, 190);
        border-radius: 25px;
        margin: 1rem;
    }


    /* .actualProd{
            display: block;
        } */
</style>