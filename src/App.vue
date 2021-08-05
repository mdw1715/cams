<template>
  <div class="container">
    <div>
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
