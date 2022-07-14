<template>
  <div>Here will be goods :)</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
export default class MarketPlaceGoods extends Vue {
  @Prop() private msg!: string;
}
</script>
