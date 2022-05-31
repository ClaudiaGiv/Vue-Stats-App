<template>
  <div>
    <div
      class="bg-white rounded-full p-4 flex mx-4 items-center justify-center stat font-bold"
    >
      {{ statValue }}
    </div>
    <h1 class="mx-2 text-center text-white font-semibold mt-2 uppercase">
      {{ statName }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "stat",
  props: {
    statValue: Number,
    statName: String,
  },
};
</script>

<style scoped>
.stat {
  height: 100px;
  width: 100px;
  font-size: large;
}
</style>
