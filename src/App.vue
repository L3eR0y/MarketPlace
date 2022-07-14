<template>
  <div id="app">
    <market-place-goods :goods="goods" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  goods = [
    {
      type: 'Books',
      id: 1,
      price: 100,
    },
    {
      type: 'Books 2',
      id: 2,
      price: 20,
    },
    {
      type: 'Books 3',
      id: 3,
      price: 400,
    },
    {
      type: 'Books 4',
      id: 4,
      price: 7,
    },
  ];
  created() {
    console.log('AppCreated');
  }
}
</script>

<style lang="stylus">
* {
    padding 0px;
    margin: 0px;
    box-sizing: border-box;
    font-size: 100%;
  }


#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin: 0px
</style>
