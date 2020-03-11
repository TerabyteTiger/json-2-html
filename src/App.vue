<template>
  <div id="app">
    <GithubRibbon />
    <h1 class="no-m-bottom">
      JSON-2-HTML
    </h1>
    <p class="no-m-top">
      <b>
        A quick HTML form generator - made by
        <a
          href="https://tyler.vanblargan.dev"
          class="handwriting"
          >Tyler V</a
        >
        ✨
      </b>
    </p>
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
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  font-family: "Baloo 2", "Avenir", Helvetica, Arial,
    sans-serif;
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

.no-m-bottom {
  margin-bottom: 0;
}

.no-m-top {
  margin-top: 0;
}

.handwriting {
  font-family: "Pacifico", cursive;
}

a:visited {
  color: #716799;
}
</style>
