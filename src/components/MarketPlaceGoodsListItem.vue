<template>
  <div class="goods-list-item" @click="onListItemClick(value)">
    <div class="goods-list-item__title-container">
      <div>{{ value.product_name }}</div>
    </div>
    <div class="goods-list-item__price-container">
      <div class="goods-list-item__price-container__cost">
        {{ value.cost }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class MarketPlaceGoodsListItem extends Vue {
  @Prop() value!: { [key: string]: any };

  onListItemClick(product: any) {
    this.$emit('click', product);
  }
}
</script>

<style lang="stylus">
.container {
  display: flex;
  width: 50%;
  font-size: 1rem;
  color: white;
}

.goods-list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &__title-container {
    @extend .container
  }

  &__price-container {
    @extend .container
    background-color: rgb(189, 198, 198);
    justify-content: center;

    &__cost {
      background-color: transparent;
      color: rgb(62, 68, 80);
    }
  }
}
</style>
