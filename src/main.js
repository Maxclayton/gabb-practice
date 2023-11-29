import { createApp } from 'vue';
import App from './App.vue';
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faShoppingBag, faComment, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; 
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

library.add(faUser, faShoppingBag, faComment, faEllipsis);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(PrimeVue);
app.mount('#app');
