<template>
  <div class="product" :key="value.id">
    <div class="product__description">
      <div class="product__description__label">
        Наименование и описание товара
      </div>
      <!-- <div class="product__description__photo">
        <div style=""></div>
      </div> -->
      <div class="product__description__name">{{ value.product_name }}</div>
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
    </div>
    <div class="product__separator"></div>
    <div class="product__actions">
      <mp-btn
        :bg-color="'#db8080'"
        :label="'Удалить'"
        @click="onDeleteClick(value)"
      ></mp-btn>
      <div
        class="product__actions__notification"
        v-if="max_count_notification_visibility"
      >
        <div class="product__actions__notification__title">
          Максимальное количество товара для покупки: {{ product_count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import _ from 'lodash';

@Component({})
export default class MarketPlaceCartProductCard extends Vue {
  @Prop() product!: { [key: string]: any };
  value: { [key: string]: any } = {};
  max_count_notification_visibility = false;

  created() {
    this.value = _.cloneDeep(this.product);
    this.value.count = 0;
  }

  get dollar_rate() {
    return this.$store.getters?.dollarRate;
  }

  get product_count() {
    return this.$store.getters?.productCountById(this.value?._id);
  }

  getPrice(cost: number) {
    return (cost * this.dollar_rate).toFixed(2);
  }

  onDeleteClick(product: any) {
    this.$store.commit('deleteProductFromCartByIndex', product._id);
  }

  onInputChange(count: number) {
    if (count > this.product_count) {
      this.max_count_notification_visibility = true;
      // this.value.count = this.product_count;
    } else {
      this.max_count_notification_visibility = false;
    }
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
      background-color: rgb(62, 68, 80);
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      color: #ffffff;
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
    justify-content: space-between;
    flex-direction: row-reverse;

    &__notification {
      border: 2px red dotted;
      font-size: 0.9em;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 10px;
    }
  }

  &__separator {
    width: 100%;
    height: 1px;
    background-color: #f5f4f4;
  }

}
</style>
