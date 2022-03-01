<template>
  <Navigation />

  <button @click="redirect">redirect</button>
  <button @click="back">back</button>
  <button @click="forward">forward</button>

  <router-view />
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  },
  methods: {
    redirect() {},
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(+1);
    },
    debug(event) {
      console.log(event);
    }
  },
  mounted() {
    console.log("hi");
  },
  created() {
    console.log("hi");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: white;
  font-weight: bold;
  background-color: indigo;
  text-decoration: none;
  margin: 15px;
  padding: 5px 10px;
  border-radius: 2px;
}
</style>
