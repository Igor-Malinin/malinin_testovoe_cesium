<template>
  <div id="app">
    <div class="main-app">
      <the-sidebar/>
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import TheSidebar from "@/components/TheSidebar.vue";
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway:wght@400;700&family=Roboto:wght@300&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $font_main;
  background: $dark;
  color: $white;
  font-size: 16px;
}

a {
  color: $white;
}

.main-app {
  display: grid;
  grid-template-columns: 200px 1fr;
}
</style>