<template>
  <main class="home-page">
    <section class="hero">
      <h1>Добро пожаловать на Волгомет</h1>
      <p>Лидер в производстве высококачественной стали и инновационных решений.</p>
    </section>

    <section class="capabilities">
      <h2>Наши возможности</h2>
      <ul>
        <li>Производство конструкционной и инструментальной стали</li>
        <li>Металлообработка: резка, гибка, сварка</li>
        <li>Сертификаты качества и соответствие международным стандартам</li>
      </ul>
    </section>

    <section class="why-us">
      <h2>Почему именно мы?</h2>
      <ul>
        <li>Современное оборудование и квалифицированный персонал</li>
        <li>Гибкость производства и индивидуальные решения</li>
        <li>Клиентская поддержка и оперативная логистика</li>
      </ul>
    </section>

    <section class="cta">
      <button @click="$router.push('/contacts')">Свяжитесь с нами</button>
    </section>
  </main>
</template>

<script setup lang="ts">
// Здесь позже можно будет подключить слайдер или другие компоненты.
</script>

<style scoped lang="scss">
.home-page {
  .hero {
    padding: 2rem;
    background-color: #dadada;
    color: #303030;
    text-align: center;
    font-size: 2rem;
    
  }
  section {
    padding: 2rem;
    h2 {
      margin-bottom: 1rem;
    }
    ul {
      list-style: disc inside;
    }
  }
  .cta {
    text-align: center;
    button {
      padding: 0.75rem 1.5rem;
      font-size: 1.1rem;
      background: #007acc;
      color: #fff;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      &:hover {
        background: darken(#007acc, 10%);
      }
    }
  }
  .capabilities, .why-us {
    background-color: #f0f0f0;
    margin: 1rem 0;
    border-radius: 0.5rem;
    h2 {
      font-family: var(--font-main);
      color: inherit;
    }
    li {
      margin: 0.5rem 0;
      font-size: 1.1rem;
      font-family: var(font--alt);
    }
    
  }
}
</style>
