<template>
<!--  <b-navbar toggleable="lg" type="dark" variant="primary">-->
<!--    <b-container>-->
<!--      <b-row class="text-white">-->
<!--        <b-col cols="2">-->
<!--          <b-icon-shop class="h2"></b-icon-shop>-->
<!--        </b-col>-->
<!--        <b-col cols="7">-->
<!--          <span class="h3">Productos</span>-->
<!--        </b-col>-->
<!--        <b-col>-->
<!--          <router-link to="/" class="text-white">Home</router-link> |-->
<!--          <router-link to="/products/top" class="text-white">Top Productos</router-link> |-->
<!--          <router-link to="/about" class="text-white">About</router-link>-->
<!--        </b-col>-->
<!--      </b-row>-->
<!--    </b-container>-->
<!--  </b-navbar>-->

  <div id="nav">
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><b-icon-shop class="h2"></b-icon-shop> Product-Review</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">

          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/product/top/ranking" class="nav-link">Top Productos</router-link>
          <router-link to="/about"class="nav-link">About</router-link>
        </div>
      </div>
    </nav>
  </div>

</template>

<script>
export default {
  name: "HeaderBar"
}
</script>

<style scoped>
  #nav {
    padding: 30px;
    text-align: center;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: whitesmoke;
    background: crimson;
    border-radius: .5rem;
  }
</style>