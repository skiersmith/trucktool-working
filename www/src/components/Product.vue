<template>



    <div class="note-container">
        <div class="product-header">
            <h2> Name: {{product.name}}</h2>
            <p>Quantity: {{product.quantity}}</p>
            <p>Price: {{product.unitPrice}}</p>
            <p>{{product.resalePrice}}</p>
            <p>{{product.sku}}</p>

            <i class="fa fa-trash float" @click="removeProduct"></i>

        </div>







        <div class="products open-notes">
            <p class="productTitle" @click="notesSeen = !notesSeen">
                <b>Notes: </b>
                <p class="add-note" v-if="notesSeen" @click="toggleNoteForm">Add Note
                    <span class="fa fa-plus"></span>
                </p>
            </p>
            <div class="notes" v-if="notesSeen" v-for="note in notes">
                <p>{{note.description}}
                    <i class="fa fa-minus" @click="removeNote(note._id)"></i>
                </p>
            </div>
        </div>

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
        <div class="the-lists">
            <form @change="moveProductToDifferentList">
                <p>List:</p>
                <select name="select list" v-model="formOption">
                    <option disabled selected>Select List</option>
                    <option v-for="list in lists" :value="list._id">{{list.name}}</option>
                </select>
            </form>
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
                notesSeen: false
            }
        },
        name: 'product',
<<<<<<< HEAD
        props: ['product'],
=======
        props: ['product', 'listId', 'categoryId', 'newListId', 'productId', 'description'],
>>>>>>> 046345211a33d97a7064ba2c5f5de194b97b4f31
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

    .fa-trash:hover {
        color: rgb(255, 137, 137);
    }

    .fa-minus:hover {
        color: rgb(255, 137, 137);
    }

    .note-container {
        margin-left: 2rem;
        margin-right: 2rem;
        border: 1px solid black;
        border-radius: 5px;
        padding: 1rem;
    }

    .add-note {
        padding-top: 5%;
        cursor: pointer;
    }

    .add-note:hover {
        color: rgb(7, 7, 7);
    }

    .productTitle:hover {
        color: rgb(2, 2, 2);
    }

    .notes {
        margin: 2rem;
        border: 1px solid black;
        border-radius: 5px;
        background: rgb(247, 250, 247);
        word-wrap: normal;
        padding-top: .5rem;
    }

    .float {
        float: right;
    }
</style>