<template>
  <div>
    <b-row>
      <bar-chart
          class="chart"
          :dataSet="data"
          :marginLeft="40"
          :marginTop="40"
          :tickCount="5"
          :barPadding="0.5" />
    </b-row>
  </div>
</template>

<script>
  import BarChart from "../components/BarChart";
  import axios from "axios";
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
    mounted() {
      this.getTopProducts()
    },
    methods: {
      getTopProducts() {
        axios
          .get(`http://localhost:8010/api/products/chart/top`)
          .then((response) => {
            this.data = response.data
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