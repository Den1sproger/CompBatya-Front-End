<template>
  <section id="services">
    <h2>Услуги</h2>

    <div class="services-wrapper" v-if="!isServiceLoading && !isError">
      <div class="services">
        <service-list :services="desktopServices" :title="desktopTitle"></service-list>
        <service-list :services="mobileServices" :title="mobileTitle"></service-list>
      </div>
    </div>

    <loading-mark v-else-if="isServiceLoading"></loading-mark>

    <p v-else>Не удалось загрузить список услуг&#40;&#40;&#40;<br>Попробуйте обновить страницу</p>

    <p><strong>И это еще не все!</strong><br>Оставьте заявку, с вами свяжется менеджер и сориентрует вас по цене</p>
  </section>
</template>


<script>
import ServiceList from '@/components/ServiceList';
import LoadingMark from '@/components/UI/LoadingMark';
import axios from 'axios';


export default {
  data() {
    return {
      isServiceLoading: false,
      isError: false,
      desktopTitle: 'Компьютерный сервис',
      mobileTitle: 'Мобильные устройства',
      desktopServices: [],
      mobileServices: [],
    }
  },
  components: {
    ServiceList,
    LoadingMark,
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

  @media (max-width: 768px) {
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 375px) {
    padding: 40px 20px;
    p {
      font-size: 12px;
    }
  }
}

.services-wrapper {
  width: 100%;

  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.services {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 660px) {
    width: auto;
    gap: 30px;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>