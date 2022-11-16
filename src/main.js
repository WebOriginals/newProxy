import 'vue-select/dist/vue-select.css';
import "@/assets/scss/style.scss";
import { createApp, h } from 'vue';
import App from './App.vue';
import vSelect from 'vue-select';
import Header from "@/components/Header.vue";

vSelect.props.components.default = () => ({
    OpenIndicator: {
        render: () => h('div', { class: 'select-arrow' }),
    },
});
const app = createApp(App)

app.component("Header", Header)
createApp(App).mount('#app')
