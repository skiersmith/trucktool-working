<template>
    <div>
        <button @click="getTransactions()">DO NOT PUSH</button>



        <div v-for="transactionArr in transactions">
            <p>{{transactionArr.productId}}</p>
            <div class="reportGroup">
                <div class="tArr" v-for="transaction in transactionArr">
                    <div class="tranny">
                        <div>
                            <b>{{transaction.name}}</b>
                        </div>
                        <div>
                            <p>Quantity: {{transaction.quantity}}</p>
                        </div>
                        <div>
                            <p>Price: {{transaction.salePrice}}</p>
                        </div>
                        <div>
                            <p>Type: {{transaction.type}}</p>
                        </div>
                        <div>
                            <p>ProductId: {{transaction.productId}}</p>

                        </div>
                        <div>
                            <timeago :since="transaction.created"></timeago>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'report',
        data() {
            return {
                // product: {}
            }
        },
        mounted() {
            this.$store.dispatch('getProducts')
        },
        methods: {
            getProducts() {
                this.$store.dispatch('getProducts')
            },
            getTransactionsByProduct() {

                this.$store.dispatch('getTransactionsByProduct', { productId: this.formOption })
            },
            getTransactions() {
                debugger
                this.allProducts.all.forEach(product => {
                    debugger
                    this.$store.dispatch('getTransactionsByProduct', { productId: product._id })
                });
            }
        },
        computed: {
            allProducts() {

                return this.$store.state.allTagProducts

            },
            transactions() {
                return this.$store.state.activeTransactions
            },
            calc(){
               var first = this.$store.state.activeTransactions
            },
        },
        props: {
        }
    }
</script>
<style>
    .tArr {
        margin: 1rem;



    }

    .tranny {
        background-color: bisque;
    }

    .reportGroup {
        border-color: black;
        border-width: 1px;
        border-style: solid;
        margin: 1rem;
        padding: 1rem;

    }
</style>