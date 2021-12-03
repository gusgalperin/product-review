<template>
  <b-row>
    <b-col cols="4">
      <b-form-group id="category" label="Categoria" label-for="category">
        <category-list-input name="category" :value="product.category" v-model="product.category"></category-list-input>
      </b-form-group>
    </b-col>
    <b-col cols="4">
      <b-form-group id="name" label="Nombre" label-for="name">
        <b-form-input
            id="name"
            type="text"
            placeholder="Nombre"
            v-model="product.name"
        ></b-form-input>
      </b-form-group>
    </b-col>
    <b-col cols="4">
      <b-form-group id="brand" label="Marca" label-for="brand">
        <b-form-input
            id="brand"
            type="text"
            placeholder="Marca"
            v-model="product.brand"
        ></b-form-input>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
import CategoryListInput from "./CategoryListInput";
export default {
  name: "ProductForm",
  components: {
    CategoryListInput
  },
  props: {
    product: Object
  }
}
</script>

<style scoped>

</style>