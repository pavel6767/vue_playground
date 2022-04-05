import { ref } from "vue";
export default () => {
  const loading = ref(true);
  const one = ref(0);
  const two = ref(0);
  const three = ref(0);

  return { loading, one, two, three };
};
