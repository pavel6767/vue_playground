<template>
  <div class="backdrop" @click.self="closeModal(idx)">
    <div class="modal">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    link: String,
    text: String,
    idx: Number,
  },
  methods: {
    closeModal() {
      this.$emit("close", this.idx);
    },
  },
};
</script>

<style>
.backdrop {
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: gray;
}

.modal {
  width: 400px;
  padding: 20px;
  margin: 50px auto;
  background-color: linen;
}
</style>