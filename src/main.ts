import { createApp } from 'vue'
import App from './App.vue'
import Antd from "ant-design-vue";
import "../node_modules/ant-design-vue/dist/antd.css";
import './index.css'

import router from './router'
import store from './store'

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Antd);
app.mount("#app");