import Vue from "vue";
import App from "./App.vue";
import MarketPlaceGoods from "./components/MarketPlaceGoods.vue";

Vue.config.productionTip = false;
Vue.component("market-place-goods", MarketPlaceGoods);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
