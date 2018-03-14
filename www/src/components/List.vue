<template>
    <div>
        <!-- the bootstrap navbar-->
        <!-- <nav class="navbar navbar-fixed-top navbar--color--ghost navbar--size--xl" data-startColor="navbar--color--ghost" data-startSize="navbar--size--xl"
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
                        <p class="RL-header">Logout</p>
                    </span>
                </div>
            </div>
        </nav> -->

        <div class="nav-header">
            <div class="nav-header-container">

                <div>
                    <div>
                        <router-link class="RLwhite headDown3" :to="{name: 'Dashboard'}">
                            <h1 class="organize-header">Organize</h1>
                        </router-link>
                    </div>
                </div>
                <div>
                    <div>
                        <router-link class="headDown4 RL-header Overview-header font" :to="{name: 'Overview'}">
                            <b>Overview</b>
                        </router-link>
                    </div>
                </div>
                <div>
                    <div class="headDown">
                        <b @click="userLogout" class="logout-header RL-header">Logout</b>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="fixL">
                <router-link class="routerhome" :to="{name: 'Dashboard'}">
                  <h1 class="organize-header">Organize</h1>
                </router-link>
              </div>
          
              <div class="supernavCont">
                <div class="navCont">
                  <div class="spacer1"></div>
          
                  <div>
                    <router-link class="overview routerhome navbar-center" :to="{name: 'Overview'}">
                      <p class="overview-header">Overview</p>
                    </router-link>
                  </div>
                  <div class="spacer4"></div>
                  <div>
                    <p @click="userLogout" class="RL-header">Logout</p>
                  </div>
                </div>
              </div> -->
        <div class="spacer"></div>
        <div class="listHeaderC container">
            <div class="listheader">
                <h2>{{list.name}}</h2>
                <h4 v-if="list.description" class="category-description">Description: {{list.description}}</h4>
                <button class="btn-success btn-xs margin" @click="toggleProductForm">New Product</button>
            </div>
        </div>
        <div class="spacer"></div>
        <!-- <div class="list-body">
            <div class="productt">
            </div>
            <div class="list-header">
                <div v-if="description">
                        <h3 class="list-text-color">{{list.name}}</h3>
                                <p class="list-text-color">Description: {{description}}</p>
                            </div>
                        </div> -->

        <div class="create-product" v-if="showAddProductForm">
            <form @submit.prevent="createProduct">
                <div class="form-group">
                    <input class="inline" size="15" type="text" name="name" placeholder="name" v-model="product.name" required>
                    <input class="inline" size="15" type="text" name="resalePrice" placeholder="resalePrice" v-model="product.resalePrice">
                    <input class="inline" size="15" type="text" name="sku" placeholder="sku" v-model="product.sku">
                    <input class="inline" size="15" type="text" name="tag" placeholder="tag" v-model="product.tag">
                    <button type="submit" class="btn-xs btn-success">Add</button>
                </div>
            </form>
        </div>
        <div class="row">
            <div class="col-lg-3 col-sm-6 " v-for="product in products">
                <product class="the-product" :product="product"> </product>
            </div>
        </div>
    </div>

</template>
<script>
    import product from './Product'
    export default {
        data() {
            return {
                // list: {
                //     name: this.name,

                // },

                product: {
                    listId: this.listId,
                    categoryId: this.categoryId,
                },
                showAddProductForm: false,
                newListId: document.getElementById('listId')
            }
        },
        name: 'list',
        props: ['name', 'description', 'listId', 'categoryId', 'productId', 'id'],
        mounted() {

            this.$store.dispatch('getCurrentList', { listId: this.listId })
            this.$store.dispatch('getProductsByList', { listId: this.product.listId, categoryId: this.categoryId })
            console.log(this.list)
        },
        methods: {
            userLogout() {
                this.$store.dispatch('logout', this.$store.state.user._id)
            },
            createProduct() {
                // this.product.order = this.$store.state.activeProducts[this.listId].length
                this.$store.dispatch('createProduct', { product: this.product })
                this.product = {
                    listId: this.product.listId,
                    categoryId: this.categoryId
                }
                this.toggleProductForm()
            },
            toggleProductForm() {
                this.showAddProductForm = !this.showAddProductForm
            }
        },

        computed: {
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
            products() {

                return this.$store.state.activeProducts[this.listId]
            },
            list() {
                return this.$store.state.currentList
            }
        },
        components: {
            product,
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

    .headDown4 {
        position: relative;
        top: 3rem;
        font-size: 150%
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
        display: flex;
        justify-content: space-around;
        margin: -10px 50px 0px;
        border: none;
        -webkit-transition: 0.4s;
        transition: 0.4s;
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

    .list {
        border-radius: 5px;
        height: 600px;
        margin-top: 1%;
        overflow: auto;
        background: rgb(104, 142, 255);
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

    /* .list-footer {
         display: ; 
         justify-content: space-around; 
    } */

    .margin {
        margin: 1rem;
    }

    .the-product {
        margin-top: 0.5rem;

        /* width: 50rem; */
    }

    .listHeaderC {
        display: flex;
        justify-content: center
    }

    .listheader {
    background-color: rgba(31, 30, 30, 0.816);
    width: 60rem;
    border-radius: 15px;
    padding: 1.5rem;
    color: rgb(255, 254, 254);
  }
   /* {
        background-color: rgba(31, 30, 30, 0.816);
        border-radius: 15px;
        color: rgb(250, 248, 248);
        display: inline block;
        padding: 1rem;
    } */

    /* .product {
        padding-top: 1rem;
        padding-bottom: 1rem;
    } */
</style>