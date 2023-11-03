// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 确保正确引入路由配置

const app = createApp(App);
app.use(router); // 使用路由
app.mount('#app');


