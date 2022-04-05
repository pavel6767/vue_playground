<template>
  <div>Home</div>
  <div class="container">
    <p v-if="!!loading">loading...</p>
    <div v-else-if="!!post">
      <p v-if="!!error">{{ error }}</p>
      <PostList :posts="posts" />
    </div>
    <p v-else>No Post available</p>
    <p v-if="!!error">No Post available</p>
  </div>
</template>

<script>
import { onMounted } from "vue";

import fetchSinglePost from "../composables/fetchSinglePost";

export default {
  name: "Home",

  setup() {
    const { loading, posts, error, loadPost } = fetchSinglePost();

    onMounted(async () => {
      await loadPost();
      loading.value = false;
    });

    return {
      loading,
      error,
      posts
    };
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 407px;
  margin: 20px auto;
}
</style>
