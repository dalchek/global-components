<template>
    <div class="card">
        <header>
            <h3>{{ title }}</h3>
        </header>
        <main>
            <p>{{ info.substring(0,30) }}</p>
            <CardAlert :info="info" v-if="displayInfoMessage"/>
        </main>
        <footer>
            <button @click="displayInfo">Read more</button>
        </footer>
    </div>
</template>

<script>
import CardAlert from './CardAlert.vue'
export default {
    components: {CardAlert},
    data(){
        return {
            displayInfoMessage : false,
            title: "Mega Vue Course",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident ab magnam eos. Natus delectus eligendi, vero nihil cumque assumenda sit similique nesciunt amet aut maiores sed eius nostrum quidem?"
        }
    },
    methods: {
        displayInfo() {
            this.displayInfoMessage = !this.displayInfoMessage
        },
    },
}

</script>

<style scoped>
    .card {
        width: 25%;
        padding: 20px;
        box-shadow: 0 0 8px black;
        background-color: palegreen;
    }
</style>