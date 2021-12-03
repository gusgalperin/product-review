<template>
    <b-form-select
      :value="value"
      :name="name"
      :options="options"
      @input="onInput"
      @change="onChange" style="width: 320px;"></b-form-select>
</template>

<script>
  export default {
    name: "CategoryListInput",
    props: {
      value: String,
      name: String
    },
    data () {
      return {
        options: [
          { value: null, text: 'Categoría' },
          { value: 'Electro', text: 'Electro'},
          { value: 'Hogar', text: 'Hogar'},
          { value: 'Jardin', text: 'Jardin'}
        ]
      }
    },
    methods: {
      onInput(event) {
        this.$emit('input', event)
      },
      onChange(event) {
        this.$emit('input', event)
      }
    }
  }
</script>

<style scoped>

</style>