<template>
  <nav class="navbar">
  <div class="logo">
    <img src="@/assets/logo.svg" alt="Логотип Волгомет" class="logo-icon" />
  </div>  
    <div class="nav-links">
      <router-link to="/">
        <span class="material-icons">home</span> Главная
      </router-link>
      <router-link to="/about">
        <span class="material-icons">info</span> О заводе
      </router-link>
      <router-link to="/products">
        <span class="material-icons">inventory_2</span> Продукция
      </router-link>
      <router-link to="/contacts">
        <span class="material-icons">contact_mail</span> Контакты
      </router-link>
      <!-- <router-link to="/technologies">
      <span class="material-icons">precision_manufacturing</span> Технологии
      </router-link> -->
      <!-- <router-link to="/partnership">
      <span class="material-icons">handshake</span> Партнёрам
      </router-link>
      <router-link to="/news">
      <span class="material-icons">newspaper</span> Новости
      </router-link> -->
    </div>
  </nav>
</template>


<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 10;

  .logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    .logo-icon {
      height: 15%;
      width: 15%;
      object-fit: contain;
      display: block;
    }

    .logo-text {
      font-size: 1.2rem;
      font-weight: 600;
      color: #333;
    }
  }

  .nav-links {
    display: flex;
    flex-wrap: wrap; // чтобы не ломалось при маленьком экране
    gap: 1.5rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #333;
      font-weight: 500;
      text-decoration: none;
      font-size: 1rem;
      padding: 0.5rem 0.8rem;
      border-radius: 0.4rem;
      transition: background-color 0.2s, color 0.2s;
      white-space: nowrap;

      .material-icons {
        font-size: 1.2rem;
        min-width: 1.2rem; // иконки не сжимаются
        text-align: center;
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
}
</style>
