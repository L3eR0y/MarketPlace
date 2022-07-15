<template>
  <div class="goods-list-item">
    <div class="goods-list-item__title">{{ value.type }}</div>
    <div class="goods-list-item__price">{{ value.price }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class MarketPlaceGoodsListItem extends Vue {
  @Prop() value!: { [key: string]: any };

  created() {
    console.log('GoodItem Created');
  }
}
</script>

<style lang="stylus">
.goods-list-item {
  border: 1px black solid;
  display: flex;
  flex-direction: row;
  margin-bottom: 2px;
  align-items: center;

  &__title {
    display: flex;
    width: 70%;
    font-size: 1rem;
  }

  &__price {
    padding: 10px 10px;
    background-color: rgb(189, 198, 198);
    width: 30%;
    font-size: 1rem
  }
}
</style>
