<template>



    <!-- sale transaction -->
    <!-- fix update on product NOT WORKING -->


    <div>
        <!-- the bootstrap navbar-->
        <nav class="navbar navbar-fixed-top navbar--color--ghost navbar--size--xl" data-startColor="navbar--color--ghost" data-startSize="navbar--size--xl"
            data-intoColor="navbar--color--secondary" data-intoSize="navbar--size--md">
            <div class="container">
                <div class="navbar-header">
                    <router-link class="dashboard routerhome navbar-brand" :to="{name: 'Dashboard'}">
                        <p class="organize-header">Organize</p>
                    </router-link>
                </div>
                <router-link class="overview routerhome navbar-center" :to="{name: 'Overview'}">
                    <p class="overview-header">Overview</p>
                </router-link>
                <div class="navbar-right navbar-text">
                    <span @click="userLogout">
                        <p class="logout-header">Logout</p>
                    </span>
                </div>
            </div>
        </nav>

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
        <!-- <div class="baseContainer">
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
        </div> -->
        <br>

        <br>
        <div>
            <h1>New Purchase</h1>
            <div class="newTransaction baseContainer">
                <form class="form-inline" @submit.prevent="newTransaction">
                    <div class="form-group">
                        <label for="name">name.</label>
                        <input type="text" class="tBlack" name="name" placeholder="name" v-model="transaction.name" />
                        <label for="quantity">quantity.</label>
                        <input type="number" class="tBlack" name="quantity" placeholder="quantity" v-model="transaction.quantity" />
                        <label for="salePrice">salePrice.</label>
                        <input type="text" class="tBlack" name="salePrice" placeholder="salePrice" v-model="transaction.salePrice" />

                        <br>
                        <label for="tag">Tag.</label>
                        <input type="text" class="tBlack" name="tag" placeholder="name" v-model="transaction.tag" />
                        <label for="productId">productId.</label>
                        <input type="text" class="tBlack" name="productId" placeholder="productId" v-model="transaction.productId" />
                        <button type="submit" @click="getQuantity" class="btn-xs btn-primary">New Transaction</button>
                    </div>
                </form>

            </div>
            <div>
                <h1>New Sale</h1>
                <div class="newTransaction baseContainer">
                    <form class="form-inline" @submit.prevent="newSaleTransaction">
                        <div class="form-group">
                            <label for="name">name.</label>
                            <input type="text" class="tBlack" name="name" placeholder="name" v-model="transaction.name" />
                            <label for="quantity">quantity.</label>
                            <input type="number" class="tBlack" name="quantity" placeholder="quantity" v-model="transaction.quantity" />
                            <label for="salePrice">salePrice.</label>
                            <input type="text" class="tBlack" name="salePrice" placeholder="salePrice" v-model="transaction.salePrice" />

                            <br>
                            <label for="tag">Tag.</label>
                            <input type="text" class="tBlack" name="tag" placeholder="name" v-model="transaction.tag" />
                            <label for="productId">productId.</label>
                            <input type="text" class="tBlack" name="productId" placeholder="productId" v-model="transaction.productId" />
                            <button type="submit" @click="getNegQuantity" class="btn-xs btn-primary">New Transaction</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        <br>
        <h3>Get transactions by product id</h3>
        <div class="baseContainer3">
            <form class="form-inline" @submit.prevent="getTransactionsByProduct">
                <div class="form-group">
                    <label for="productId">productId.</label>
                    <input type="text" class="tBlack" name="productId" placeholder="productId" v-model="formOption" />
                    <button type="submit" class="btn-xs btn-primary">Get Transactions</button>
                </div>
            </form>
        </div>

        <br>
        <!-- <div v-if="hideAllProducts">
                <div class="baseContainer" v-for="product in allProducts.all">
                    {{product.name}} -
                    <b>Qty:</b> {{product.quantity}}
                    <p>Id: {{product._id}}</p>
                </div>
            </div> -->
        <div>
            <div class="baseContainer3">
                <div v-for="transaction in transactions">
                    <ul>
                        <li>
                            <b>Name: {{transaction.name}}</b>
                            <p>Quantity: {{transaction.quantity}}</p>
                            <p>Price: {{transaction.salePrice}}</p>
                            <p>Type: {{transaction.type}}</p>
                            <timeago :since="transaction.created"></timeago>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- <div class="baseContainer3">
                <div v-for="transaction in allTransactions"> -->

            <!-- displaying all and filtered need to fix -->
            <!-- <b>Name: {{transaction.name}}</b>
                    <timeago :since="transaction.created"></timeago>


                </div>
            </div> -->
        </div>
        <div class="tag-block">
            <h3>Search by tag: {{tag}} </h3>
            <div>
                <form class="form-inline" @submit.prevent="getProductsByTag">
                    <div class="form-group">
                        <input type="text" class="" name="tag" placeholder="tag" v-model="tag" />
                        <button type="submit" class="btn-xs btn-primary">Get Products</button>
                    </div>
                </form>
            </div>
            <div class="row">
                <div class=col-lg-offset-2>
                    <div class="newContainer col-lg-3" v-for="product in products">
                        <div class="product">
                            <h4>{{product.name}} </h4>
                            <P>Id: {{product._id}} - </P>
                            <b>Qty:</b>
                            <p>{{product.quantity}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="allP2-container">
            <div class="baseContainer allP-container">
                <div>
                    <i @click="getProducts" class="fa fa-refresh" aria-hidden="true" v-if="!refresh"></i>
                    <i class="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true" v-if="refresh"></i>
                </div>
                <button @click="toggleHideAllProducts" class="btn-xs btn-info">Toggle Products Visibility</button>
            </div>
        </div>
        <!-- started doing this then remembered doing with dropdown. gonna leave for now -->
        <!-- <div>
            <div v-for="list in lists">
                <div class="listt">
                    <h4> {{list.name}} </h4>
                    <P>Id: {{list._id}}</P>
                </div>

            </div>
        </div> -->
        <div class="container-block">

            <all v-if="!hideAllProducts"></all>

        </div>
    </div>
</template>
<script>
    import product from './Product'
    import all from './All'
    export default {
        components: {
            all,
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
                // transaction2: {},
                formOption: "",
                showTransactionForm: false,
                hideAllProducts: true,
                refresh: false
                // allTransactions:{ }
                // transactions: {}
            }
        },
        mounted() {
            this.$store.dispatch('getTransactions')
            this.$store.dispatch('getAllLists')
        },
        methods: {
            userLogout() {
                this.$store.dispatch('logout', this.$store.state.user._id)
            },
            toggleTransactionForm() {
                this.showTransactionForm = !this.showTransactionForm
            },
            toggleHideAllProducts() {
                this.hideAllProducts = !this.hideAllProducts
            },
            toggleRefresh() {

                !this.refresh == this.refresh
                setTimeout(3000);
                this.refresh = !this.refresh
                console.log(this.refresh)

            },
            newTransaction() {
                this.transaction.type = "Purchase"
                this.$store.dispatch('newTransaction', { transaction: this.transaction })
            },
            newSaleTransaction() {
                this.transaction.type = "Sale"
                var s = parseInt(this.transaction.quantity)
                s *= -1
                this.transaction.quantity = s
                console.log(this.transaction.quantity)
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
                this.refresh = true
                setTimeout(() => {
                    this.refresh = false
                }, 3000);
            },
            getQuantity() {

                this.$store.dispatch('getQuantity', { quantity: this.transaction.quantity, productId: this.transaction.productId })

            },
            getNegQuantity() {
                var s = parseInt(this.transaction.quantity)
                s *= -1
                this.transaction.quantity = s
                console.log(this.transaction.quantity)
                this.$store.dispatch('getQuantity', { quantity: this.transaction.quantity, productId: this.transaction.productId })

            },
            updateQuantity() {
                debugger
                dispatch('updateQuantity', { quantity: updateActualQuantity, productId: this.transaction.productId })

            },
            // updateProduct() {
            //     this.$store.dispatch('updateProduct', { product: this.product })
            //     // { productId: this.product._id}
            // },
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
            navbar() {
                // grabbing the class names from the data attributes
                var navBar = $('.navbar'),
                    data = navBar.data();

                // booleans used to tame the scroll event listening a little..
                var scrolling = false,
                    scrolledPast = false;

                // transition Into
                function switchInto() {
                    // update `scrolledPast` bool
                    scrolledPast = true;
                    // add/remove CSS classes
                    navBar.removeClass(data.startcolor);
                    navBar.removeClass(data.startsize);
                    navBar.addClass(data.intocolor);
                    navBar.addClass(data.intosize);
                    console.log('into transition triggered!');
                };

                // transition Start
                function switchStart() {
                    // update `scrolledPast` bool
                    scrolledPast = false;
                    // add/remove CSS classes
                    navBar.addClass(data.startcolor);
                    navBar.addClass(data.startsize);
                    navBar.removeClass(data.intocolor);
                    navBar.removeClass(data.intosize);
                    console.log('start transition triggered!');
                }

                // set `scrolling` to true when user scrolls
                $(window).scroll(function () {
                    return scrolling = true;
                });

                setInterval(function () {
                    // when `scrolling` becomes true... 
                    if (scrolling) {
                        // set it back to false
                        scrolling = false;
                        // check scroll position
                        if ($(window).scrollTop() > 100) {
                            // user has scrolled > 100px from top since last check
                            if (!scrolledPast) {
                                switchInto();
                            }
                        } else {
                            // user has scrolled back <= 100px from top since last check
                            if (scrolledPast) {
                                switchStart();
                            }
                        }
                    }
                    // take a breath.. hold event listener from firing for 100ms
                }, 100);
            },

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
    @import url("https://fonts.googleapis.com/css?family=Lato:400,700,900");
    body {
        font-family: 'Lato', Arial, sans-serif;
        color: #6b6b6b;
        font-size: 17px;
        line-height: 1.6;
    }

    .hero {
        position: relative;
        height: 60vh;
        z-index: -2;
        background: url("https://unsplash.it/2000/800?image=563") center top/cover no-repeat;
    }

    .overlay {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.6);
    }

    .main-content {
        background: #f2f2f2;
    }

    section {
        background: #fff;
        padding: 2rem 0 7rem;
    }

    section:nth-child(even) {
        background: #f5f5f5;
    }

    h2,
    h3 {
        padding: 1rem 0 0.75rem;
        font-weight: 700;
        color: #4b4b4b;
    }

    /* ===================================== */

    /* ===== THE INTERESTING STUFF NOW ===== */

    /* ===================================== */

    .navbar {
        border: none;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        /* --- navbar sizes --- */
        /* --- navbar colors --- */
    }

    .navbar-center {
        display: flex;
        justify-content: center;
    }

    .navbar-brand {
        font-size: 2.25rem;
        font-weight: 900;
        color: #4b4b4b;
    }

    .navbar--size--xl {
        padding: 1px 0;
    }

    .navbar--size--lg {
        padding: 2rem 0;
    }

    .navbar--size--md {
        padding: 1rem 0;
    }

    .navbar--size--sm {
        padding: 0;
    }

    .navbar--color--white {
        background: #fff;
    }

    .navbar--color--primary {
        background: #37ca7e;
    }

    .navbar--color--secondary {
        background: #43a6dd;
    }

    .navbar--color--ghost {
        background: rgba(0, 0, 0, 0.2);
    }

    .navbar--color--ghost .navbar-brand,
    .navbar--color--ghost .navbar-text,
    .navbar--color--ghost a {
        color: #fff;
    }


    /* Normal stuff below */

    .routerhome {
        color: black;
    }

    .tBlack {
        color: black;
    }

    .fa-refresh {
        font-size: 15px;
    }

    .baseContainer {
        background-color: rgb(92, 57, 57);
        padding: 1rem;
        margin: 1rem;
        border-radius: 25px;
        color: white;
    }

    .newContainer {
        background-color: rgb(214, 214, 190);
        border-radius: 25px;
        margin: 1rem;
        color: black;
    }

    .baseContainer2 {
        background-color: rgb(66, 79, 131);
        padding: 1rem;
        margin: 0rem 1rem 1rem 1rem;
        border-radius: 25px;
        color: white;
    }

    .baseContainer3 {
        background-color: rgb(92, 57, 57);
        padding: 1rem;
        margin: 0rem 1rem 1rem 1rem;
        border-radius: 25px;
        color: white;
    }

    .block {
        display: block;
    }

    .pGuy {

        height: 25px;



    }

    /* .width{
        width: 20rem;
    } */

    .inline {
        display: inline-block;
    }

    .pimg {
        display: flex;
        justify-content: flex-end
    }

    .allP-container {
        display: flex;
        justify-content: space-around;
        width: 30rem;
    }

    .allP2-container {
        display: flex;
        justify-content: center;
    }

    .listt {
        background-color: rgb(250, 250, 250);
        border-radius: 25px;
        margin: 1rem;
        width: 30rem;
        border-style: solid;
        border-color: black;
        border-width: 3px
    }
</style>