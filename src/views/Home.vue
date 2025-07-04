<template>
  <main class="home-page page-background">
    <section class="hero">
      <h1>Добро пожаловать на Волгомет</h1>
      <p>Лидер в производстве высококачественной стали и инновационных решений.</p>
    </section>

    <section class="feature-section">
      <FeatureCard
        icon="build"
        title="Обработка металла"
        description="Резка, гибка, сварка под ваши задачи"
      />
      <FeatureCard
        icon="construction"
        title="Промышленная сталь"
        description="Конструкционная и инструментальная сталь"
      />
      <FeatureCard
        icon="verified"
        title="Сертифицировано"
        description="Соответствие международным стандартам"
      />
      <FeatureCard
        icon="precision_manufacturing"
        title="Современное оборудование"
        description="Инновации на каждом этапе производства"
      />
      <FeatureCard
        icon="psychology"
        title="Индивидуальный подход"
        description="Решения под нужды каждого клиента"
      />
      <FeatureCard
        icon="local_shipping"
        title="Быстрая логистика"
        description="Доставка точно в срок"
      />
    </section>

    <section class="cta">
      <button @click="$router.push('/contacts')">Свяжитесь с нами</button>
    </section>
  </main>
</template>

<script setup lang="ts">
import FeatureCard from '@/components/FeatureCard.vue'
</script>

<style scoped lang="scss">
.home-page {
  padding-bottom: 4rem;
  min-height: 100vh;
  overflow-x: hidden;
  text-align: center;

  .hero {
    padding-top: 5rem;
    margin-bottom: 3rem;

    p {
      font-size: 1.5rem;
      text-shadow: 1px 1px 3px black;
      margin-top: 0.5rem;
    }
  }

  .feature-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 2rem auto;
    max-width: 1200px;
    padding: 0 1rem;

    :deep(.feature-card) {
      background-color: rgba(0, 0, 0, 0.12);
      aspect-ratio: 1 / 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }

    @media (max-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }

  .cta {
    margin-top: 3rem;

    button {
      padding: 0.75rem 1.5rem;
      font-size: 1.5rem;
      background: #888;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #666;
      }
    }
  }
}
</style>
