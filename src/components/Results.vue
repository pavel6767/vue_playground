<template>
  <div class="results">
    <p>{{ result }} ms!!</p>
    <p>{{ rank }}</p>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: ["result"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.result < 1000) {
      this.rank = "ninja";
    } else if (this.result < 2000) {
      this.rank = "pending";
    } else {
      this.rank = "slower";
    }
  },
};
</script>

<style>
</style>