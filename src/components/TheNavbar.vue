<template>
    <header>
        <RegisterButton />
    </header>
</template>
 
<script>
    import RegisterButton from "./RegisterButton.vue";
    export default {
        components : {
            RegisterButton
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