<template>
  <main class="contacts-page">
    <div class="hero">
      <h1>Контакты</h1>
    </div>
    <section class="contacts">
      <div
        class="contact-item"
        v-for="(contact, index) in contacts"
        :key="index"
      >
        <h2>{{ contact.title }}</h2>
        <p v-if="contact.phone">
          <strong>
            {{ showPhones[index] ? contact.phone : contact.maskedPhone }}
          </strong>
          &nbsp;&nbsp;
          <span class="reveal" @click="togglePhone(index)">
            {{ showPhones[index] ? 'Скрыть номер' : 'Показать номер' }}
          </span>
        </p>
        <p v-if="contact.email">
          <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        </p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const contacts = [
  {
    title: 'Отдел кадров',
    phone: '+7 (8442) 77-24-52',
    maskedPhone: '+7 (8442) 77-XX-XX',
  },
  {
    title: 'Отдел продаж',
    phone: '+7 (8442) 77-24-51',
    maskedPhone: '+7 (8442) 77-XX-XX',
  },
   {
    title: 'Отдел IT',
    phone: '+7 (8442) 77-24-50',
    maskedPhone: '+7 (8442) 77-XX-XX',
  },
  {
    title: 'Email',
    email: 'volgomet@steelpro.ru',
  },
]

const showPhones = reactive(contacts.map(c => false))

function togglePhone(index: number) {
  showPhones[index] = !showPhones[index]
}
</script>

<style scoped lang="scss">
.hero {
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }
}

.contacts-page {
  position: relative;
  padding: 2rem;
  background-color: transparent;
  color: white;

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;
    margin: 0 auto;

            .contact-item {
        background-color: rgba(0, 0, 0, 0.3);
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        transition: background-color 0.3s ease;
        backdrop-filter: blur(5px);

        h2 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
            color: white;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
        }

        p {
            font-size: 1.2rem;
            color: white;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);

            .reveal {
            cursor: pointer;
            color: white;
            text-decoration: none;

            &:hover {
                color: #ccc;
            }
            }
        }

        a {
            color: white;
            text-decoration: underline;

            &:hover {
            color: #ccc;
            }
        }
    }
  }
}


</style>