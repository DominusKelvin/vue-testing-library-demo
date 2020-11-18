<template>
  <div id="app">
    <check-out :product="product" />
  </div>
</template>

<script>
import CheckOut from './components/CheckOut.vue'

export default {
  name: 'App',
  data() {
     return {
          product: {
          name: 'Shure Mic SM7B',
          price: 200,
      }
    }
  },
  components: {
    CheckOut
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
