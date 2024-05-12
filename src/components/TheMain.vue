<template>
    <section class="main">
        <CourseCard />
    </section>
</template>

<script>
    import CourseCard from './CourseCard.vue'
    export default {
        components : {
            CourseCard
        }
    }

</script>

<style scoped>
.main {
    height: 500px;
    background-color: paleturquoise;
    display: flex;
    justify-content: start;
    align-items: center;
}

</style>