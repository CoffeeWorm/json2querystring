import Vue from 'vue';
import Hemo from './views/Home.vue';
import './ele';

Vue.config.productionTip = false;

new Vue({ render: h => h(Hemo) }).$mount('#app');
