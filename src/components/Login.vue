<script setup>
import InputText from 'primevue/inputtext';

</script>

<template>
<div class="login-fields">
    <h2>Login to your account</h2>
    <div class="inputs">
        <InputText type="text" v-model="value" placeholder="Username (email)" />
        <InputText  v-model="value" placeholder="Password" type="password" />
        <div class="forgot-container">
            <a>Forgot Password?</a>
        </div>
        <button>Login</button>
    </div>
</div>

</template>


<style scoped>
.forgot-container {
    display: flex;
    width: 100%;
    padding-left: 25px;
}

h2 {
    color: #313638;
    font-size: 36px;
    font-weight: 400;
}

.inputs {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 450px;
    align-items: center;
}

.login-fields {
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    width: 100vw;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 100px;
}

a {
    font-size: 16px;
    line-height: 16px;
    color: #236cd8;
    text-decoration: none;
    cursor: pointer;
    transition: .2s;
}

a:hover {
    color: #00B1E3;
}

button {
    width: 375px;
    background: #00b1e3;
    border: none;
    height: 40px;
    font-size: 20px;
    color: white;
    border-radius: 6px;
    transition: .2s;
    cursor: pointer;
}

button:hover {
    background: #236cd8;
}

input.p-inputtext.p-component {
    height: 50px;
    border-radius: 6px;
    width: 100%;
    background-color: #f7f7f7;
    border: none;
}


@media screen and (max-width: 730px) {
 .inputs {
    width: 300px;
 }

 button {
    width: 300px;
 }
}
</style>
