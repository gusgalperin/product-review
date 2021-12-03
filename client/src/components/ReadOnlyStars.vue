<template>
  <div>
    <div v-if="stars > 0">
      <b-input-group>
        <b-form-rating id="rating-inline" inline :value="stars" disabled show-value></b-form-rating>
        <b-input-group-append v-if="showCount">
          <b-input-group-text class="justify-content-center" style="min-width: 3em;">
            {{ starsCount }}
          </b-input-group-text>
        </b-input-group-append>
      </b-input-group>
    </div>
    <div v-if="stars == 0">
      <span> [aún no hay reviews]</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadOnlyStars",
  props:{
    stars: Number,
    starsCount: Number,
    showCount:{
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>