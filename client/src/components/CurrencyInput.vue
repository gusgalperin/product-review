<template>
  <b-form-input type="text" ref="inputRef" :value="formattedValue"></b-form-input>
</template>

<script>
  import { useCurrencyInput } from 'vue-currency-input'

  export default {
    name: "CurrencyInput",
    props: {
      value: Number,
      options: Object
    },
    setup(props) {
      const { formattedValue, inputRef } = useCurrencyInput(props.options)
      return { inputRef, formattedValue }
    }
  }
</script>

<style scoped>

</style>