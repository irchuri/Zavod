<template>
  <footer class="site-footer">
    <div class="footer-wrapper">
      <div class="column contacts">
        <h3>Контакты</h3>
        <p>
          <strong> {{ showPhone ? '+7 (8442) 77-24-52' : "+7 (8442) 77-XX-XX" }}</strong>
          &nbsp;&nbsp;
          <span class="reveal" @click="togglePhone">
            {{ showPhone ? 'Скрыть номер' : 'Показать номер' }}
          </span>
        </p>
        <p><a href="mailto:volgomet@steelpro.ru">volgomet@steelpro.ru</a></p>
        <p>г. Волгоград, пр-т Металлургов, д. 5</p>
        <p>
          Время работы:<br />
          пн–пт 8:30–17:30<br />
          сб, вс — выходной
        </p>
        <p><a href="#">Все контакты</a></p>
        <p class="copyright">© Волгомет, 1991–2025</p>
      </div>

      <div class="column buyers">
        <h3>Покупателям</h3>
        <a href="#">Продукция</a><br />
        <a href="#">О нас</a><br />
        <a href="#">Технологии</a><br />
        <a href="#">Доставка и оплата</a><br />
        <a href="#">Сертификаты</a><br />
        <a href="#">Контакты</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showPhone = ref(false)

function togglePhone() {
  showPhone.value = !showPhone.value
}
</script>


<style scoped lang="scss">
.site-footer {
  background-color: rgba(0, 0, 0, 0.4); // полупрозрачный тёмный
  backdrop-filter: blur(10px);         // блюр заднего фона
  -webkit-backdrop-filter: blur(10px); // для Safari
  color: #ccc;
  padding: 2rem;
  font-size: 0.95rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);


 a {
  color: #ccc;
  text-decoration: none;
  display: inline-block;
  margin: 0.4rem 0;
  transition: color 0.2s, text-shadow 0.2s;

  &:hover {
    color: white;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
}



  .footer-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: flex-start;
  }

  .column {
    flex: 1 1 250px;
    min-width: 240px;

    h3 {
      color: white;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

    p {
      margin: 0.3rem 0;
    }
  }

  .reveal {
    color: #888;
    font-size: 0.9rem;
    font-style: italic;
  }

  .copyright {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #777;
  }
}
</style>
