<template>
    <div>
        <form @submit.prevent="updateProduct">
            <input class="form-control" placeholder="Price" type="text" name="price" v-model="product.resellPrice" required>
            <input class="form-control" placeholder="quantity" type="text" name="quantity" v-model="product.quantity">
            <div class="blacktext">
                <button class="btn-success margins" type="submit">Add Category</button>
            </div>
        </form>
    </div>
</template>
<script>
    import product from './Product'
    export default {
        name: 'transaction',
        data() {
            return {

            }
        },
        methods: {
            updateProduct() {
                this.$store.dispatch('updateProduct', { product: this.product })
            },
        },
        props: {
        }
    }
</script>
<style></style>