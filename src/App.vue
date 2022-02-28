<template>
  <router-link :to="{ name: 'Other', params: { title: 'other' } }"
    >Other</router-link
  >
  <router-link :to="{ name: 'Form', params: { title: 'forma' } }"
    >Form</router-link
  >
  <!-- <router-link :to="{ name: 'NotFound' }">NaN</router-link> -->

  <router-view />
</template>

<script>
export default {
  name: "App",
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
