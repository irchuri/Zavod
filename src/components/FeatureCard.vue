<template>
  <div class="feature-card">
    <span class="material-icons icon">{{ icon }}</span>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<style scoped lang="scss">
.feature-card {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  color: white;
  width: 100%;
  max-width: 300px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color:white;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.4;
  }
}
</style>
