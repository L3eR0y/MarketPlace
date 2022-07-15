<template>
  <div id="app">
    <market-place-header :title="header_title" />
    <market-place-goods :goods="goods" />
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
  created() {
    this.getGoods();
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
}
</script>

<style lang="stylus">
* {
    padding 0px;
    margin: 0px;
    box-sizing: border-box;
    font-size: 100%;
    background-color: rgb(62, 68, 80);
  }

.separator {
  height: 1px;
  width: 100%;
}


#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin: 0px
</style>
