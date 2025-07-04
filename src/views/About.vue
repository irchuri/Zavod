<template>
  <main class="about-page page-background">
    <section class="hero" style="margin-top: -5rem">
      <h1>О нас</h1>
    </section>

    <section class="glass-block mission">
      <div class="text-block">
        <p>
          Завод «Волгомет» — надёжный производитель металлопродукции с более чем 40-летним опытом работы в сталелитейной отрасли. Мы специализируемся на выпуске высококачественной стали для строительства, машиностроения и других отраслей промышленности.
        </p>
        <p>
          Наша миссия — обеспечивать партнёров прочной и надёжной сталью, соответствующей современным стандартам качества и безопасности. Благодаря профессиональной команде, современному оборудованию и строгому контролю на всех этапах производства, продукция «Волгомет» заслужила доверие клиентов по всей стране.
        </p>
        <p>
          Мы стремимся к устойчивому развитию, инвестируем в экологичные технологии и заботимся о безопасности труда. «Волгомет» — это сила, проверенная временем.
        </p>
      </div>
      <div class="image-block">
        <SwiperSlider :slides="slides" />
      </div>
    </section>

    <section class="banner">
      <div class="banner-text">
        Надёжность. Качество. Волгомет.
      </div>
    </section>

    <section class="features">
      <div class="feature-card" v-for="(item, i) in features" :key="i">
        <span class="material-icons icon">{{ item.icon }}</span>
        <h2>{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import SwiperSlider from '@/components/SwiperSlider.vue'
import slide1 from '@/assets/slider/about-us.jpg'
import slide2 from '@/assets/slider/slide2.jpg'
import slide3 from '@/assets/slider/slide3.jpg'

const slides = [slide1, slide2, slide3]

const features = [
  {
    icon: "verified",
    title: "Высокое качество",
    desc: "Контроль на всех этапах производства",
  },
  {
    icon: "history",
    title: "Опыт более 40 лет",
    desc: "Нас выбирают с 1980-х годов",
  },
  {
    icon: "eco",
    title: "Экологичные технологии",
    desc: "Ответственность перед будущим",
  },
]
</script>

<style lang="scss">
.about-page {
}

.mission {
}

.image-block {
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.banner {
  background: none;
  height: auto;
  padding: 3rem 1rem;
  text-align: center;

  .banner-text {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 2rem;
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 1rem;
    backdrop-filter: blur(4px);
  }
}
</style>
