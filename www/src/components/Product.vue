<template>
    <div class="productt col-sm-3">
        <div class="l">
            <h2 class="title" @click="prodSeen = !prodSeen">{{product.name}}</h2>
        </div>
        <div class="div" v-if="prodSeen">
            <i class="fa fa-edit" @click="toggleProdBody"></i>
            <div class="product-container">
                <div v-if="prodBodySeen" class="product-body">
                    <p>Quantity: {{product.quantity}}</p>
                    <p>Price: {{product.unitPrice}}</p>
                    <p>Sell Price:{{product.resalePrice}}</p>
                    <p>{{product.sku}}</p>
                    <p>Tags: {{product.tag}}</p>

                    <div class="the-lists">
                        <form @change="moveProductToDifferentList">
                            <p class="inline">List:</p>
                            <select name="select list" v-model="formOption" class="listSelect">
                                <option disabled selected>Select List</option>
                                <option v-for="list in lists" :value="list._id">{{list.name}}</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div v-if="!prodBodySeen" class="edit-product-body">
                    <form @submit.prevent="updateProduct(this._id)">
                        <div class="form-group">
                            <input class="inline" size="15" type="text" name="name" placeholder="name" v-model="product.name">
                            <input class="inline" size="15" type="text" name="quantity" placeholder="quantity" v-model="product.quantity">
                            <input class="inline" size="15" type="text" name="unitPrice" placeholder="unitPrice" v-model="product.unitPrice">
                            <input class="inline" size="15" type="text" name="resalePrice" placeholder="resalePrice" v-model="product.resalePrice">
                            <input class="inline" size="15" type="text" name="sku" placeholder="sku" v-model="product.sku">
                            <input class="inline" size="15" type="text" name="tag" placeholder="tag" v-model="product.tag">
                            <button type="submit" class="btn-xs btn-success">Add</button>
                        </div>
                    </form>
                    <div class="removeProd">
                        <P class="inline">Remove Product
                            <i class="fa fa-trash delProd" @click="removeProduct"></i>
                        </P>
                    </div>
                </div>
                <div class="open-notes">
                    <p class="productTitle" @click="notesSeen = !notesSeen">
                        <b>Notes: </b>
                        <p class="add-note" v-if="notesSeen" @click="toggleNoteForm">Add Note
                            <span class="fa fa-plus"></span>
                        </p>
                    </p>
                    <div class="noteForm" v-if="showNoteForm">
                        <div class="newNote">
                            <form @submit.prevent="newNote">
                                <div class="form-group">
                                    <input placeholder="note" name="description" type="text" size="10" v-model="note.description">
                                    <button class="btn-success btn-xs" type="submit">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="notes" v-if="notesSeen" v-for="note in notes">
                        <p>{{note.description}}</p>
                        <timeago :since="note.created"></timeago>
                        <i class="fa fa-minus" @click="removeNote(note._id)"></i>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import list from './List'
    export default {
        data() {
            return {
                showNoteForm: false,
                note: {
                    categoryId: this.categoryId,
                    listId: this.listId,
                    productId: this.product._id
                },
                formOption: '',
                notesSeen: false,
                prodSeen: false,
                prodBodySeen: true
            }
        },
        name: 'product',
        props: ['product', 'listId', 'newListId'],
        mounted() {
            this.$store.dispatch('getNotes', { productId: this.product._id, listId: this.listId })
        },
        methods: {
            openNotes() {
                this.$store.dispatch('getNotes', { productId: this.productId, listId: this.listId })
            },
            moveProductToDifferentList(newListId) {
                this.$store.dispatch('moveProductToDifferentList', { productId: this.product._id, oldListId: this.product.listId, listId: this.formOption })
            },
            newNote() {

                this.$store.dispatch('newNote', { note: this.note })
                this.note = {
                    listId: this.product.listId,
                    productId: this.product._id
                }
                this.toggleNoteForm()
            },
            removeProduct() {
                this.$store.dispatch('removeProduct', { productId: this.product._id, listId: this.product.listId })
            },
            removeNote(noteId) {
                this.$store.dispatch('removeNote', { productId: this.product._id, listId: this.listId, noteId: noteId })
            },
            toggleNoteForm() {
                this.showNoteForm = !this.showNoteForm
            },
            toggleProdBody() {
                this.prodBodySeen = !this.prodBodySeen
            },
            updateProduct(){
                this.$store.dispatch('updateProduct', { productId: this.product._id})
            }
        },
        computed: {
            lists() {
                return this.$store.state.activeLists
            },
            products() {
                return this.$store.state.activeProducts
            },
            notes() {

                return this.$store.state.activeNotes[this.product._id]
            }
        },
        components: {
        }

    }
</script>

<style scoped>
    .product-header {
        display: flex;
        justify-content: center;

    }

    /* .l{
        background-color: rgb(253, 206, 147);
        border-radius: 25px;
        padding: .5rem .5rem .5rem .5rem;

    } */

    .title:hover {
        color: rgb(131, 130, 130)
    }

    .productt {
        background-color: bisque;
        border-radius: 25px;
        margin: 1rem;
        /* width: 30rem */
    }

    .open-notes {
        cursor: pointer;

    }

    .fa-minus {
        color: red;
    }

    .delProd {
        /* float: right; */
        color: rgb(235, 15, 15);
    }

    .delProd:hover {
        color: rgb(255, 137, 137);
    }

    .fa-minus:hover {
        color: rgb(255, 137, 137);
    }

    .product-container {
        margin-left: 2rem;
        margin-right: 2rem;
        /* border: 1px solid black; */
        /* border-radius: 25px; */
        padding: 1rem;
    }

    .add-note {
        /* padding-top: 5%; */
        cursor: pointer;
    }

    .add-note:hover {
        color: rgb(7, 7, 7);
    }

    .productTitle:hover {
        color: rgb(2, 2, 2);
    }

    .productTitle {
        display: inline;
        /* padding-top: 1rem; */
    }

    .listSelect {
        display: inline;
    }

    .notes {
        margin: 2rem;
        border: 1px solid black;
        border-radius: 5px;
        background: rgb(247, 250, 247);
        word-wrap: normal;
        padding-top: .5rem;
    }

    .inline {
        display: inline;
    }

    .float {
        float: right;
    }
</style>