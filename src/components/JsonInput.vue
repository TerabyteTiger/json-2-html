<template>
  <div>
    <div>
      <h2>Inputs:</h2>
      <table>
        <tr>
          <th>I need a _____:</th>
          <th>JSON Format to use:</th>
        </tr>
        <tr>
          <td>
            String Input
          </td>
          <td>
            "fieldName": "placeholder",
          </td>
        </tr>
        <tr>
          <td>
            Select
          </td>
          <td>
            "fieldName": [Array of options],
          </td>
        </tr>
        <tr>
          <td>
            Date
          </td>
          <td>
            "fieldName": *Date,
          </td>
        </tr>
        <tr>
          <td>
            Datetime
          </td>
          <td>
            "fieldName": *Datetime,
          </td>
        </tr>
      </table>
    </div>
    <form action @submit.prevent="jsonValidate">
      <label for="jsonInput">JSON Format:</label>
      <textarea
        name="jsonInput"
        id="jsonInput"
        cols="30"
        rows="10"
        v-model="jsonDisplayData"
      ></textarea>
      <input type="submit" value="Code, Please!" />

      <pre style="text-align: left;">{{ processed }}</pre>
    </form>
    <hr />
    <!-- Test Space 🌌 -->
    <form action="">
      <!-- 
        Feel free to add your output to ensure the
        output is valid, but clear it before submitting a PR :]
      -->
      <!-- START TEST SPACE -->

      <!-- END TEST SPACE -->
    </form>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "JsonInput",
  data() {
    return {
      jsonDisplayData: `{
  "name": "",
  "birthday": *Date,
  "datetimeExample": *Datetime,
  "favoriteColor": ["yellow", "green", "blue", "other"]
} `,
      jsonData: "",
      processed: ""
    };
  },
  methods: {
    jsonValidate: function() {
      try {
        this.jsonData = this.jsonDisplayData;
        // Clear previous processed data
        this.processed = "";
        // Setup for Catching Special Cases
        //   into a timestamp to not break the parser 👇
        const now = moment().format("X");
        const nowTime = moment().format("x");

        let datePattern = /( \*Date,)/gi;
        let datetimePattern = /( \*Datetime,)/gi;

        // Repace *Date with now
        this.jsonData = this.jsonData.replace(
          datePattern,
          " " + now + ","
        );

        // Replace *Datetime with nowTime
        this.jsonData = this.jsonData.replace(
          datetimePattern,
          " " + nowTime + ","
        );

        const obj = JSON.parse(this.jsonData);
        const keys = Object.keys(obj);
        const values = Object.values(obj);

        // And I loooop!
        for (const item in keys) {
          console.log(this.processed);
          // Strings
          typeof values[item] === "string"
            ? this.processString(keys[item], values[item])
            : null;
          // Array
          typeof values[item] === "object"
            ? this.processObject(keys[item], values[item])
            : null;
          // Date
          typeof values[item] === "number" &&
          values[item] == now
            ? this.processDate(keys[item], values[item])
            : null;
          // Datetimes
          typeof values[item] === "number" &&
          values[item] == nowTime
            ? this.processDatetime(keys[item], values[item])
            : null;
          // Number
        }
      } catch (err) {
        alert("Invalid JSON");
      }
    },
    processString: function(key, value) {
      this.processed =
        this.processed +
        `<label for="${key}"> ${key}: </label>\n` +
        `<br/>\n` +
        `<input type="text" id="${key}" placeholder="${value}"/>\n`;
    },
    processObject: function(key, value) {
      if (value[0]) {
        // Array => Select
        this.processed =
          this.processed +
          `<label for="${key}"> ${key}: </label>\n` +
          `<br/>\n` +
          `<select id="${key}">\n`;
        for (const item in value) {
          this.processed =
            this.processed +
            `\t<option value="${value[item]}">${value[item]}</option>\n`;
        }
        this.processed = this.processed + `</select>`;
      } else {
        // TODO: Process Objects somehow?
        console.log("Object", key, value);
      }
    },
    processDate: function(key, value) {
      this.processed =
        this.processed +
        `<label for="${key}"> ${key} </label>\n<br/>\n<input type="date" id="${key}">\n`;
    },
    processDatetime: function(key, value) {
      this.processed =
        this.processed +
        `<label for="${key}"> ${key} </label>\n<br/>\n<input type="datetime-local" id="${key}">\n`;
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
