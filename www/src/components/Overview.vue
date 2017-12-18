<template>
    <div>
        <div class="overHeader">
            ${{calc}}
            <br>
            <br>
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
            <button @click="getProducts">Get all Products</button>
            <form class="form-inline" @submit.prevent="getProductsByTag">
                <div class="form-group">
                    <input type="text" class="form-control" name="tag" placeholder="tag" v-model="tag" />
                    <button type="submit" class="btn btn-primary">Get Products</button>
                </div>
            </form>
        </div>
        <div v-for="product in products">
            {{product.name}} - {{product.quantity}} - ${{product.resalePrice}}
        </div>
        <div v-for="product in allProducts.all">
            {{product.name}} - {{product.quantity}} - ${{product.resalePrice}}
        </div>
<div>
    <p>TRANSACTION</p>
</div>
    </div>
</template>
<script>
    import product from './Product'
    export default {
        name: 'overview',
        data() {
            return {
                // products: {},
                product: {
                },
                tag: ""
            }
        },
        methods: {
            getProductsByTag() {

                this.$store.dispatch('getProductsByTag', { tag: this.tag })
            },
            getProducts() {
                this.$store.dispatch('getProducts',)
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
            products() {
                
                return this.$store.state.tagProducts[this.tag]

            },
            allProducts() {
                
                return this.$store.state.allTagProducts

            },
            // calc2(){

            // },
            calc(){
                
                if(this.$store.state.tagProducts[this.tag]){
                    var theproducts = this.$store.state.tagProducts[this.tag]
                    var unitPrice = 0
                    var resalePrice = 0
                    for(var i =0;i < theproducts.length; i++){
                        unitPrice += theproducts[i].unitPrice 
                        resalePrice +=  theproducts[i].resalePrice 
                    }
                    return resalePrice - unitPrice
                }
                if(this.$store.state.allTagProducts){
                    var theproducts = this.$store.state.allTagProducts
                    var unitPrice = 0
                    var resalePrice = 0
                    for(var i =0;i < theproducts.length; i++){
                        unitPrice += theproducts[i].unitPrice 
                        resalePrice +=  theproducts[i].resalePrice 
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