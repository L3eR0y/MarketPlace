import Vue from 'vue';
import App from './App.vue';
import MarketPlaceGoods from './components/MarketPlaceGoods.vue';
import MarketPlaceHeader from './components/MarketPlaceHeader.vue';
import MarketPlaceCart from './components/MarketPlaceCart.vue';
import MarketPlaceButton from './components/ui/MarketPlaceButton.vue';
import MarketPlaceGoodsListItem from './components/MarketPlaceGoodsListItem.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.component('market-place-goods', MarketPlaceGoods);
Vue.component('market-place-header', MarketPlaceHeader);
Vue.component('market-place-cart', MarketPlaceCart);
Vue.component('mp-btn', MarketPlaceButton);
Vue.component('market-place-goods-list-item', MarketPlaceGoodsListItem);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
