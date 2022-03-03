<template>
  <div>Home</div>
  <div class="container">
    <input type="text" v-model="searchQuery" />
    <p>search query: {{ searchQuery }}</p>
    <p @click="handleClick">My name is {{ state.name }}</p>
    <p @click="handleReactive">My name is {{ s.name }}</p>
    <p v-for="(name, inx) in filteredNames" :key="name">
      {{ inx }} - {{ name }}
    </p>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";

export default {
  name: "Home",

  setup() {
    const searchQuery = ref("");
    const names = ref(["now", "you", "are", "here", "hi", "there"]);
    const state = ref({
      name: "ko",
      id: 0
    });
    const s = reactive({
      name: "ko",
      id: 0
    });

    const handleClick = () => {
      state.value.name = "hi";
    };
    const handleReactive = () => {
      s.name = "ractive";
    };

    const filteredNames = computed((e) => {
      console.log({ e, searchQuery });
      return names.value.filter((name) => name.includes(searchQuery.value));
    });

    return {
      searchQuery,
      state,
      s,
      filteredNames,
      names,
      handleClick,
      handleReactive
    };
  }
};
</script>

<style></style>
