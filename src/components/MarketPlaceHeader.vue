<template>
  <div class="header">
    <div class="header__title">
      {{ title }}
    </div>
    <div class="header__icons-container">
      <div class="header__icons-container__cart">
        <div class="svg_icon">
          <svg viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg">
            <path :d="currency_icon" />
          </svg>
        </div>
      </div>
      <div class="header__icons-container__user"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import { mdiCurrencyUsd } from '@mdi/js';
@Component({})
export default class Header extends Vue {
  @Prop({ default: '' }) title!: string;
  currency_icon: any = mdiCurrencyUsd;
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

  &__icons-container {
    display: flex;
    padding-right: 10px;

    &__cart {
      @extend .icon;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__user {
      @extend .icon;
    }
  }
}
</style>
