<template>
  <div class="cart">
    <div class="cart__title-container">
      <div class="cart__title-container__title">CART</div>
    </div>
    <div class="cart__products-container">
      <template v-for="product in goods_list">
        <mp-cart-item :product="product" :key="product._id" />
      </template>
    </div>
    <div class="cart__total-price-container">
      <div class="cart__total-price-container__title-container">
        <div class="cart__total-price-container__title-container__title">
          Общая стоимость:
        </div>
      </div>
      <div class="cart__total-price-container__total-price-container">
        <div class="cart__total-price-container__total-price-container__title">
          {{ total_price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Model, Prop, Vue } from 'vue-property-decorator';
import Header from '../../.history/src/components/MarketPlaceHeader_20220714211316.vue';
@Component
export default class MarketPlaceCart extends Vue {
  // @Model('change') goods_list!: { [key: string]: any }[];

  get goods_list() {
    return this.$store.getters?.cartProducts;
  }

  get total_price() {
    let sum = this.goods_list.reduce(
      (acc: number, val: { [key: string]: any }) => {
        if (val.cost) {
          acc += val.cost;
        }
        return acc;
      },
      0
    );
    return (sum * this.dollar_rate).toFixed(2);
  }

  get dollar_rate() {
    return this.$store.getters?.dollarRate;
  }
}
</script>

<style lang="stylus">
.container {
  display: flex;
  width: 100%;
  font-size: 1rem;
  color: white;
}

.cart {
  width: 25vw;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  background-color: #818181;
  border-left: 1px transparent solid;

  &__products-container__table-header {
    display: flex;
    background-color: #ffffff;

    &__item {
      flex-grow: 1;
      border-right: 1px black solid;
      border-top: 1px black solid;
      border-bottom: 1px black solid;
      background-color: transparent;
      color: rgb(62, 68, 80);
    }

    &__item:first-child {
      flex-grow: 2;
      border-right: 1px black solid;
      border-top: 1px black solid;
      border-bottom: 1px black solid;
      background-color: transparent;
      color: rgb(62, 68, 80);
    }
  }

  &__title-container {
    @extend .container;
    background-color: white;
    justify-content: center;
    align-items: center;
    height: 50px;
    // background-color: rgb(189, 198, 198);

    &__title {
      padding 10px;
      background-color: transparent;
      color: rgb(62, 68, 80);
      font-size: 1.5rem;
    }
  }

  &__products-container {
    @extend .container
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    max-height: calc(100% - 100px);
  }

  &__total-price-container {
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 100%;
    background-color: white;

    &__title-container {
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 10px;
      flex-grow: 1;

      &__title {
        background-color: transparent;
      }
    }

    &__total-price-container{
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 10px;
      flex-grow: 1;

      &__title {
        background-color: transparent;
      }
    }
  }
}
</style>
