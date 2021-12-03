<template>
  <b-form class="mt-3">

    <product-form :product="product"></product-form>

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
import ProductForm from "./ProductForm";
export default {
  name: "CreateProductForm",
  components: {
    ProductForm
  },
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