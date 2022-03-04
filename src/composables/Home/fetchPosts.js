import { ref } from "vue";
export default () => {
  const error = ref(null);
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

  return { error, posts, loadPosts };
};
