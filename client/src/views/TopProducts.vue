<template>
  <div>
    <b-row>
      <bar-chart
          class="chart"
          :dataSet="products"
          :marginLeft="40"
          :marginTop="40"
          :tickCount="5"
          :barPadding="0.5" />
    </b-row>
  </div>
</template>

<script>
  import BarChart from "../components/BarChart";
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: "TopProducts",
    components: {
      BarChart
    },
    data(){
      return {
        data: []
      }
    },
    created () {
      document.title = 'top-products';
    },
    async mounted() {
      await this.fetchProducts()
    },
    computed: {
      ...mapGetters({
        products: 'products/topProducts'
      })
    },
    methods: {
      ...mapActions({
        fetchProducts: 'products/fetchTopProducts'
      })
    }
  }
</script>

<style scoped>

</style>