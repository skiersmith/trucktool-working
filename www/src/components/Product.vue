<template>


    <div class="product">
        <div class="product-container">
            <div class="product-header">
                <P class="inline">Remove Product
                    <i class="fa fa-trash delProd" @click="removeProduct"></i>
                </P>
                <h2 @click="prodSeen = !prodSeen"> Name: {{product.name}}</h2>
            </div>
            <div class="div" v-if="prodSeen">


                <div class="product-body">
                    <p>Quantity: {{product.quantity}}</p>
                    <p>Price: {{product.unitPrice}}</p>
                    <p>Sell Price:{{product.resalePrice}}</p>
                    <p>{{product.sku}}</p>

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
                        <p>{{note.description}}
                            <i class="fa fa-minus" @click="removeNote(note._id)"></i>
                        </p>
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
                prodSeen: false
            }
        },
        name: 'product',
        props: ['product'],
        mounted() {
            this.$store.dispatch('getNotes', { productId: this.product._id, listId: this.listId })
        },
        methods: {
            openNotes() {
                this.$store.dispatch('getNotes', { productId: this.productId, listId: this.listId })
            },
            moveProductToDifferentList(newListId) {

                this.$store.dispatch('moveProductToDifferentList', { productId: this.productId, oldListId: this.listId, listId: this.formOption })
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
                this.$store.dispatch('removeProduct', { productId: this.product._id, listId: this.listId })
            },
            removeNote(noteId) {
                this.$store.dispatch('removeNote', { productId: this.product._id, listId: this.listId, noteId: noteId })
            },
            toggleNoteForm() {
                this.showNoteForm = !this.showNoteForm
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
        border: 1px solid black;
        border-radius: 5px;
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