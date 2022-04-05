<template>
  <div>Home</div>
  <div class="container">
    <!-- <button @click="func.get">click me</button> -->
    <div @click="increment('one')">One: {{ one }}</div>
    <div @click="increment('two')">two: {{ two }}</div>
    <div @click="increment('three')">three: {{ three }}</div>
    <hr />
    <div>func: {{ func.one }}</div>
    <div>func: {{ func.two }}</div>
    <div>func: {{ func.three }}</div>
    <!-- <p v-if="!!loading">loading...</p>
    <div v-else-if="!!posts.length">
      <p v-if="!!error">{{ error }}</p>
      <PostList :posts="posts" />
    </div>
    <p v-else>No Posts available</p> -->
  </div>
</template>

<script>
import { onMounted } from "vue";

// import PostList from "./PostList.vue";

import fetchPosts from "../composables/Home/fetchPosts";
import initState from "../composables/Home/initState";
console.log({ this: this });
export default {
  name: "Home",
  // components: { PostList },
  setup() {
    const { loading, one, two, three } = initState();
    const { posts, error } = fetchPosts();
    // const { posts, error, loadPosts } = fetchPosts();

    // console.log({ this: this });
    onMounted(function () {
      // await loadPosts();
      loading.value = false;
    });

    return {
      loading,
      one,
      two,
      three,
      error,
      posts
    };
  },
  computed: {
    func: {
      get() {
        console.log("hi");

        return {
          one: this.one,
          two: this.two,
          three: this.three
        };
      }
    }
  },
  methods: {
    increment(num) {
      this[num]++;
    }
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
