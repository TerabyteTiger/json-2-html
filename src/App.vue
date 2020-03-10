<template>
  <div id="app">
    <GithubRibbon />
    <json-input />
  </div>
</template>

<script>
import GithubRibbon from "./components/GithubRibbon.vue";
import JsonInput from "./components/JsonInput.vue";

export default {
  name: "app",
  components: {
    GithubRibbon,
    JsonInput
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.2rem;
}

body {
  background-color: hsl(280, 10%, 95%);
}
</style>
