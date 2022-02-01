<template>
  <div id="app">
    <navber></navber>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="row">
      <div class="col-6">
        <router-link to="/page1" class="btn btn-primary">Page1</router-link>
      </div>
      <div class="col-6">
        <router-link to="/page2" class="btn btn-success">Page2</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navber from "./components/template/navber.vue";
export default {
  name: "App",
  components: { Navber },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
