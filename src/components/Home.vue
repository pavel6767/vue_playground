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
import { onMounted, ref } from "vue";

import PostList from "./PostList.vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const loading = ref(true);
    const error = ref("");
    const posts = ref([]);

    const loadPosts = async () => {
      try {
        const res = await fetch("http://localhost:3000/posts");

        if (res.status !== 200) {
          throw Error("failed to retrieve posts");
        }
        posts.value = await res.json();
        error.value = "";
      } catch (err) {
        error.value = err.message;
      }
    };

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
