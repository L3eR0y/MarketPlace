<template>
  <div class="products_card" :key="products.id">
    <div class="products_card__description">
      <div class="products_card__description__label">
        {{ productTypeLabel }}
      </div>
    </div>
    <div class="products_card__products_list">
      <div
        class="products_card__products_list__product"
        @click="onListItemClick(product)"
        v-for="product in products.products"
        :key="product._id"
      >
        <market-place-product-card-item :product="product" />
      </div>
    </div>
    <!-- <div class="product__description__name">{{ value.product_name }}</div>
    </div>
    <div class="product__separator"></div>
    <div class="product__price-and-count">
      <div class="product__price-and-count__count">
        <div class="product__price-and-count__count__label">Количество</div>
        <div class="product__price-and-count__count__value">
          <input
            v-model="value.count"
            type="number"
            @change="onInputChange(value.count)"
          />
          {{ `/шт` }}
        </div>
      </div>
      <div class="product__price-and-count__price">
        <div class="product__price-and-count__price__label">Цена</div>
        <div class="product__price-and-count__price__value">
          {{ `${getPrice(value.cost)} руб/шт` }}
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import _ from 'lodash';

@Component({})
export default class MarketPlaceProductCard extends Vue {
  @Prop() products!: { [key: string]: any };
  @Prop({ default: '' }) productTypeLabel!: string;

  get dollar_rate() {
    return this.$store.getters?.dollarRate;
  }

  onListItemClick(product: any) {
    this.$emit('click', product);
  }

  getPrice(cost: number) {
    return (cost * this.dollar_rate).toFixed(2);
  }
}
</script>

<style lang="stylus" scoped>
.separator {
  width: 100%;
  height: 1px;
  background-color: #f5f4f4;
}

.products_card {
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  color: black;
  border-radius: 5px;
  margin-bottom: 10px;

  &__products_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    font-size: 16px;
    border-radius: 3px;

    &__product {
      cursor: pointer;
      display: flex;
      border-bottom: 1px #bebdbd solid;
      align-items: center;
      justify-content: space-between;
    }

    &__product:hover {
      background-color: #e7e3e3;
    }
  }

  &__description {
    display: flex;
    flex-wrap: wrap;

    &__label {
      width: 100%;
      padding: 10px 0px;
      background-color: rgb(62, 68, 80);
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      color: #ffffff;
      font-size: 20px;
    }
  }
}
</style>
