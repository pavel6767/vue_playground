<template>
  <a :href="link" target="_blank" rel="noopener">{{ text }}</a>
</template>
    
<script>
export default {
  name: "Link",
  props: {
    link: String,
    text: String,
  },
};
</script>
