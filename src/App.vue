<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Login,
    Home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e3e4e6;
  background-color: #2c3e50;
  padding-bottom:  100px;
  width: 100vw !important;
  height: 77vh;

}

</style>
