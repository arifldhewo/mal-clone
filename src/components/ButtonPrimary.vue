<template>
  <button
    @click="click"
    class="bg-dark-tertiary mt-5 w-28 xl:w-36 rounded-sm h-10 hover:bg-dark-primary hover:scale-105 transition-all ease-in-out hover:border hover:border-text-white"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonPrimary",
  props: {
    text: String,
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>
