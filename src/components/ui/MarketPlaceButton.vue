<template>
  <div class="mp-btn" @click="onClick" :style="{ backgroundColor: bgColor }">
    <!-- <div>1</div> -->
    <div>{{ label.toUpperCase() }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class MarketPlaceButton extends Vue {
  @Prop({ default: 'white' }) bgColor!: string;
  @Prop({ default: 'Button' }) label!: string;
  @Prop({ default: '' }) icon!: string;

  onClick(event: Event) {
    this.$emit('click', event);
  }
}
</script>

<style lang="stylus">
.mp-btn {
  display: inline-flex;
  align-items: stretch;
  position: relative;
  border-radius: 3px;
  padding: 4px 16px;
  cursor: pointer;
  margin: 8px 0px 0px 0px;
}
</style>
