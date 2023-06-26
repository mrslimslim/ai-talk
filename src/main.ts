import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import "uno.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app
  .use(pinia)
  .mount("#app")
  .$nextTick(() => {
    // eslint-disable-next-line no-console
    console.log("App mounted!");
  });
