<template>
    <section class="main">
        <CourseCard v-for="course in courses" :course="course" />
    </section>
</template>

<script>
    import CourseCard from './CourseCard.vue'
    export default {
        props : ['courses'],
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