<template>
  <div class="border border-blue-700 w-1/2 py-2">
    <h1 class="font-bold text-2xl m-4 text-blue-700">Stats</h1>
    <div class="bg-blue-700 p-4 py-16">
      <div class="flex justify-between">
        <stat :statValue="Number(mean)" statName="mean" />
        <stat :statValue="median" statName="median" />
        <stat :statValue="stdDeviation" statName="std deviation" />
        <stat :statValue="mode" statName="mode" />
      </div>
    </div>
    <div class="flex justify-between m-4 items-center">
      <div class="flex bg-blue-700 rounded-lg shadow-lg p-2">
        <label class="cursor-pointer">
          <svg
            class="w-6 h-6 mx-1 inline"
            fill="#ffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
            />
          </svg>
          <span class="mx-1 text-white font-semibold inline">Upload</span>
          <input
            ref="doc"
            @change="handleFileUpload"
            class="hidden"
            type="file"
          />
        </label>
      </div>

      <div class="bg-blue-700 rounded">
        <input
          class="border border-blue-700 p-2 rounded"
          placeholder="URL"
          v-model="url"
          type="text"
        />
        <button class="text-white p-2 font-semibold" @click="fetchData">
          FETCH
        </button>
      </div>
    </div>
    <div class="m-4">Dataset: {{ dataSet }}</div>
  </div>
</template>

<script>
import stat from "./stat";
import StatService from "../services/StatService";

export default {
  name: "solution",
  components: {
    stat,
  },
  data() {
    return {
      dataSet: [1, 2, 3, 4],
      url: "",
    };
  },
  methods: {
    handleFileUpload(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const dataSet = JSON.parse(e.target.result).data;
          if (!dataSet) {
            throw "Error fetching/parsing the data object";
          }
          this.dataSet = dataSet;
        } catch (e) {
          console.log("An error occurred when fetching the data: ", e);
        }
      };
      reader.readAsText(file);
    },
    async fetchData() {
      try {
        const dataResponse = await fetch(this.url);
        const dataSet = await dataResponse.json();
        if (!dataResponse.ok || !dataSet.data) {
          throw "Error fetching/parsing the data object";
        }
        this.dataSet = dataSet.data;
      } catch (e) {
        console.log("An error occurred when fetching the data: ", e);
      }
      this.url = "";
    },
  },
  computed: {
    mean() {
      return StatService.computeMean(this.dataSet);
    },
    median() {
      return StatService.computeMedian(this.dataSet);
    },
    stdDeviation() {
      return StatService.computeStdDeviation(this.dataSet);
    },
    mode() {
      return StatService.computeMode(this.dataSet);
    },
  },
};
</script>
