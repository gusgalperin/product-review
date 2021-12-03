<template>
  <b-row>

    <b-col cols="3">
      <b-form-group id="name" label="Nombre" label-for="name">
        <b-form-input
            id="name"
            type="text"
            placeholder="Nombre"
            v-model="product.name"
            disabled
        ></b-form-input>
      </b-form-group>
    </b-col>
    <b-col cols="3">
      <b-form-group id="brand" label="Marca" label-for="brand">
        <b-form-input
            id="brand"
            type="text"
            placeholder="Marca"
            v-model="product.brand"
            disabled
        ></b-form-input>
      </b-form-group>
    </b-col>
    <b-col cols="3">
      <b-form-group id="category" label="Categoria" label-for="category">
        <b-form-input
            id="category"
            type="text"
            placeholder="Categoria"
            v-model="product.category"
            disabled
        ></b-form-input>
      </b-form-group>
    </b-col>
    <b-col cols="3">
      <b-form-group id="stars" label="Rating" label-for="stars">
        <read-only-stars :stars="product.stars" :starsCount="product.ratesCount"></read-only-stars>
      </b-form-group>
    </b-col>

  </b-row>
</template>

<script>
import ReadOnlyStars from "./ReadOnlyStars";
export default {
  name: "ProductReadOnlyDetail",
  components: {
    ReadOnlyStars
  },
  props: {
    product: Object
  }
}
</script>

<style scoped>

</style>