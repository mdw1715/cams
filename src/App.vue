<template>
  <div class="container">
    <div>
      <h1>Critical Asset Management System</h1>
      <hr />
      <nav-bar></nav-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    navBar: NavBar,
  },
};
</script>

<style></style>
