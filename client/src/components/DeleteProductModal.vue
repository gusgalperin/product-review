<template>
  <div>
    <b-row class="mt-2 mb-3">
      <h6 class="class-secondary">
        Estas seguro que queres borral el producto?
      </h6>
    </b-row>
    <b-row class="mt-2 mb-3">
      <p class="text-danger">
        Esta accion no es reversible
      </p>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <b-button
          variant="danger"
          @click="removeProduct">Eliminar Producto</b-button>
      </b-col>
      <b-col>
        <b-button
          variant="waring"
          @click="triggerClose">Cerrar</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "DeleteProductModal",
    props: {
      productId: String
    },
    methods: {
      ...mapActions({
        deleteProduct: 'products/deleteProduct'
      }),
      triggerClose() {
        this.$emit("closeDeleteModal")
      },
      async removeProduct() {
        await this.deleteProduct(this.productId)
        this.$emit("reloadDataTable")
        this.$emit("showDeleteAlert")
        this.$emit("closeDeleteModal")
      }
    }
  }
</script>

<style scoped>

</style>