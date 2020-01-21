<template>
  <div>
    <form action @submit.prevent="jsonValidate">
      <label for="jsonInput">JSON Format:</label>
      <textarea
        name="jsonInput"
        id="jsonInput"
        cols="30"
        rows="10"
        v-model="jsonData"
      ></textarea>
      <input type="submit" value="Code, Please!" />

      <pre style="text-align: left;">
      {{ processed }}
    </pre
      >
    </form>
    <hr />
    <!-- Test Space 🌌 -->
    <form action="">
      <!-- START TEST SPACE -->

      <!-- END TEST SPACE -->
    </form>
  </div>
</template>

<script>
export default {
  name: "JsonInput",
  data() {
    return {
      jsonData: `{
  "name": "",
  "birthday": "March",
  "favoriteColor": ["yellow", "green", "blue", "other"]
} `,
      processed: ""
    };
  },
  methods: {
    jsonValidate: function() {
      try {
        // TODO: Convert non-string entries of `Date`
        //   into a timestamp to not break the parser 👇
        const obj = JSON.parse(this.jsonData);
        const keys = Object.keys(obj);
        const values = Object.values(obj);

        // And I loooop!
        for (const item in keys) {
          // Strings
          typeof values[item] === "string"
            ? this.processString(keys[item], values[item])
            : null;
          // Array
          typeof values[item] === "object"
            ? this.processObject(keys[item], values[item])
            : null;
        }
      } catch (err) {
        alert("Invalid JSON");
      }
    },
    processString: function(key, value) {
      this.processed =
        this.processed +
        `<label for="${key}">${key}:</label>\n` +
        `<br/>\n` +
        `<input type="text" id="${key}" placeholder="${value}"/>\n`;
    },
    processObject: function(key, value) {
      if (value[0]) {
        // Array => Select
        this.processed =
          this.processed +
          `<label for="${key}">${key}:</label>\n` +
          `<br/>\n` +
          `<select id="${key}">\n`;
        for (const item in value) {
          this.processed =
            this.processed +
            `\t<option value="${value[item]}">${value[item]}</option>\n`;
        }
        this.processed = this.processed + `</select>`;
      } else {
        console.log("Object", key, value);
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
