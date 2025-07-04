<template>
  <div class="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './Navbar.vue' 
import Footer from './Footer.vue'

export default defineComponent({
  components: {
    Navbar,
    Footer
  }
})
</script>

<style lang="scss">
body {
  background: url('@/assets/factory-bg.jpg') center/cover no-repeat fixed;
  margin: 0;
}

</style>
