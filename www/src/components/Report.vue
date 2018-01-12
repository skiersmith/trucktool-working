<template>
    <div>
        <button @click="getTransactions()">Generate Report</button>

        <p>{{calc}}</p>
        <p>{{calc2}}</p>

        <div v-for="transactionArr in transactions">
            <div v-if="transactionArr.length > 0">
                <p>•</p>
                <div class="reportGroup">
                    <div class="tArr" v-for="transaction in transactionArr">
                        <div class="tranny-container">
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

    </div>
</template>
<script>
    export default {
        name: 'report',
        data() {
            return {
                calculate: {}
            }
        },
        mounted() {

            this.$store.dispatch('getProducts')
            // this.getTransactions()

        },
        methods: {
            getProducts() {
                this.$store.dispatch('getProducts')
            },
            uhhhhhhh() {

            },
            getTransactionsByProduct() {

                this.$store.dispatch('getTransactionsByProduct', { productId: this.formOption })
            },
            getTransactions() {

                this.allProducts.all.forEach(product => {

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
            calc() {
                var totalP = 0

                var first = this.$store.state.activeTransactions
                for (var key in first) {
                    // check if the property/key is defined in the object itself, not in parent
                    if (first.hasOwnProperty(key)) {
                        console.log(key, first[key]);
                        for (let p = 0; p < first.length; p++) {
                            var final = first[p];
                            if (final[i].type == "Purchase") {
                                totalP += final[i].resalePrice * final[i].quantity
                                console.log("yoooo")
                            }


                        }

                    }
                }



                return totalP
            },
            calc2() {
                var totalP = 0

                var first = this.$store.state.activeTransactions

                for (let i = 0; i < first.length; i++) {
                    var element = first[i];

                    for (let p = 0; p < element.length; p++) {
                        var final = element[p];
                        if (final[i].type == "Sale") {
                            totalP += final[i].resalePrice * final[i].quantity
                        }


                    }

                }
                return totalP
            },
        },
        props: {
        }
    }
</script>
<style>
    .tArr {
        margin: 1rem;



        /* background-color: bisque; */
    }

    .tranny {}

    .tranny-container {
        display: flex;
        justify-content: space-around;
    }

    .reportGroup {
        border-color: black;
        border-width: 1px;
        border-style: solid;
        margin: 1rem;
        padding: 1rem;
        background-color: white;

    }
</style>