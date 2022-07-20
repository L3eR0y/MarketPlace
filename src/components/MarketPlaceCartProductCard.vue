<template>
  <div class="product" :key="product.id">
    <div class="product__description">
      <div class="product__description__label">
        Наименование и описание товара
      </div>
      <!-- <div class="product__description__photo">
        <div style=""></div>
      </div> -->
      <div class="product__description__name">{{ product.product_name }}</div>
    </div>
    <div class="product__separator"></div>
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
    return (cost * this.dollar_rate).toFixed(2);
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
  margin: 10px 10px 0px 10px;

  &__description {
    display: flex;
    flex-wrap: wrap;

    &__label {
      width: 100%;
      padding: 10px 0px;
      background-color: #e7e5a5;
      border-radius: 3px;
    }

    &__photo {
      max-width: 30%;
      padding: 20px;
      flex-grow: 1;
    }

    &__name {
      // max-width: 70%;
      padding: 10px;
      text-align: left;
      flex-grow: 1;
    }
  }

  &__price-and-count {
    display: flex;
    font-size: 0.9rem;

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

}
</style>
