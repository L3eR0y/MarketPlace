import Vue from 'vue';
import App from './App.vue';
import MarketPlaceGoods from './components/MarketPlaceGoods.vue';
import MarketPlaceGoodsListItem from './components/MarketPlaceGoodsListItem.vue';

Vue.config.productionTip = false;
Vue.component('market-place-goods', MarketPlaceGoods);
Vue.component('market-place-goods-list-item', MarketPlaceGoodsListItem);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
