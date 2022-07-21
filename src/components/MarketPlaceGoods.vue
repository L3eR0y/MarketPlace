<template>
  <div class="goods">
    <template v-for="(good, index) in goods">
      <market-place-product-card
        :products="good"
        :product-type-label="good.group_name"
        :key="index"
        @click="onAddToCart"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class MarketPlaceGoods extends Vue {
  @Prop() goods!: { [key: string]: any }[];

  onAddToCart(product: any) {
    this.$store.commit('addProductToCart', product);
  }
}
</script>

<style lang="stylus">
.goods {
  background-color: #b1afaf;
  padding: 10px;
  width: 75vw;
}
.goods-list {
  display: flex;
  flex-direction: column;

  &__title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding 10px;
    background-color: #ffffff;
    font-size: 1.5rem;
  }
}
</style>
