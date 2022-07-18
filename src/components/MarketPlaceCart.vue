<template>
  <div class="cart">
    <div class="cart__title-container">
      <div class="cart__title-container__title">CART</div>
    </div>
    <div class="cart__products-container">
      <div class="cart__products-container__table-header">
        <div class="cart__products-container__table-header__item">
          Наименование
        </div>
        <div class="cart__products-container__table-header__item">
          Количество
        </div>
        <div class="cart__products-container__table-header__item">Цена</div>
        <div class="cart__products-container__table-header__item"></div>
      </div>
      <template v-for="product in goods_list">
        <div class="cart__products-container__product" :key="product.id">
          <div class="cart__products-container__product__name">
            {{ product.product_name }}
          </div>
          <div>
            <div class="cart__products-container__product__name">
              {{ `${getPrice(product.cost)} руб/шт` }}
            </div>
            <div class="cart__products-container__product__delete-btn">
              <mp-btn
                :bg-color="'red'"
                :label="'Удалить'"
                @click="onDeleteClick(product)"
              ></mp-btn>
            </div>
          </div>
        </div>
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
    return sum * this.dollar_rate;
  }

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
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;

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

    &__product {
      &__name {
        // white-space: nowrap;
        // overflow: hidden;
        // text-overflow: ellipsis;
      }

      // &__delete-btn{
      //   display: flex;
      //   justify-content: center;
      //   align-items:center;
      // }
    }


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
