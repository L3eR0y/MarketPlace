<template>
  <div class="product_item">
    <div class="product_item__title">
      {{ `${product.product_name} (${product.count})` }}
    </div>
    <div
      class="product_item__cost"
      :style="{ backgroundColor: price_changing_color }"
    >
      {{ price }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import _ from 'lodash';

@Component({})
export default class MarketPlaceProductCardItem extends Vue {
  @Prop() product!: { [key: string]: any };
  price_changing_color: string | null = '#e0e0e0';

  @Watch('price')
  watchProductHandler(nv: number, ov: number) {
    if (Number(ov) < Number(nv)) this.price_changing_color = 'red';
    if (Number(ov) > Number(nv)) this.price_changing_color = 'green';
  }

  get dollar_rate() {
    return this.$store.getters?.dollarRate;
  }

  get price() {
    return (this.product.cost * this.dollar_rate)?.toFixed(2) || 0;
  }

  onListItemClick(product: any) {
    this.$emit('click', product);
  }
}
</script>

<style lang="stylus" scoped>
.separator {
  width: 100%;
  height: 1px;
  background-color: #f5f4f4;
}

.product_item {
  cursor: pointer;
  display: flex;
  border-bottom: 1px #bebdbd solid;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;

  &__title {
    padding: 10px;
  }

  &__cost {
    background-color: #e0e0e0;
    padding: 10px;
    min-width: 200px;
  }

  &__product:hover {
    background-color: #e7e3e3;
  }
}
</style>
