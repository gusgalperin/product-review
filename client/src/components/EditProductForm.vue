<template>
  <b-form class="mt-3">

    <product-form :product="product"></product-form>

    <b-row class="mt-4">
      <b-col cols="3">
        <b-button class="px-5" variant="warning" @click="editProduct">Editar Producto</b-button>
      </b-col>
      <b-col>
        <b-button variant="warning" @click="triggerClose">Cerrar</b-button>
      </b-col>
    </b-row>

  </b-form>
</template>

<script>
  import ProductForm from "./ProductForm";

  import { mapGetters, mapActions } from 'vuex'

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
    computed: {
      ...mapGetters({
        productById: 'products/productById'
      })
    },
    methods :{
      ...mapActions({
        updateProduct: 'products/updateProduct'
      }),
      triggerClose() {
        this.$emit("closeEditModal");
      },
      getProductById() {
        this.product = this.productById(this.productId)
      },
      async editProduct() {
        await this.updateProduct(this.product)
        this.$emit("closeEditModal")
        this.$emit("reloadDataTable")
        this.$emit("showAlertUpdate")
      }
    }
  }
</script>

<style scoped>

</style>