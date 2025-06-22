<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './Navbar.vue' 

export default defineComponent({
  components: {
    Navbar
  }
})
</script>

<style lang="scss">
/* сюда стили */
</style>
