<template>
  <div>

    <b-row>
      <b-form class="mt-3">
        <b-row>

          <b-col cols="4">
            <b-form-group id="name" label="Nombre" label-for="name">
              <b-form-input
                  id="name"
                  type="text"
                  placeholder="Nombre"
                  v-model="product.name"
                  disabled
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="4">
            <b-form-group id="brand" label="Marca" label-for="brand">
              <b-form-input
                  id="brand"
                  type="text"
                  placeholder="Marca"
                  v-model="product.brand"
                  disabled
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="4">
            <b-form-group id="category" label="Categoria" label-for="category">
              <b-form-input
                  id="category"
                  type="text"
                  placeholder="Categoria"
                  v-model="product.category"
                  disabled
              ></b-form-input>
            </b-form-group>
          </b-col>

        </b-row>

      </b-form>

    </b-row>
    <b-row>


      <b-form class="mt-3">
        <b-col cols="4">
          <b-form-group id="userName" label="Nombre" label-for="userName">
            <b-form-input
                id="userName"
                type="text"
                placeholder="Ingresa tu nombre"
                v-model="user.name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <p></p>
        <b-col cols="4">
          <b-form-group id="date" label="Fecha" label-for="date">
            <b-form-input
                id="date"
                type="date"
                placeholder="Cuando lo compraste"
                v-model="review.purchaseDate"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <p></p>
        <b-col cols="4">
          <b-form-group id="price" label="Precio" label-for="price">
            <currency-input v-model="review.price" placeholder="Cuanto lo pagaste" :options="{ currency: 'ARS' }"></currency-input>
          </b-form-group>
        </b-col>
        <p></p>
        <b-col cols="4">
          <b-form-group id="rating" label="Rating" label-for="rating">
              <b-form-rating id="rating-inline" variant="success" inline v-model="review.stars"></b-form-rating>
          </b-form-group>
        </b-col>
        <p></p>
        <b-col cols="4">
          <b-form-group id="comment" label="Comentario" label-for="comment">
            <b-form-textarea
                id="comment"
                type="text"
                placeholder="Comentario.."
                v-model="review.comment"
                rows="3"
                max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-form>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="3">
        <b-button class="px-5" variant="primary" @click="addNewReview">Enviar</b-button>
      </b-col>
      <b-col>
        <b-button variant="warning" @click="back">Volver</b-button>
      </b-col>
    </b-row>

  </div>
</template>

<script>
  import axios from "axios";
  import CurrencyInput from "./CurrencyInput";

  export default {
    name: "AddProductReviewForm",
    components: {
      CurrencyInput
    },
    props: {
      productId: String
    },
    data () {
      return {
        product: {},
        user: {},
        review: {
          stars: 5
        }
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
      addNewReview() {
        axios
          .post('http://localhost:8010/api/users/', this.user)
          .then((response) => {
            this.user.id = response.data.id
            this.review.userId = this.user.id

            axios
              .post(`http://localhost:8010/api/products/${this.productId}/review`, this.review)
              .then((response) => {
                this.$router.back()
              })
              .catch((err) => {
                console.log(err)
              })
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