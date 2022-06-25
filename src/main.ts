import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './ele';

Vue.config.productionTip = process.env.NODE_ENV !== 'development';

new Vue({ render: (h) => h(App), router }).$mount('#app');
