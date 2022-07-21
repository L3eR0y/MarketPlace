import Vue from 'vue';
import App from './App.vue';
import MarketPlaceGoods from './components/MarketPlaceGoods.vue';
import MarketPlaceHeader from './components/MarketPlaceHeader.vue';
import MarketPlaceCart from './components/MarketPlaceCart.vue';
import MarketPlaceButton from './components/ui/MarketPlaceButton.vue';
import MarketPlaceCartProductCard from './components/MarketPlaceCartProductCard.vue';
import MarketPlaceGoodsListItem from './components/MarketPlaceGoodsListItem.vue';
import MarketPlaceProductCard from './components/MarketPlaceProductCard.vue';
import MarketPlaceProductCardItem from './components/MarketPlaceProductCardItem.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.component('market-place-goods', MarketPlaceGoods);
Vue.component('market-place-header', MarketPlaceHeader);
Vue.component('market-place-cart', MarketPlaceCart);
Vue.component('market-place-product-cart-item', MarketPlaceCartProductCard);
Vue.component('mp-btn', MarketPlaceButton);
Vue.component('market-place-goods-list-item', MarketPlaceGoodsListItem);
Vue.component('market-place-product-card', MarketPlaceProductCard);
Vue.component('market-place-product-card-item', MarketPlaceProductCardItem);
new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
