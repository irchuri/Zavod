<template>
    <nav class="navbar">
        <router-link to="/">Домой</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/contacts">Контакты</router-link>
        <router-link to="/news">Новости</router-link>
        <router-link to="/partnership">Партнёрам</router-link>
        <router-link to="/products">Продукция</router-link>
        <router-link to="/technologies">Технологии</router-link>
    </nav>
</template>
<script lang="ts">
</script>
<style scoped lang="scss">
.navbar {
  display: flex;
  gap: 1.5rem;
  padding: 1rem 2rem;
  background-color: #1f1f1f;
  a {
    color: #ddd;
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
}
</style>