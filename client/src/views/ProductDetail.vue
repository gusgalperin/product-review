<template>
  <div>
    <product-read-only-detail :product="product"></product-read-only-detail>
    <p></p>
    <p></p>
    <p></p>
    <product-detail-table :reviews="product.reviews"></product-detail-table>

    <b-row class="mt-4">
      <b-col>
        <b-button variant="warning" @click="back">Volver</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import ProductReadOnlyDetail from "../components/ProductReadOnlyDetail";
  import ProductDetailTable from "../components/ProductDetailTable";
  import axios from "axios";
  export default {
    name: "ProductDetail",
    components: {
      ProductReadOnlyDetail,
      ProductDetailTable
    },
    props: {
      productId: String
    },
    data () {
      return {
        product: {},
      }
    },
    mounted() {
      this.getProductById()
    },
    methods: {
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
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

</style>