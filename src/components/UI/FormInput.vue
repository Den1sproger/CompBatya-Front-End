<template>
  <input :value="modelValue" @input="updateInput">
</template>


<script>
export default {
  props: {
    modelValue: {
      type: String,
      require: true,
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>


<style lang="scss" scoped>
input {
  width: 100%;
  height: 40px;
  border: 1px solid $border-dark;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 16px;
  color: $text-dark;
}
</style>
