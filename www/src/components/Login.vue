<template>
    <div>
        <div class="title">
            <h1>Organizzle</h1>
        </div>
        <div class="top container">
            <div class="loginbox">
                <div class='login'>
                    <div class="header container">
                        <h3>Login:</h3>
                    </div>
                    <form @submit.prevent="userLogin" class="form-horizontal">
                        <div class="form-group">
                            <label for="loginEmail">Email</label>
                            <div>
                                <input type="email" class="" id="loginEmail" placeholder="Email" size="35" v-model="login.email" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="loginPassword">Password</label>
                            <div>
                                <input type="password" class="" id="loginPassword" placeholder="Password" size="35" v-model="login.password" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" /> Remember me
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class=" col-sm-12">
                                <button type="submit" class="btn btn-default text-center">Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="registerhere">
            <div class="regButton">
                <p @click="toggleRegForm">
                    <span @click="regSeen = !regSeen">Don't have an account? Register here.</span>
                </p>
                <div v-if="regSeen">
                    <form class="form-horizontal" role="form">
                        <div class="form-group">
                            <label class="col-sm-2 control-label" for="inputName">Full Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputName" placeholder="Name" v-model="register.name" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" for="inputEmail">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail" placeholder="Email" v-model="register.email" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" for="inputPassword">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="register.password" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button @click="userRegister, toggleRegForm" data-dismiss="modal" class="btn btn-default">Register Me</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                showRegForm: false,
                register: {
                },
                login: {
                    email: '',
                    password: ''
                },
                formOption: '',
                regSeen: false
            }
        },
        methods: {
            userLogin() {
                this.$store.dispatch('userLogin', this.login)
            },
            userRegister() {
                this.$store.dispatch('userRegister', this.register)
                this.toggleRegForm()
            },
            toggleForms() {
                this.showForm = !this.showForm
            },
            toggleRegForm() {
                this.showRegForm = !this.showRegForm
            }
        }
    }
</script>
<style>
    .header {
        display: flex;
        /* justify-content: center; */
    }

    .loginbox {
        background-color: #83bcf1a2;
        padding: .5rem;
        width: 90rem;
        border-radius: 25px;
    }

    .register .login {
        margin: 0rem;
        padding: 0rem;
    }

    .regheader {
        display: flex;
        /* justify-content: center */
    }

    label {
        display: inline-block;
    }

    a {
        display: block;
    }

    .title {
        display: block;
    }

    .top {
        display: flex;
        justify-content: center;
    }

    .action {
        cursor: pointer;
    }
</style>