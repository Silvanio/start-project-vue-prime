<template>
    <div class="p-grid flex-center">
        <div class="p-md-4"></div>
        <div class="p-md-3">
            <Card>
                <template slot="title">
                    <h1>Login</h1>
                </template>
                <template slot="content">
                    <div class="p-grid p-fluid">
                        <div class="p-md-12">
                            <InputText id="username" v-model="username" type="text" placeholder="Utilizador" :class="{'p-invalid':$v.username.$invalid && submitted}"/>
                            <small v-show="$v.username.$invalid && submitted" class="p-error">Utilizador é obrigatório.</small>
                        </div>
                        <div class="p-md-12">
                            <Password id="password" v-model="password" :feedback="false" placeholder="Palavra passe" :class="{'p-invalid':$v.password.$invalid && submitted}"/>
                            <small v-show="$v.password.$invalid && submitted" class="p-error">Palavra passe é obrigatória.</small>
                        </div>
                        <div class="p-md-6">
                            <Checkbox :binary="true" v-model="remember"/>
                            Remember Me
                        </div>
                        <div class="p-md-6">
                            <Button label="Esqueci minha senha" class="p-button-link"/>
                        </div>
                        <div class="p-md-4 p-offset-8   ">
                            <Button label="Entrar" @click="login(!$v.$invalid)"/>
                        </div>

                    </div>
                </template>
            </Card>
        </div>
        <div class="p-md-5"></div>
    </div>
</template>

<script>
    import {required} from 'vuelidate/lib/validators';

    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
                remember: false,
                submitted: false

            }
        },
        validations: {
            username: {
                required
            },
            password: {
                required
            }
        },
        methods: {
            login(isFormValid) {
                this.submitted = true;
                if (!isFormValid) {
                    return;
                }
                localStorage.setItem('token', "DFDDFGDY2323sdafads=?adfa33")
                this.$router.push('/empty');
            }
        }
    }
</script>
<style scoped>
    .flex-center {
        width: 100vw;
        height: 80vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center
    }
</style>