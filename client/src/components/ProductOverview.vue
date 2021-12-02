<template>
  <div>
    <b-row class="text-center">
      <b-col>
        <div
          class="filter-card p-3"
          :class="{
            'bg-active-filter': totalIsActive,
            'bg-light': !totalIsActive
          }"
          @click="totalProductsIsActiveFilter"
        >
          <h6>Total de los productos</h6>
          <h4><strong>{{ totalProducts }}</strong></h4>
        </div>
      </b-col>

      <b-col>
        <div
          class="filter-card p-3"
          :class="{
            'bg-active-filter': activeIsActive,
            'bg-light': !activeIsActive
          }"
          @click="activeProductsIsActiveFilter">
          <h6 class="text-secondary">Productos activos</h6>
          <h4><strong>{{ activeProducts }}</strong></h4>
        </div>
      </b-col>

    </b-row>
  </div>
</template>

<script>
export default {
  name: "ProductOverview",
  props: {
    totalProducts: Number,
    activeProducts: Number
  },
  data() {
    return {
      totalIsActive: true,
      activeIsActive: false
    }
  },
  methods: {
    totalProductsIsActiveFilter() {
      this.totalIsActive = true
      this.activeIsActive = false
      this.$emit("totalProductsIsActive")
    },
    activeProductsIsActiveFilter() {
      this.totalIsActive = false
      this.activeIsActive = true
      this.$emit("activeProductsIsActive")
    }
  }
}
</script>

<style scoped>
  .filter-card:hover{
    cursor: pointer;
    text-decoration: underline;
  }

  .bg-active-filter {
    background-color: #e9f1fe;
    color: #074297
  }
</style>