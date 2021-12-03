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
          <category-list-input name="category" :value="product.category" v-model="product.category"></category-list-input>
<!--          <b-form-input-->
<!--              id="category"-->
<!--              type="text"-->
<!--              placeholder="Categoria"-->
<!--              v-model="product.category"-->
<!--          ></b-form-input>-->
        </b-form-group>
      </b-col>

    </b-row>

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
  import CategoryListInput from "./CategoryListInput";
  export default {
    name: "EditProductForm",
    components: {
      CategoryListInput
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