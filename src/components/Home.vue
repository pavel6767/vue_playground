<template>
  <div>Home</div>
  <div class="container">
    <p v-if="!!loading">loading...</p>
    <div v-else-if="!!posts.length">
      <p v-if="!!error">{{ error }}</p>
      <PostList :posts="posts" />
    </div>
    <p v-else>No Posts available</p>
  </div>
</template>

<script>
import { onMounted } from "vue";

import PostList from "./PostList.vue";

import fetchPosts from "../composables/Home/fetchPosts";
import initState from "../composables/Home/initState";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const { loading } = initState();
    const { posts, error, loadPosts } = fetchPosts();

    onMounted(async () => {
      await loadPosts();
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
