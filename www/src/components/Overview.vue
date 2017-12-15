<template>
    <div>
        <div class="overview form">
            <form @submit.prevent="updateProduct">
                <input class="form-control" placeholder="Price" type="text" name="price" v-model="product.resellPrice" required>
                <input class="form-control" placeholder="quantity" type="text" name="quantity" v-model="product.quantity">
                <div class="blacktext">
                    <button class="btn-success margins" type="submit">Submit</button>
                </div>
            </form>
        </div>
        <div class="div">
            <p>quantity stuff </p>
            <button @click="getProducts">Get all Products</button>
            <form class="form-inline" @submit.prevent="getProductsByTag">
                <div class="form-group">
                    <input type="text" class="form-control" name="tag" placeholder="tag" v-model="tag" />
                    <button type="submit" class="btn btn-primary">Get Products</button>
                </div>
            </form>
        </div>
        <div v-for="product in products">
            {{product.name}}
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
                this.$store.dispatch('getProducts')
            },
        },
        computed: {
            products() {
                return this.$store.state.tagProducts[this.tag]

            }
        }
    }
</script>
<style></style>