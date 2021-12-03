<template>
  <b-table
    striped
    hover
    :items="reviews"
    :fields="fields"
    class="text-center"
  >
    <template #cell(user)="data">
      {{ data.item.userName }}
    </template>
    <template #cell(date)="data">
      {{ data.item.purchaseDate }}
    </template>
    <template #cell(price)="data">
      {{ data.item.price }}
    </template>
    <template #cell(stars)="data">
      <read-only-stars :stars="data.item.stars" :showCount="false"></read-only-stars>
    </template>
    <template #cell(comment)="data">
      {{ data.item.comment }}
    </template>
  </b-table>
</template>

<script>
  import ReadOnlyStars from "./ReadOnlyStars";
  export default {
    name: "ProductDetailTable",
    components: {
      ReadOnlyStars
    },
    props: {
      reviews: Array
    },
    data () {
      return {
        fields: [
          {
            key:"user",
            label:"Usuario",
            sortable: false
          },
          {
            key:"date",
            label:"Fecha de compra",
            sortable: false
          },
          {
            key:"price",
            label:"Precio pagado",
            sortable: false
          },
          {
            key:"stars",
            label:"Rating",
            sortable: false
          },
          {
            key:"comment",
            label:"Comentario",
            sortable: false
          }
        ]
      }
    },
    mounted() {
      console.log(this.reviews)
    }
  }
</script>

<style scoped>

</style>