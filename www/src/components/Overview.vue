<template>
    <div>
        <div class="title">
            <h1>Organize Title Here</h1>
        </div>
        <div class="pimg container">
            <img class="pGuy" src="../assets/pixel-guy.png">
        </div>
        <div class="baseContainer2">
            <p>Ideal Net Profit ${{calc}}</p>
            <p>Cost: ${{calc2}}</p>
            <p>Inventory: {{totalInv}}</p>
          
            <br>
            <br>
            <br>
        </div>
        <br>
        <div class="baseContainer">
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
            <div class="overview form">
                <form @submit.prevent="updateProduct">
                    <input class="" placeholder="Price" type="text" name="price" v-model="product.resellPrice" required>
                    <input class="" placeholder="quantity" type="text" name="quantity" v-model="product.quantity">
                    <input class="inline" size="15" type="text" name="tag" placeholder="tag" v-model="product.tag">
                    <div class="blacktext">
                        <button class="btn-success margins" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <br>
        <div class="baseContainer">
            <button @click="getProducts" class="btn-xs btn-primary">Get All Products</button>
            <button @click="toggleHideAllProducts">Toggle Products Visibility</button>
            <form class="form-inline" @submit.prevent="getProductsByTag">
                <div class="form-group">
                    <input type="text" class="" name="tag" placeholder="tag" v-model="tag" />
                    <button type="submit" class="btn-xs btn-primary">Get Products</button>
                </div>
            </form>
        </div>
        <br>
        <div>
            <div class="newTransaction baseContainer">
                <form class="form-inline" @submit.prevent="newTransaction">
                    <div class="form-group">
                        <label for="name">name.</label>
                        <input type="text" class="" name="name" placeholder="name" v-model="transaction.name" />
                        <label for="quantity">quantity.</label>
                        <input type="number" class="" name="quantity" placeholder="quantity" v-model="transaction.quantity" />
                        <label for="salePrice">salePrice.</label>
                        <input type="text" class="" name="salePrice" placeholder="salePrice" v-model="transaction.salePrice" />

                        <br>
                        <label for="tag">Tag.</label>
                        <input type="text" class="" name="tag" placeholder="name" v-model="transaction.tag" />
                        <label for="productId">productId.</label>
                        <input type="text" class="" name="productId" placeholder="productId" v-model="transaction.productId" />
                        <button type="submit" @click="getQuantity" class="btn-xs btn-primary">New Transaction</button>
                    </div>
                </form>

            </div>
            <!-- <div class="newTransaction baseContainer">
                    <form class="form-inline" @submit.prevent="newTransaction">
                        <div class="form-group">
                            <label for="name">name.</label>
                            <input type="text" class="" name="name" placeholder="name" v-model="transaction.name" />
                            <label for="quantity">quantity.</label>
                            <input type="number" class="" name="quantity" placeholder="quantity" v-model="transaction.quantity" />
                            <label for="salePrice">salePrice.</label>
                            <input type="text" class="" name="salePrice" placeholder="salePrice" v-model="transaction.salePrice" />
        
                            <br>
                            <label for="tag">Tag.</label>
                            <input type="text" class="" name="tag" placeholder="name" v-model="transaction.tag" />
                            <label for="productId">productId.</label>
                            <input type="text" class="" name="productId" placeholder="productId" v-model="transaction.productId" />
                            <button type="submit" class="btn-xs btn-primary">New Transaction</button>
                        </div>
                    </form>
                </div> -->
        </div>
        <br>
        <div class="baseContainer3">

            <form class="form-inline" @submit.prevent="getTransactionsByProduct">
                <div class="form-group">
                    <label for="productId">productId.</label>
                    <input type="text" class="" name="productId" placeholder="productId" v-model="formOption" />
                    <button type="submit" class="btn-xs btn-primary">Get Transactions</button>
                </div>
            </form>
        </div>
        <div>
            <div class="baseContainer" v-for="product in products">
                <span>{{product.name}}</span>
                <P>
                    , Id: {{product._id}} -
                </P>
                <b>Qty:</b> {{product.quantity}}
            </div>
            <br>
            <div v-if="hideAllProducts">
                <div class="baseContainer" v-for="product in allProducts.all">
                    {{product.name}} -
                    <b>Qty:</b> {{product.quantity}}
                    <p>Id: {{product._id}}</p>
                </div>
            </div>
        </div>
        <div>
            <div class="baseContainer3">
                <div v-for="transaction in transactions">
                    <ul>
                        <li>
                            <b>Name: {{transaction.name}}</b>
                            <p>Quantity: {{transaction.quantity}}</p>
                            <p>Price: {{transaction.salePrice}}</p>
                            <timeago :since="transaction.created"></timeago>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- <div class="baseContainer3">
                <div v-for="transaction in allTransactions">


                    <b>Name: {{transaction.name}}</b>
                    <timeago :since="transaction.created"></timeago>


                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
    import product from './Product'

    export default {
        components: {

            product
        },
        name: 'overview',
        data() {
            return {
                // products: {},
                product: {
                },
                tag: "",
                transaction: {},
                formOption: "",
                showTransactionForm: false,
                hideAllProducts: true,
                // allTransactions:{ }
                // transactions: {}
            }
        },
        mounted() {
            this.$store.dispatch('getTransactions')
        },
        methods: {
            toggleTransactionForm() {
                this.showTransactionForm = !this.showTransactionForm
            },
            toggleHideAllProducts() {
                this.hideAllProducts = !this.hideAllProducts
            },
            newTransaction() {
                this.$store.dispatch('newTransaction', { transaction: this.transaction })
            },
            getTransactions() {

                this.$store.dispatch('getTransactions')
            },
            getTransactionsByProduct() {

                this.$store.dispatch('getTransactionsByProduct', { productId: this.formOption })
            },
            getProductsByTag() {

                this.$store.dispatch('getProductsByTag', { tag: this.tag })
            },
            getProducts() {

                this.$store.dispatch('getProducts')
            },
            getQuantity() {
                this.$store.dispatch('getQuantity', { quantity: this.transaction.quantity, productId: this.transaction.productId })
             debugger
            },
             updateQuantity(){
                dispatch('updateQuantity' , {quantity: updateActualQuantity, productId: this.transaction.productId })
               
            },
            createProduct() {
                // this.product.order = this.$store.state.activeProducts[this.listId].length
                this.$store.dispatch('createProduct', { product: this.product })

                // this.toggleProductForm()
            },
        },
        computed: {
            allTransactions() {
                
                return this.$store.state.activeAllTransactions
            },
            transactions() {

                return this.$store.state.activeTransactions[this.formOption]

            },
            products() {

                return this.$store.state.tagProducts[this.tag]

            },
            allProducts() {

                return this.$store.state.allTagProducts

            },
            totalInv() {
                if (this.$store.state.activeTransactions[this.formOption]) {

                    
                    var theTransactions = this.$store.state.activeTransactions[this.formOption]
                    var quantity = 0

                    
                    for (var i = 0; i < theTransactions.length; i++) {
                        if (quantity < 0) {
                            quantity += theTransactions[i].quantity
                        }
                        if (quantity > 0) {

                        }

                    }
                    // updateQuantity(newQuantity)
                    return quantity
                }
            },
            // totalInv2() {
            //     if (this.$store.state.activeTransactions[this.formOption]) {


            //         var theTransactions = this.$store.state.activeTransactions[this.formOption]
            //         var newNQuantity = 0
            //         var newPQuantity = 0
            //         
            //         for (var i = 0; i < theTransactions.length; i++) {
            //             if (theTransactions[i].quantity < 0) {
            //                 newNQuantity += theTransactions[i].quantity
            //             }
            //             if (theTransactions[i].quantity > 0) {
            //                 newPQuantity += theTransactions[i].quantity
            //             }

            //         }
            //         // updateQuantity(newQuantity)
            //         return [newNQuantity, newPQuantity]
            //     }

            // },

            calc2() {

                if (this.$store.state.activeTransactions[this.formOption]) {


                    var theTransactions = this.$store.state.activeTransactions[this.formOption]
                    var unitPrice = 0
                    
                    for (var i = 0; i < theTransactions.length; i++) {
                        unitPrice += theTransactions[i].salePrice * theTransactions[i].quantity
                    }
                    return unitPrice
                }
            },
            calc() {

                if (this.$store.state.tagProducts[this.tag]) {
                    var theproducts = this.$store.state.tagProducts[this.tag]
                    var unitPrice = 0
                    var resalePrice = 0
                    for (var i = 0; i < theproducts.length; i++) {
                        unitPrice += theproducts[i].unitPrice
                        resalePrice += theproducts[i].resalePrice
                    }
                    return resalePrice - unitPrice
                }
                if (this.$store.state.allTagProducts) {
                    var theproducts = this.$store.state.allTagProducts
                    var unitPrice = 0
                    var resalePrice = 0
                    for (var i = 0; i < theproducts.length; i++) {
                        unitPrice += theproducts[i].unitPrice
                        resalePrice += theproducts[i].resalePrice
                    }
                    return resalePrice - unitPrice
                }
            },
            updateActualQuantity() {
                debugger
                // if (this.$store.state.activeQuantity) {
                    var quantity = this.$store.state.activeQuantity
                    var newQuantity = this.transaction.quantity
                    var totalQuantity = quantity + newQuantity
                    return totalQuantity
                // }else{
                    // return
                // }
            }
        }
    }
</script>
<style>
    .baseContainer {
        background-color: beige;
        padding: 1rem;
        margin: 1rem;
        border-radius: 25px;
    }

    .baseContainer2 {
        background-color: beige;
        padding: 1rem;
        margin: 0rem 1rem 1rem 1rem;
        border-radius: 25px;
    }

    .baseContainer3 {
        background-color: rgb(245, 220, 220);
        padding: 1rem;
        margin: 0rem 1rem 1rem 1rem;
        border-radius: 25px;
    }

    .pGuy {

        height: 25px;



    }

    .pimg {
        display: flex;
        justify-content: flex-end
    }
</style>