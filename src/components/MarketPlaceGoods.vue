<template>
  <div>
    <template v-for="good in goods">
      <div class="goods-list" :key="good.group_name">
        <div class="goods-list__title">{{ good.group_name }}</div>
        <template v-for="product in good.products">
          <market-place-goods-list-item :value="product" :key="product.id" />
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class MarketPlaceGoods extends Vue {
  @Prop() goods!: { [key: string]: any }[];

  created() {
    console.log('Created Component', this.goods);
  }
}
</script>

<style lang="stylus">
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
