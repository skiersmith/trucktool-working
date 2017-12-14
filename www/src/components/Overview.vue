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
        </div>
    </div>
</template>
<script>
    import product from './Product'
    export default {
        name: 'overview',
        data() {
            return {
                product: {}
            }
        },
        methods: {

        },
        props: {
        }
    }
</script>
<style></style>