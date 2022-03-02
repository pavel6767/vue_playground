<template>
  <div>Home</div>
  <div class="container">
    <div v-if="!!loading">Loading...</div>
    <div v-if="!loading">
      <div v-if="!!error">{{ error }} error here</div>
      <div v-if="!jobs.length && !error">No Results found</div>
      <div v-for="job in jobs" :key="job.id">
        {{ job.name }}: {{ job.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return { jobs: [], error: "", loading: true };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((res) => {
        this.jobs = res;
        this.loading = false;
      })
      .catch((err) => {
        this.error = err.message;
        this.loading = false;
        return [];
      });
  }
};
</script>

<style></style>
