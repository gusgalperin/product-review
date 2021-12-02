<template>
  <b-form class="mt-3">
    <b-row>

      <b-col cols="6">
        <b-form-group id="name" label="Nombre" label-for="name">
          <b-form-input
            id="name"
            type="text"
            placeholder="Nombre"
            v-model="product.name"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group id="brand" label="Marca" label-for="brand">
          <b-form-input
              id="brand"
              type="text"
              placeholder="Marca"
              v-model="product.brand"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group id="category" label="Categoria" label-for="category">
          <b-form-input
              id="category"
              type="text"
              placeholder="Categoria"
              v-model="product.category"
          ></b-form-input>
        </b-form-group>
      </b-col>

    </b-row>

    <b-row class="mt-4">
      <b-col cols="3">
        <b-button class="px-5" variant="warning" @click="addNewProduct">Agregar Producto</b-button>
      </b-col>
      <b-col>
        <b-button variant="warning" @click="triggerClose">Cerrar</b-button>
      </b-col>
    </b-row>

  </b-form>
</template>

<script>
import axios from 'axios'
export default {
  name: "CreateProductForm",
  data () {
    return {
      product: {}
    }
  },
  methods:{
    triggerClose() {
      this.$emit("closeCreateModal")
    },
    addNewProduct() {
      axios
        .post("http://localhost:8010/api/products", this.product)
        .then((response) => {
          console.log(response.data)
          this.$emit("closeCreateModal")
          this.$emit("reloadDataTable")
          this.$emit("showSuccessAlert")
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>