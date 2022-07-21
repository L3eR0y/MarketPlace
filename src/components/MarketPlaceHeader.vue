<template>
  <div class="header">
    <div class="header__title">
      {{ title }}
    </div>
    <div class="header__container">
      <div class="header__container__dollar_rate">
        <div class="header__container__dollar_rate__title">
          Установите курс доллара
        </div>
        <div class="header__container__dollar_rate__value">
          <input
            class="dollar_rate_input"
            type="number"
            v-model="dollar_rate"
          />
          <mp-btn
            :bg-color="'#93db80'"
            :label="'Установить'"
            @click="onSetDollarRateClick(dl_rate)"
          ></mp-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
@Component({})
export default class Header extends Vue {
  @Prop({ default: '' }) title!: string;
  dl_rate = 0;

  created() {
    this.dl_rate = this.dollar_rate;
  }

  get dollar_rate() {
    return this.$store.getters?.dollarRate;
  }

  set dollar_rate(value: number) {
    this.dl_rate = value;
  }

  onDollarRateInput(value: number) {
    console.log(value);
  }

  onSetDollarRateClick(value: number) {
    this.$store.commit('setDollarRate', this.dl_rate);
  }
}
</script>

<style lang="stylus">
.icon {
  border-radius: 50%;
  background-color: white;
  width: 50px;
  height: 50px;
  margin-left: 5px;
  margin-right: 5px;
}

.svg_icon {
  width: 50px;
  height: 50px;
}

.header {
  display: flex;
  flex-direction: row;
  height: 7vh;
  background-color: rgb(62, 68, 80);
  color: white;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  font-size: 2rem;
  box-shadow: 0px 5px 5px black;

  &__title {
    display: flex;
  }

  &__container {
    display: flex;
    padding-right: 10px;

    &__dollar_rate {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__title {
        font-size: 20px;
        display: flex;
      }
      &__value {
        font-size: 20px;
        display: flex;

        .dollar_rate_input {
          font-size: 20px;
          width: 120px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
