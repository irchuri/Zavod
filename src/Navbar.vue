<template>
  <nav class="navbar">
    <router-link to="/">
      <span class="material-icons">home</span> Главная
    </router-link>
    <router-link to="/about">
      <span class="material-icons">info</span> О заводе
    </router-link>
    <router-link to="/products">
      <span class="material-icons">inventory_2</span> Продукция
    </router-link>
    <router-link to="/technologies">
      <span class="material-icons">precision_manufacturing</span> Технологии
    </router-link>
    <router-link to="/partnership">
      <span class="material-icons">handshake</span> Партнёрам
    </router-link>
    <router-link to="/news">
      <span class="material-icons">newspaper</span> Новости
    </router-link>
    <router-link to="/contacts">
      <span class="material-icons">contact_mail</span> Контакты
    </router-link>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: #333;
    font-weight: 500;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.4rem 0.6rem;
    border-radius: 0.4rem;
    transition: background-color 0.2s, color 0.2s;

    .material-icons {
      font-size: 1.1rem;
    }

    &:hover {
      background-color: #f0f0f0;
      color: #007acc;
    }

    &.router-link-active {
      color: #007acc;
      font-weight: 600;
    }
  }
}
</style>
