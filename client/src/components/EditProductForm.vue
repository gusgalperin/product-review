<template>
  <b-form class="mt-3">

    <product-form :product="product"></product-form>

    <b-row class="mt-4">
      <b-col cols="3">
        <b-button class="px-5" variant="warning" @click="updateProduct">Editar Producto</b-button>
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
    name: "EditProductForm",
    components: {
      ProductForm
    },
    props: {
      productId: String
    },
    data () {
      return {
        product: {}
      }
    },
    mounted() {
      this.getProductById()
    },
    methods :{
      triggerClose() {
        this.$emit("closeEditModal");
      },
      getProductById() {
        axios
          .get(`http://localhost:8010/api/products/${this.productId}`)
          .then((response) => {
            this.product = response.data
          })
          .catch((err) => {
            console.log(err)
          })
      },
      updateProduct() {
        axios
          .put(`http://localhost:8010/api/products/${this.productId}`, this.product)
          .then((response) => {
            this.$emit("closeEditModal")
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