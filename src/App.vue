<template>
  <div id="app">
    <market-place-header :title="header_title" />
    <div class="content-container">
      <market-place-goods :goods="goods" @add-to-cart="onAddToCart" />
      <market-place-cart v-model="selected_goods" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import data from './assets/data.json';
import names from './assets/names.json';

@Component({})
export default class App extends Vue {
  header_title = 'MARKET PLACE';
  goods: { [key: string]: any } = [];
  selected_goods: { [key: string]: any }[] = [];
  timer: number | null = null;
  created() {
    this.getGoods();
    this.$nextTick(() => {
      this.timer = setInterval(this.getGoods, 15000);
    });
  }

  getGoods() {
    this.goods = Object.entries(names)?.reduce(
      (acc: { [key: string]: any }, [key, val]) => {
        let goods_by_group = data?.Value?.Goods.filter(
          (item) => item.group_id.toString() == key
        );
        for (const good of goods_by_group) {
          if (acc[key]) {
            // let product_by_id = acc[key].products?.[good.product_id];
            if (val?.products?.[good.product_id]) {
              acc[key].products[good.product_id] = {
                ...val.products?.[good.product_id],
                ...good,
              };
            }
          } else {
            acc[key] = { ...val, products: {} };
            // let product_by_id = acc[key].products?.[good.product_id];
            if (val?.products?.[good.product_id]) {
              acc[key].products[good.product_id] = {
                ...val.products?.[good.product_id],
                ...good,
              };
            }
          }
        }
        return acc;
      },
      {}
    );
  }

  onAddToCart(product: any) {
    let _exist = this.selected_goods.findIndex(
      (item) => item._id === product._id
    );
    if (_exist === -1) {
      this.selected_goods.push(product);
    }
  }
}
</script>

<style lang="stylus">
.content-container {
  width: 100%;
  height: calc(100vh - 7vh);
  display: flex;
}

* {
    padding 0px;
    margin: 0px;
    box-sizing: border-box;
  }


#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  background-color: rgb(62, 68, 80)
  margin: 0px
</style>
