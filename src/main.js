import { createApp } from 'vue'
import App from './App.vue'
import MainBody from '././components/MainBody.vue'
import ThemeDialog from '././components/ThemeDialog.vue'

const app=createApp(App);

app.component('main-body',MainBody);
app.component('theme-dialog',ThemeDialog);

app.mount('#app');