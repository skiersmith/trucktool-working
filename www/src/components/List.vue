<template>
    <draggable :options="{group: 'lists'}">
        <div :id="listId">

            <div class="list-header">
                <i class="fa fa-trash fa-md" @click="removeList(listId)"></i>
            </div>
            <div class="list-body">
                <h3 class="list-text-color">{{name}}</h3>
                <div v-if="description">
                    <p class="list-text-color">Description: {{description}}</p>
                </div>
                <button class="btn-success btn-xs margin" @click="toggleProductForm">New Product</button>
                <div class="create-product" v-if="showAddProductForm">
                    <form @submit.prevent="createProduct">
                        <div class="form-group">
                            <input class="inline" size="15" type="text" name="name" placeholder="name" v-model="product.name" required>
                            <input class="inline" size="15" type="text" name="quantity" placeholder="quantity" v-model="product.quantity" required>
                            <input class="inline" size="15" type="text" name="unitPrice" placeholder="unitPrice" v-model="product.unitPrice" required>
                            <button type="submit" class="btn-xs btn-success">Add</button>
                        </div>
                    </form>
                </div>

            </div>
            <div class="list-footer">
                <div class="the-product" v-for="product in products">
                    <product :name="product.name" :description="product.description" :productId="product._id" :listId="listId" :boardId="boardId"
                        :newListId="newListId"></product>
                </div>
            </div>

        </div>
    </draggable>
</template>

<script>
    import product from './product'
    import draggable from 'vuedraggable'
    export default {
        data() {
            return {
                list: {},
                product: {
                    listId: this.listId,
                    boardId: this.boardId

                },
                showAddProductForm: false,
                newListId: document.getElementById('listId')
            }
        },
        name: 'list',
        props: ['name', 'description', 'listId', 'boardId', 'productId', 'id'],
        mounted() {
            this.$store.dispatch('getProducts', { listId: this.listId, boardId: this.boardId })
        },
        methods: {
            removeList(listId) {
                this.$store.dispatch('removeList', { listId: listId, boardId: this.boardId })
            },
            createProduct() {
                this.product.order = this.$store.state.activeProducts[this.listId].length
                this.$store.dispatch('createProduct', { product: this.product })
                this.product = {
                    listId: this.listId,
                    boardId: this.boardId

                }
                this.toggleProductForm()
            },

            toggleProductForm() {
                this.showAddProductForm = !this.showAddProductForm
            }
        },
        computed: {
            products() {
                return this.$store.state.activeProducts[this.listId]
            },
            lists() {
                return this.$store.state.activeLists
            }
        },
        components: {
            product,
            draggable

        }

    }

</script>

<style>
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

    .fa-trash {
        float: right;
        color: rgb(235, 15, 15);
    }

    .fa-trash:hover {
        color: rgb(255, 155, 155);
    }

    .inline {
        display: inline;
    }

    .list-text-color {
        color: white;
    }

    .list-header {
        padding: 1rem;
    }

    .margin {
        margin: 1rem;
    }

    .the-product {
        margin-top: 0.5rem;
    }
</style>