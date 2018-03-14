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
        <!-- <button v-if="!showEdit" @click="toggleEdit()">Edit</button> -->
        <!-- <i class="fa fa-minus-square-o" v-if="showEdit" @click="toggleEdit()"></i> -->


        <div>
            <div class="create-product bg padding" v-if="showAddProductForm">
                <form @submit.prevent="createProduct">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input class="inline" size="15" type="text" name="name" placeholder="name" v-model="product.name" required>
                    </div>
                    <div class="form-group">
                        <label for="resalePrice">Price</label>
                        <input class="inline" size="15" type="text" name="resalePrice" placeholder="resalePrice" v-model="product.resalePrice">
                    </div>
                    <div class="form-group">
                        <label for="sku">Sku</label>
                        <input class="inline" size="15" type="text" name="sku" placeholder="sku" v-model="product.sku">
                    </div>
                    <div class="form-group">
                       <label for="tag">Tag</label>
                        <input class="inline" size="15" type="text" name="tag" placeholder="tag" v-model="product.tag">
                    </div>
                    <!-- <input class="inline" size="15" type="text" name="quantity" placeholder="quantity" v-model="product.quantity" > -->



                    <div class="form-group">
                        <button type="submit" class="btn-xs btn-success">Add</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- <div v-for="p in check">
            <p>hi</p>
        </div> -->
        <!-- if in stock all products -->
        <div class="main-row">
            <div class="col-xs-12 col-lg-5 bg">
                <h1 class="oos">Out of Stock</h1>
                <div class="product" v-for="p in zeroProducts">
                    <!-- <i class="fa fa-minus" v-if="!quantityCheck"></i> -->

                    <transition name="fade">
                        <div class="prod-container">
                            <div>
                                <b class="inline">Name:</b>
                                <p>{{p.name}} </p>
                            </div>
                            <div>
                                <b class="inline">ID:</b>
                                <p>{{p._id}}</p>
                            </div>
                            <!-- <p>Quantity: {{p.quantity}}</p> -->
                        </div>
                    </transition>
                </div>
            </div>

            <div class="col-xs-12 col-lg-offset-1 col-lg-5 bg">
                <h1 class="ap">All Products</h1>
                <button class="btn-xs btn-info" @click="toggleOther">toggle</button>
                <button class="btn-xs btn-info" @click="toggleUpdate">Update</button>

                <button @click="toggleProductForm" class="btn-xs btn-info" v-if="newP">Add New</button>
                <button @click="toggleProductForm" class="btn-xs btn-danger" v-if="!newP">Cancel</button>


                <div class="product" v-for="product in products.all">
                    <div v-if="update">
                        <div class="prod-container" v-if="!other">
                            <b>Name:</b>
                            <p>{{product.name}}</p>
                            <b>ID:</b>
                            <p>{{product._id}}</p>
                            <b>Price:</b>
                            <p>{{product.resalePrice}}</p>
                            <b>Quantity:</b>
                            <p>{{product.quantity}}</p>
                        </div>
                        <div class="prod-container" v-if="other">
                            <b>Name:</b>
                            <p>{{product.name}}</p>
                            <b>tag:</b>
                            <p>{{product.tag}}</p>
                            <b>Sku:</b>
                            <p>{{product.sku}}</p>
                            <b>ListId:</b>
                            <p>{{product.listId}}</p>
                        </div>
                    </div>
                    <div class="margin padding" v-if="!update">
                        <b>Product:</b>
                        <p>{{product.name}}</p>
                        <form @submit.prevent="updateProduct(product)">
                            <div class="form-group">
                                <label for="name">name</label>
                                <input class="inline" size="15" type="text" name="name" placeholder="name" v-model="product.name">
                                <label for="name">Resale Price</label>
                                <input class="inline" size="15" type="text" name="resalePrice" placeholder="resalePrice" v-model="product.resalePrice">
                                <label for="name">Sku</label>
                                <input class="inline" size="15" type="text" name="sku" placeholder="sku" v-model="product.sku">
                                <label for="name">Tag</label>
                                <input class="inline" size="15" type="text" name="tag" placeholder="tag" v-model="product.tag">
                                <label for="name">Id</label>
                                <input class="inline" size="15" type="text" name="id" placeholder="id" v-model="product._id">
                                <p class="inline">List:</p>
                                <select name="select list" v-model="product.listId" class="listSelect">
                                    <option v-for="list in lists" :value="list._id">{{list.name}}</option>
                                </select>
                                <button type="submit" class="btn-xs btn-success">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div v-if="showEdit">
                <p> Name: {{product.name}}</p>
                <p>ID: {{product._id}}</p>
                <p>Quantity: {{product.quantity}}</p>
                <p>Price: {{product.resalePrice}}</p>
            </div>

            <!-- if quantity is 0 on this table. -->

        </div>

        <!-- </div> -->
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
                newListId: document.getElementById('productId'),
                // quantityCheck: true,
                // listCheck: true
                showEdit: false,
                other: false,
                update: true,
                newP: true
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
                this.$store.dispatch('createProduct', { product: this.product, productId: this.product._id })
                // this.product = {
                // }
                this.toggleProductForm()
            },
            toggleProductForm() {
                this.showAddProductForm = !this.showAddProductForm
                this.newP = !this.newP
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
            updateProduct(product) {
                console.log("i am hitting the right route")
                console.log("p " + product.resalePrice)
                this.$store.dispatch('updateProduct', { product: product, productId: product._id })

                // { productId: this.product._id}
            }
        },

        computed: {
            lists() {
                return this.$store.state.activeLists
            },
            zeroProducts() {

                var unfiltered = this.$store.state.allTagProducts.all
                var filtered = []
                if (unfiltered) {

                    for (let i = 0; i < unfiltered.length; i++) {
                        if (unfiltered[i].quantity < 1) {
                            filtered.push(unfiltered[i])
                        }
                        else {
                            continue
                        }
                    }
                    console.log("yerrp")
                    console.log(filtered)
                    return filtered

                }
            },
            products() {


                return this.$store.state.allTagProducts




            },

        },
        components: {

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
        justify-content: space-around;
        /* background-color: bisque; */
    }

    .bg {
        background-color: rgb(214, 214, 190);
        border-radius: 25px;
        margin: 1rem;
        width: 25rem;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to
    /* .fade-leave-active below version 2.1.8 */

        {
        opacity: 0;
    }

    /* .actualProd{
        display: block;
    } */
</style>