<template>
  <form action="" @submit="jsonValidate">
    <label for="jsonInput">JSON Format:</label>
    <textarea
      name="jsonInput"
      id="jsonInput"
      cols="30"
      rows="10"
      v-model="jsonData"
    ></textarea>
    <input type="submit" value="Code, Please!" />
  </form>
</template>

<script>
export default {
  name: "JsonInput",
  data() {
    return {
      jsonData: `{
  "name": "",
  "birthday": Date,
  "favoriteColor": ["yellow", "green", "blue", "other"]
} `,
      processed: ""
    };
  },
  methods: {
    jsonValidate: () => {
      try {
        let tempJson = this.jsonData.replace(
          " Date,",
          Date.now()
        );
        console.log(tempJson);
        JSON.parse(tempJson);
      } catch {
        alert("Invalid JSON");
      }
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
</style>
