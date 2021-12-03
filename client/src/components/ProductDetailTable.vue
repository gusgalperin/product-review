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
      <div>
        <b-input-group>
          <b-form-rating id="rating-inline" inline :value="data.item.stars" disabled show-value></b-form-rating>
        </b-input-group>

      </div>
    </template>
    <template #cell(comment)="data">
      {{ data.item.comment }}
    </template>
  </b-table>
</template>

<script>
  export default {
    name: "ProductDetailTable",
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