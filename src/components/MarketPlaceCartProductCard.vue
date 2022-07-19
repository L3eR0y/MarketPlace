<template>
  <div class="product" :key="product.id">
    <div>
      <div>Наименование и описание товара</div>
      <div>
        <div>Фото</div>
        <div>{{ product.product_name }}</div>
      </div>
    </div>
    <div class="product__price-and-count">
      <div class="product__price-and-count__count">
        <div class="product__price-and-count__count__label">Количество</div>
        <div class="product__price-and-count__count__value">
          {{ `${product.count} /шт` }}
        </div>
      </div>
      <div class="product__price-and-count__price">
        <div class="product__price-and-count__price__label">Цена</div>
        <div class="product__price-and-count__price__value">
          {{ `${getPrice(product.cost)} руб/шт` }}
        </div>
      </div>
    </div>
    <div class="product__separator"></div>
    <div class="product__actions">
      <mp-btn
        :bg-color="'#db8080'"
        :label="'Удалить'"
        @click="onDeleteClick(product)"
      ></mp-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class MarketPlaceCartProductCard extends Vue {
  @Prop() product!: { [key: string]: any };

  get dollar_rate() {
    return this.$store.getters?.dollarRate;
  }

  getPrice(cost: number) {
    return cost * this.dollar_rate;
  }

  onDeleteClick(product: any) {
    this.$store.commit('deleteProductFromCartByIndex', product._id);
  }
}
</script>

<style lang="stylus">
.product {
  display: inline-flex;
  flex-direction: column;
  background-color: #ffffff;
  color: black;
  border-radius: 5px;
  &__name {
    display: flex;
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
  }

  &__price-and-count {
    display: flex;

    &__count {
      flex-grow: 1;
      display: flex;

      &__label{
        flex-grow:1
        background-color: #e7e5a5;
      }
      &__value{
        flex-grow:1
      }

    }

    &__price {
      flex-grow: 1;
      display: flex;

      &__label{
        flex-grow:1
        background-color: #e7e5a5;
      }
      &__value{
        flex-grow:1
      }
    }
  }

  &__actions {
    display: flex;
    padding: 10px;
    justify-content: flex-end;
  }

  &__separator {
    width: 100%;
    height: 1px;
    background-color: #f5f4f4;
  }

  // &__delete-btn{
  //   display: flex;
  //   justify-content: center;
  //   align-items:center;
  // }
}
</style>
