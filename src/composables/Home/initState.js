import { ref } from "vue";
export default () => {
  const loading = ref(true);

  return { loading };
};
