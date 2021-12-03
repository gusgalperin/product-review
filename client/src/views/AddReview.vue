<template>
  <div>
    <b-row>
      <add-product-review-form :productId="productId"></add-product-review-form>
    </b-row>
  </div>
</template>

<script>
  import AddProductReviewForm from "../components/AddProductReviewForm";

  export default {
    name: "AddReview",
    props: {
      productId: String
    },
    components: {
      AddProductReviewForm
    }
  }
</script>

<style scoped>

</style>