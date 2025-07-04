<template>
  <main class="product-page page-background">
    <section class="hero">
      <h1>Продукты</h1>
    </section>

    <section class="glass-block preface">
      <div class="text-block">
        <p>
          Завод «Волгомет» производит широкий ассортимент металлопродукции, востребованной в строительстве, машиностроении, судостроении и других отраслях.
        </p>

        <section class="features">
          <div class="feature-card" v-for="(item, i) in features" :key="i">
            <span class="material-icons icon">{{ item.icon }}</span>
            <h2>{{ item.title }}</h2>
          </div>
        </section>
      </div>
    </section>

    <section class="products">
      <div class="product-card" v-for="(product, i) in products" :key="i">
        <img :src="product.image" :alt="product.title" class="product-image" />
        <h2 class="title">{{ product.title }}</h2>

        <div class="card-expand">
          <div class="product-details">
            <p class="desc">{{ product.description }}</p>
            <ul class="specs">
              <li v-for="(spec, index) in product.specs" :key="index">{{ spec }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const features = [
  { icon: "shield", title: "Надёжность и качество" },
  { icon: "inventory_2", title: "Крупные объёмы поставок" },
  { icon: "local_shipping", title: "Доставка по всей России" },
]

const products = [
  {
    title: "Арматура",
    description: "Горячекатаная арматура различных диаметров. Применяется для армирования железобетонных конструкций.",
    specs: ["Диаметр: от 8 до 32 мм", "Длина: от 6 до 12 м"],
    image: new URL('@/assets/products/armatura.jpg', import.meta.url).href,
  },
  {
    title: "Листовой прокат",
    description: "Плоский стальной прокат — гладкий и рифлёный. Поставляется в листах и рулонах.",
    specs: ["Толщина: от 0,5 до 12 мм", "Типы: обычная, колонная, усиленная"],
    image: new URL('@/assets/products/prokat.jpg', import.meta.url).href,
  },
  {
    title: "Балка двутавровая",
    description: "Несущие элементы для строительных каркасов и перекрытий.",
    specs: ["ГОСТ 8239-89 / 26020-83", "Типы: обычная, колонная, усиленная"],
    image: new URL('@/assets/products/balka.png', import.meta.url).href,
  },
  {
    title: "Круг стальной",
    description: "Цельнотянутый и калиброванный круг из углеродистой и легированной стали.",
    specs: ["Диаметры: от 10 до 100 мм"],
    image: new URL('@/assets/products/krug.jpg', import.meta.url).href,
  },
  {
    title: "Швеллер",
    description: "Гнутый и горячекатаный швеллер. Используется в машиностроении, строительстве, производстве металлоконструкций.",
    specs: ["Типы: П-образный, с уклоном, равнополочный"],
    image: new URL('@/assets/products/shveller.jpg', import.meta.url).href,
  },
  {
    title: "Трубы стальные",
    description: "Бесшовные и электросварные трубы круглого сечения",
    specs: ["Диаметр: от 20 до 530 мм", "Назначение: водопроводные, газовые, конструкционные"],
    image: new URL('@/assets/products/trubi.jpg', import.meta.url).href,
  },
]
</script>

<style scoped lang="scss">
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1100px;
  margin: 2rem auto;
}

.product-card {
  position: relative;
  width: 280px;
  height: 300px;
  padding: 1.5rem;
  border-radius: 1rem;
  background: #2e2e2e;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: visible;
  text-align: center;
  transition: transform 0.2s ease;
  box-sizing: border-box;
  z-index: 1;

  &:hover {
    transform: translateY(-5px);
    z-index: 10;
  }

  .product-image {
    max-width: 100%;
    border-radius: 1rem;
    margin-bottom: 1rem;
    object-fit: contain;
    height: 150px;
  }

  .title {
    font-size: min(1.8rem, 5.5vw);
    margin: 0.5rem 0;
    color: white;
    text-shadow: 2px 2px 5px #000;
    text-align: center;
  }

  .card-expand {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #2e2e2e;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 2;
    border-radius: 0;

    &::before {
      content: "";
      position: absolute;
      top: -10px;
      left: 0;
      width: 100%;
      height: 20px;
      background: #2e2e2e;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      z-index: -1;
    }
  }

  &:hover .card-expand {
    opacity: 1;
    pointer-events: auto;
  }

  .product-details {
    .desc {
      font-size: 1.3rem;
      margin: 1rem 0;
      text-shadow: 1px 1px 3px #000;
      color: white;
    }

    .specs {
      list-style: disc inside;
      font-size: 1.1rem;
      line-height: 1.4;
      padding-left: 0;
      text-shadow: 1px 1px 3px #000;
      color: white;
    }
  }
}

@keyframes pulseGlow {
  0% {
    background-size: 100% 100%;
  }
  50% {
    background-size: 220% 220%;
  }
  100% {
    background-size: 100% 100%;
  }
}
</style>
