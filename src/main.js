import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import './assets/layout/layout.scss';

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Breadcrumb from 'primevue/breadcrumb';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Card from "primevue/card";
import Password from 'primevue/password';
import Checkbox from "primevue/checkbox";
import {Vuelidate} from 'vuelidate'


Vue.component('Button', Button);
Vue.component('InputText', InputText);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('Toast', Toast);
Vue.component('Card', Card);
Vue.component('Password', Password);
Vue.component('Checkbox', Checkbox);
Vue.use(Vuelidate)
Vue.use(ToastService);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
