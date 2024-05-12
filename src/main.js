import {createApp} from 'vue';
import App from './App.vue';

import TheNavbar from './components/TheNavbar.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';

const app = createApp(App);

app.component('the-navbar', TheNavbar);
app.component('the-main', TheMain);
app.component('the-footer', TheFooter);

app.mount('#app');
