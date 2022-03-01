<template>
  <router-link :to="{ name: 'Home'}"
    >Home</router-link
  >
  <router-link :to="{ name: 'Other', params: { title: 'other' } }"
    >Other</router-link
  >
  <router-link :to="{ name: 'Form', params: { title: 'forma' } }"
    >Form</router-link
  >
</template>

<script>
export default {
  name: "Navigation",
  
};
</script>

<style>
</style>