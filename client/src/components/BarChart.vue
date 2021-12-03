<template>
  <vue-bar-graph
    :width="1200"
    :height="300"
    :show-values="true"
    :show-y-axis="true"
    :show-x-axis="true"
    :points="points" />
</template>

<script>
  import VueBarGraph from 'vue-bar-graph'
  export default {
    name: "BarChart",
    components: {
      VueBarGraph
    },
    props: {
      dataSet: { default: [] },
    },
    computed: {
      points() {
        let points = []
        for(let index in this.dataSet){
          for(let name in (this.dataSet[index])) {
            let value = this.dataSet[index][name]
            points.push({
              label: name,
              value: value
            })
          }
        }

        return points
      }
    }
  }
</script>

<style scoped>

</style>