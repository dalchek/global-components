<template>
    <header>
        <register-button></register-button>
    </header>
</template>
 
<script>
    import RegisterButton from "./RegisterButton.vue";
    export default {
        components : {
            'register-button' : RegisterButton
        }
    }
</script>

<style scoped>
 header {
    height: 50px;
    background-color: palevioletred;
    display: flex;
    justify-content: center;
    align-items: center;
 }
</style>