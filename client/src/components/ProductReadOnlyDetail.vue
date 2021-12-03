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
      <div>
        <b-input-group>
          <b-form-rating id="rating-inline" inline :value="product.stars" disabled show-value></b-form-rating>
          <b-input-group-append>
            <b-input-group-text class="justify-content-center" style="min-width: 3em;">
              {{ product.ratesCount }}
            </b-input-group-text>
          </b-input-group-append>
        </b-input-group>
      </div>

      </b-form-group>
    </b-col>

  </b-row>
</template>

<script>
export default {
  name: "ProductReadOnlyDetail",
  props: {
    product: Object
  }
}
</script>

<style scoped>

</style>