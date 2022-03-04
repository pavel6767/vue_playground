<template>
  <div
    class="singlePost"
    v-for="(post, inx) in posts"
    :key="`${inx} - ${post.description.slice(0, 6)}`"
  >
    <SinglePost :post="post" />
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
export default {
  name: "PostList",
  components: { SinglePost },
  props: ["posts"]
};
</script>

<style>
.singlePost {
  background-color: lightgray;
}
</style>
