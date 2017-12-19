<template>
    <div>
        <div class="overHeader">
            Profit?? ${{calc}}
            <br> Total Spent: ${{calc2}}
            <br>
            <br>
        </div>

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
        <br>
        <div class="div">
            <form class="form-inline" @submit.prevent="getProductsByTag">
                <div class="form-group">
                    <input type="text" class="" name="tag" placeholder="tag" v-model="tag" />
                    <button type="submit" class="btn-xs btn-primary">Get Products</button>
                </div>
            </form>
        </div>
        <br>
        <div v-for="product in products">
            <span>{{product.name}}</span>
            <P>
                , Id: {{product._id}} -
            </P>
            <b>Qty:</b> {{product.quantity}}
        </div>
        <br>
        <div v-for="product in allProducts.all">
            {{product.name}} -
            <b>Qty:</b> {{product.quantity}}
        </div>
        <div class="newTransaction">
            <form class="form-inline" @submit.prevent="newTransaction">
                <div class="form-group">
                    <label for="name">name.</label>
                    <input type="text" class="" name="name" placeholder="name" v-model="transaction.name" />
                    <label for="quantity">quantity.</label>
                    <input type="text" class="" name="quantity" placeholder="quantity" v-model="transaction.quantity" />
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
        </div>
        <br>
        <div>
            <button @click="getTransactions" class="btn-xs btn-primary">Get All Transactions</button>
            <form class="form-inline" @submit.prevent="getTransactionsByProduct">
                <div class="form-group">
                    <label for="productId">productId.</label>
                    <input type="text" class="" name="productId" placeholder="productId" v-model="formOption" />
                    <button type="submit" class="btn-xs btn-primary">Get Transactions</button>
                </div>
            </form>
        </div>
        <div v-for="transaction in transactions">
            <p>
                {{transaction.name}}
            </p>

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
                showTransactionForm: false
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
                this.$store.dispatch('getProducts', )
            },
            createProduct() {
                // this.product.order = this.$store.state.activeProducts[this.listId].length
                this.$store.dispatch('createProduct', { product: this.product })
                this.product = {
                    listId: this.product.listId,
                    categoryId: this.categoryId
                }
                // this.toggleProductForm()
            },
        },
        computed: {
            transactions() {

                return this.$store.state.activeTransactions[this.product._id]

            },
            products() {

                return this.$store.state.tagProducts[this.tag]

            },
            allProducts() {

                return this.$store.state.allTagProducts

            },
            calc2() {

                this.$store.state.activeTransactions
                var theTransactions = this.$store.state.activeTransactions
                var unitPrice = 0
                debugger
                for (var i = 0; i < theTransactions.length; i++) {
                    unitPrice += theTransactions[i].unitPrice
                }
                return unitPrice

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
            }
        }
    }
</script>
<style>
    .overHeader {
        background-color: beige
    }
</style>