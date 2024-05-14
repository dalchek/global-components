<template>
    <the-navbar></the-navbar>
    <the-main :courses="courses"></the-main>
    <the-footer></the-footer>
</template>

<script>
export default {
    data(){
        return {
            courses : [
  {
    id: 1,
    title: "JavaScript for Beginners",
    info: "An introductory course to JavaScript, covering basic syntax, DOM manipulation, and basic algorithms."
  },
  {
    id: 2,
    title: "Python Data Science",
    info: "A comprehensive course on Python for data science, including data analysis, visualization, and machine learning with popular libraries like pandas, matplotlib, and scikit-learn."
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    info: "A full-stack web development course that covers HTML, CSS, JavaScript, Node.js, Express, MongoDB, and React to build dynamic web applications."
  }
]
        }
    }
}
</script>

<style>
    body {
        margin: 0;
        background-color: #444;
    }
</style>