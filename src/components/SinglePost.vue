<template>
  <div>
    <p class="text--bold">{{ post.name }}</p>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  props: ["post"]
};
</script>
