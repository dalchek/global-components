<template>
    <div class="alert">
        <p>{{ info }}</p>
    </div>

</template>

<script>
export default {
    props : ['info']
}
</script>

<style>
.alert{
    padding: 20px;
    margin: 15px;
    background-color: palevioletred;
    color: aliceblue;
}
</style>