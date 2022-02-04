<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="!!showModal[0]">
      <Modal @close="toggleModal" idx="0">
        <h1>first modal</h1>
      </Modal>
    </div>
    <div v-if="!!showModal[1]">
      <Modal @close="toggleModal" idx="1">
        <h1>second modal</h1>
      </Modal>
    </div>
    <button @click="toggleModal(0)">open modal 1</button>
    <button @click="toggleModal(1)">open modal 2</button>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li v-for="link in plugins" :key="link.text">
        <Link :link="link.link" :text="link.text" />
      </li>
    </ul>
  </div>
</template>

<script>
import Link from "./Link.vue";
import Modal from "./Modal.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Link,
    Modal,
  },
  methods: {
    toggleModal(idx) {
      this.showModal[idx] = !this.showModal[idx];
    },
  },
  data() {
    return {
      showModal: [false, false],
      plugins: [
        {
          link:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
          text: "babel",
        },
        {
          link:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
          text: "eslint",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
