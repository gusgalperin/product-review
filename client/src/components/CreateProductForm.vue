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
import ProductForm from "./ProductForm";

import { mapActions } from 'vuex'

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
    ...mapActions({
      addProduct: 'products/addProduct'
    }),
    triggerClose() {
      this.$emit("closeCreateModal")
    },
    async addNewProduct() {
      await this.addProduct(this.product)
      this.$emit("closeCreateModal")
      this.$emit("reloadDataTable")
      this.$emit("showSuccessAlert")
    }
  }
}
</script>

<style scoped>

</style>