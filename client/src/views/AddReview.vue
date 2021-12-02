<template>
  <div>
    <b-row>
      <add-product-review-form></add-product-review-form>
    </b-row>
  </div>
</template>

<script>
  import AddProductReviewForm from "../components/AddProductReviewForm";

  export default {
    name: "AddReview",
    components: {
      AddProductReviewForm
    }
  }
</script>

<style scoped>

</style>