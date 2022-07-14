<template>
  <div class="goods-list">
    <div class="goods-list__title">Goods Title</div>
    <template v-for="item in goods">
      <market-place-goods-list-item :value="item" :key="item.id" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class MarketPlaceGoods extends Vue {
  @Prop() goods!: { [key: string]: any }[];

  created() {
    console.log('Created Component');
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
    padding 20px;
    background-color: rgb(189, 198, 198);
    font-size: 1.5rem;
  }
}
</style>
