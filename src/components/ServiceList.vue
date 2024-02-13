<template>
  <section id="services">
    <h2>Услуги</h2>

    <div class="services" v-if="!isServiceLoading && !isError">
      <div class="services__desktop">
        <h3>Компьютерный сервис</h3>
        <ul class="services-list" v-if="desktopServices">
          <li v-for="item in desktopServices" :key="item">{{ item.name }} <strong>{{ item.price }} руб.</strong></li>
        </ul>
      </div>
      <div class="services__mobile">
        <h3>Мобильные устройства</h3>
        <ul class="services-list">
          <li v-for="item in mobileServices" :key="item">{{ item.name }} <strong>{{ item.price }} руб.</strong></li>
        </ul>
      </div>
    </div>

    <div class="loading" v-else-if="isServiceLoading">
      <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve">
        <g>
          <circle cx="16" cy="64" r="16" fill="#dc143c"/>
          <circle cx="16" cy="64" r="16" fill="#e8627d" transform="rotate(45,64,64)"/>
          <circle cx="16" cy="64" r="16" fill="#f09cad" transform="rotate(90,64,64)"/>
          <circle cx="16" cy="64" r="16" fill="#f8d0d8" transform="rotate(135,64,64)"/>
          <circle cx="16" cy="64" r="16" fill="#fbe3e8" transform="rotate(180,64,64)"/>
          <circle cx="16" cy="64" r="16" fill="#fbe3e8" transform="rotate(225,64,64)"/>
          <circle cx="16" cy="64" r="16" fill="#fbe3e8" transform="rotate(270,64,64)"/>
          <circle cx="16" cy="64" r="16" fill="#fbe3e8" transform="rotate(315,64,64)"/>
          <animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite"></animateTransform>
        </g>
      </svg>
      <p><strong>Загрузка...</strong></p>
    </div>

    <p v-else>Не удалось загрузить список услуг&#40;&#40;&#40;<br>Попробуйте обновить страницу</p>

    <p><strong>И это еще не все!</strong><br>Оставьте заявку, с вами свяжется менеджер и сориентрует вас по цене</p>
  </section>
</template>


<script>
import axios from 'axios';


export default {
  data() {
    return {
      isServiceLoading: false,
      isError: false,
      desktopServices: [],
      mobileServices: [],
    }
  },
  methods: {
    async fetchServices() {
      const url = 'http://127.0.0.1:8000/api/v1/services/?page_size=30';
      try {
        this.isServiceLoading = true;
        const response = await axios.get(url);

        // sort data by service profile
        for (let item of response.data.results) {
          if (item.profile === 'desktop' && this.desktopServices.length < 10) {
            this.desktopServices.push(item);
          } else if (this.mobileServices.length < 10) {
            this.mobileServices.push(item);
          }
        }

        // if data is empty
        if (this.desktopServices.length < 1 || this.mobileServices.length < 1) {
          throw new Error();
        }
      } catch (e) {
        this.isError = true;
      } finally {
        this.isServiceLoading = false;
      }
    }
  },
  mounted() {
    this.fetchServices();
  }
}
</script>


<style lang="scss" scoped>
#services {
  color: $text-dark;
  box-shadow: 3px 3px 10px $border-dark, -3px -3px 10px $border-dark;
  width: 100%;
  min-height: 500px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

.services {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}

.services__desktop,
.services__mobile {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.loading {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>